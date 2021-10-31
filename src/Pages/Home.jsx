import {  Container, Divider, Grid,  Paper, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Marquee from 'react-double-marquee'
import TopperCard from '../Components/TopperCard'
import { makeStyles } from '@material-ui/core'
import newlogo from '../Assets/new_flash.gif'
import Layout from '../Components/Layout'

import {db} from '../init-firebase'
import {collection,getDocs} from 'firebase/firestore' 


const useStyles = makeStyles({
    topperSec: {
        // minWidth: 300,
        marginLeft: 20
    },
    toolbar: {
        height: 100
    },
    gif: {
        width:35
    },
    notice: {
        minWidth:200,
        maxWidth: "100%",
    }
})

const toppers = [
    {
        id:'1',
        name: "Lav Joshi",
        batch: "Batch 2023",
        cgpa: "9.61",
        photo:"https://avatars.dicebear.com/api/male/bo.svg"

    },
    {
        id:'2',
        name: "Manish Pandey",
        batch: "Batch 2022",
        cgpa: "9.41",
        photo:"https://avatars.dicebear.com/api/male/bmo.svg"
    },
    {
        id:'3',
        name: "Nishkarsh Shukla",
        batch: "Batch 2021",
        cgpa: "9.77",
        photo:'https://avatars.dicebear.com/v2/male/7a991cbc556165d75108131e0f192843.svg'
    }
]




const Home = () => {

    
    const [newNotices, setNewNotices] = useState([])
    const [newToppers, setNewToppers] = useState([])
    const noticeCollectionRef = collection(db,"notices")
    const toppersCollectionRef = collection(db,"toppers")

    const classes = useStyles();

    useEffect(() => {
        const getNotices = async () => {
            const data = await getDocs(noticeCollectionRef)
            // console.log(data);
            setNewNotices(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        };

        const getToppers = async () => {
            const data = await getDocs(toppersCollectionRef)
            // console.log(data);
            setNewToppers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        };

                

        getNotices();
        getToppers();
        
            
    }, [])

    newNotices.sort(function(a,b){return b.new-a.new});
            // console.log(newNotices)


    return (
        <>
            <div className={classes.toolbar}></div>
        <Container>
            
            
            <Grid container spacing={10}>

                {/* Notices Section Starts */}

                <Grid className={classes.notice} item xs={3} sm={3} md={3}>
                    <Typography gutterBottom align="center" variant="h4">Notices
                    </Typography>
                    <Divider/>
                    <Paper
                            elevation={5}
                            style={
                                {
                                    border: 'dashed 2px hsla(0, 95%, 35%, 1)'
                                }}
                    >
                        <Typography gutterBottom align="center" variant="h5">
                        Here we have notices!
                        </Typography>
                    <Divider/>

                        <div style={{
                            width: '98%',
                            height:"100%",
                            whiteSpace: 'nowrap',
                                color: 'red',
                        }}>
                    
                        
                            {newNotices.map(note => (
                                <Marquee direction={"left"} delay={'1'} key={note.id}>
                                    {note.body}
                                    {note.new && <img alt="new" className={classes.gif} src={newlogo} /> }
                                    
                </Marquee>       
                                
                   ))}         


                    </div>
                    </Paper>
                </Grid>

                {/* Notices Section ends */}

                {/* toppers Section starts */}

                <Grid className={classes.topperSec} item xs={8} sm={8} md={8}>
                    
                    <Typography variant="h4" align="center" gutterBottom>
                        Toppers 
                    </Typography>
                    <Grid container spacing={3}>
                    
                        {newToppers.map(top => (
                            <Grid item xs={12} md={6} lg={6} key={top.id}>
                                <TopperCard topperdata={top}/>
                            </Grid>

                        ))}
                        
                    </Grid>

                </Grid>
                {/* toppers Section end */}

            </Grid>

                </Container>
            </>
    )
}

export default Home
