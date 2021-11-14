import React, {   useState } from 'react'
import { Button, Container, Divider, Grid,  makeStyles, Paper, TextField, Typography } from '@material-ui/core'
import ResQuery from './ResQuery';
import { KeyboardArrowRightRounded, Refresh } from '@material-ui/icons';
import { addDoc, collection,  getDocs, query, where } from '@firebase/firestore';
import { db, useAuth } from '../../init-firebase';

const useStyles = makeStyles({
    card: {
        margin:"50px 8%",
        padding: "10px",
    },
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    },
    label: {
        backgroundColor: "#fff",
        padding: "auto",
    },
    center: {
        textAlign: "center",
        margin: "auto",
        padding: "5px"
    },
    heading: {
        margin:"5px 35%",
        padding: "10px",
    },
    formArea: {
        backgroundColor: "#f7c4e6",
        padding: "auto",
        borderRadius:"70px"
    }
})






const SubmitQuery = () => {

    const classes = useStyles()
    const user = useAuth();
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [faculty, setFaculty] = useState('')

    // const [clicked, setClicked] = useState(false);

    const [resolvedQ,setResolvedQ]=useState([])
    const [unresolvedQ,setUnresolvedQ]=useState([])



    const handleSubmit =  async (e) => {
        
        e.preventDefault();
        // console.log(title);
        // console.log(details);
        // console.log("submited query!")
        
        const toFac = faculty + "@test.com";

        try {
            await addDoc(collection(db, "queries"), {
                title: title,
                body: details,
                from: user.email,
                to: toFac,
                isResolved: false
            });
            setDetails("");
            setFaculty("");
            setTitle("");
            fetchResolvedQ();
            fetchUnresolvedQ();
        } catch(err) {
            alert(err.message)
        }



    }



    const fetchResolvedQ = async () => {
        console.log(user?.email);
        try {
            const queriesCollectionRef = collection(db, "queries");
            const q = query(queriesCollectionRef, where("from", "==", user.email),where("isResolved","==",true))
            // console.log(user.email)

            const snapshot = await getDocs(q);
            await setResolvedQ(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            // console.log(resolvedQ);

        } catch {
            alert("error!")
        }
    }

    const fetchUnresolvedQ = async () => {
        
        try {
            const queriesCollectionRef = collection(db, "queries");
            const q = query(queriesCollectionRef, where("from", "==", user.email),where("isResolved","==",false))
            // console.log(user.email)

            const snapshot = await getDocs(q);
            await setUnresolvedQ(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            // console.log(unresolvedQ);

        } catch {
            alert("error!")
        }
    }

    // useEffect(() => {
    //     fetchResolvedQ();
    //     fetchUnresolvedQ();
    // }, [clicked]);
        


    return (
        <Container size="sm">
            <div className={classes.formArea}>
            <Paper
                    elevation={5}
                className={classes.heading}
                >
                    <Typography
                        value={faculty}
                        color="secondary" variant="h4" align="center">
                        Add New Query
                    </Typography>
                </Paper>
                <div className={classes.center}>
                    <Paper elevation={5} className={classes.card}>
            <form
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                            <TextField
                                value={faculty}
                            InputLabelProps={{
                                classes: {
                                    root: classes.label
                                }
                            }}  className={classes.field}
          onChange={(e) => setFaculty(e.target.value)}
          label="Faculty Code" 
          variant="outlined"
          color="secondary" 
          fullWidth
          required
        //   error={titleError}
                />

                            <TextField
                                value={title}
                            InputLabelProps={{
                                classes: {
                                    root: classes.label
                                }
                            }}  className={classes.field}
          onChange={(e) => setTitle(e.target.value)}
          label="Query Title" 
          variant="outlined" 
          color="secondary" 
          fullWidth
          required
        //   error={titleError}
                />
                
               
                
                            <TextField
                                value={details}
                            InputLabelProps={{
                                classes: {
                                    root: classes.label
                                }
                            }}  className={classes.field}
          onChange={(e) => setDetails(e.target.value)}
          label="Details"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
        //   error={detailsError}
                />
                
            <Button
          type="submit" 
          color="secondary" 
          variant="contained"
          endIcon={<KeyboardArrowRightRounded fontSize="large" />}>
          Submit
                </Button>
                
            </form>
            </Paper>
            </div>
            </div>

            <div>
            <Divider className={classes.field} />

            
            <Typography
            
                variant="h5"
            color="textSecondary"
            component="h2"
                    gutterBottom
                    align="center"
            >
        Resolved Queries.
                </Typography>
            <div className={classes.center}>
                <Refresh
                    
                    fontSize="large"
                    color="secondary"
                    onClick={fetchResolvedQ}
                    style={{
                        width:"100px",
                        margin: "10px auto",
                        border: "1px solid #d500f9",
                        backgroundColor:"pink"
                    }}
                /></div>

            <br />
                
        <Grid container spacing={3}>
                    
                    {resolvedQ.map(quer => (
                        <Grid item xs={12} sm={6} md={4} lg={4} key={quer.id}>
                            <ResQuery resolved={true} quer={quer}/>
                        </Grid>

                    ))}
                    
        </Grid>

        </div>

            <Divider className={classes.field} />


            <Typography
            
            variant="h5"
            color="textSecondary"
            component="h2"
                gutterBottom
                align="center"
        >
        Unresolved Queries.
            </Typography>
            <div className={classes.center}>
            <Refresh
                    
                    fontSize="large"
                    color="secondary"
                    onClick={fetchUnresolvedQ}
                style={{
                        width: "100px",
                        margin: "10px auto",
                        border: "1px solid #d500f9",
                        backgroundColor:"pink"
                    }}
                /></div>
        <Grid container spacing={3}>
                    
                    {unresolvedQ.map(quer => (
                        <Grid item xs={12} sm={6} md={4} lg={4} key={quer.id}>
                            <ResQuery resolved={false} quer={quer}/>
                        </Grid>

                    ))}
                    
                </Grid>

        </Container>
    )
}

export default SubmitQuery
