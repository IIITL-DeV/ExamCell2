import { Grid, makeStyles, Typography } from '@material-ui/core'
import React, {  useState }from 'react'
import { db, useAuth } from '../../init-firebase'
import LayoutFaculty from '../LayoutFaculty'
import Query from '../Student/Query'
import { collection,  getDocs, query, where } from '@firebase/firestore';
import { Refresh } from '@material-ui/icons'


const useStyles = makeStyles({
    center: {
        textAlign: "center",
        margin: "auto",
        padding: "5px"
    },
    heading: {
        margin:"5px 35%",
        padding: "10px",
    }
})



// const queryArr = [

//     {
//         id: '1',
//         title: "Example title of Query",
//         rollNo: "abc20iikl",
//         content: "I am a sample query detail  I am a sample query detail ",
        
//     },
//     {
//         id: '2',
//         title: "Example title of Query",
//         rollNo: "abc20kloo",
//         content: "I am a sample query detail  I am a sample query detail ",
        
//     },
//     {
//         id: '3',
//         title: "Example title of Query",
//         rollNo: "abc20pill",
//         content: "I am a sample query detail  I am a sample query detail ",
        
//     },
//     {
//         id: '4',
//         title: "Example title of Query",
//         rollNo: "abc20kplm",
//         content: "I am a sample query detail  I am a sample query detail ",
        
//     }
// ]

const ResolveQuery = () => {

    const [queriesArr, setQueriesArr] = useState([]);
    const currentUser = useAuth();
    const classes = useStyles();

    const fetchQueriesArr = async () => {
        console.log(currentUser.email);
        
        try {
            const queriesCollectionRef = collection(db, "queries");
            const q = query(queriesCollectionRef, where("to", "==", currentUser.email),where("isResolved","==",false))

            const snapshot = await getDocs(q);
            console.log(snapshot);
            await setQueriesArr(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            console.log(queriesArr);

        } catch(err) {
            console.log(err.message)
        }
    }

    return (
        <LayoutFaculty>
            
            <Typography align="center" gutterBottom variant="h4">Unresolved Queries</Typography>
            <div className={classes.center}>
                <Refresh
                    
                    fontSize="large"
                    color="secondary"
                    onClick={fetchQueriesArr}
                    style={{
                        width:"100px",
                        margin: "10px auto",
                        border: "1px solid #d500f9",
                        backgroundColor:"pink"
                    }}
                /></div>
            <Grid container spacing={3}>
                    
                        {queriesArr.map(quer => (
                            <Grid item xs={12} sm={6} md={4} lg={4} key={quer.id}>
                                <Query quer={quer}/>
                            </Grid>

                        ))}
                        
                    </Grid>


        </LayoutFaculty>
    )
}

export default ResolveQuery
