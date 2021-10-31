import React, { useState } from 'react'
import { Button, Container, Divider, Grid, makeStyles, Paper, TextField, Typography } from '@material-ui/core'
import ResQuery from './ResQuery';
import { KeyboardArrowRightRounded } from '@material-ui/icons';

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
        margin: "auto 5%",
        padding: "5px",
        marginTop: "20px",
        background: "#fde2f7",
        borderRadius:"50px"
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

const queryArr = [

    {
        id: '1',
        title: "Example title of Query",
        rollNo: "abc20iikl",
        content: "I am a sample query detail  I am a sample query detail ",
        response: "I am a sample response I am a sample response "
        
    },
    {
        id: '2',
        title: "Example title of Query",
        rollNo: "abc20kloo",
        content: "I am a sample query detail  I am a sample query detail ",
        response: "I am a sample response I am a sample response "
    },
    {
        id: '3',
        title: "Example title of Query",
        rollNo: "abc20pill",
        content: "I am a sample query detail  I am a sample query detail ",
        response: "I am a sample response I am a sample response "
        
    }
]

const SubmitQuery = () => {

    const classes = useStyles()

    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')

    const handleSubmit = (e) => {
        
        e.preventDefault()
        console.log(title);
        console.log(details);
        console.log("submited query!")

    }


    return (
        <Container size="sm">
            <div className={classes.formArea}>
            <Paper
                    elevation={5}
                className={classes.heading}
                >
                    <Typography color="secondary" variant="h4" align="center">
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
                            InputLabelProps={{
                                classes: {
                                    root: classes.label
                                }
                            }}  className={classes.field}
          onChange={(e) => setTitle(e.target.value)}
          label="Subject Code" 
          variant="outlined"
          color="secondary" 
          fullWidth
          required
        //   error={titleError}
                />

            <TextField
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

            <Divider className={classes.field} />

            <Typography
            
                variant="h5"
            color="textSecondary"
            component="h2"
            gutterBottom
        >
        Resolved Queries.
        </Typography>

        <Grid container spacing={3}>
                    
                    {queryArr.map(quer => (
                        <Grid item xs={12} sm={6} md={4} lg={4} key={quer.id}>
                            <ResQuery resolved={true} quer={quer}/>
                        </Grid>

                    ))}
                    
                </Grid>

            
            <Divider className={classes.field} />

            <Typography
            
            variant="h5"
            color="textSecondary"
            component="h2"
            gutterBottom
        >
        Unresolved Queries.
        </Typography>

        <Grid container spacing={3}>
                    
                    {queryArr.map(quer => (
                        <Grid item xs={12} sm={6} md={4} lg={4} key={quer.id}>
                            <ResQuery resolved={false} quer={quer}/>
                        </Grid>

                    ))}
                    
                </Grid>

        </Container>
    )
}

export default SubmitQuery
