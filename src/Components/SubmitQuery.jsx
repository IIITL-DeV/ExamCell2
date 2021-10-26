import React, { useState } from 'react'
import { Button, Container, Divider, Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import ResQuery from './ResQuery';
import { ArrowRight, KeyboardArrowRightRounded } from '@material-ui/icons';

const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block',
        background:'#fbecfd'
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
            <Typography
                variant="h5"
                color="textSecondary"
                component="h2"
                gutterBottom
            >
            Submit a New Query.
            </Typography>

            <form
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
            <TextField className={classes.field}
          onChange={(e) => setTitle(e.target.value)}
          label="Subject Code" 
          variant="filled"
          color="secondary" 
          fullWidth
          required
        //   error={titleError}
                />

            <TextField className={classes.field}
          onChange={(e) => setTitle(e.target.value)}
          label="Query Title" 
          variant="filled" 
          color="secondary" 
          fullWidth
          required
        //   error={titleError}
                />
                
               
                
           <TextField className={classes.field}
          onChange={(e) => setDetails(e.target.value)}
          label="Details"
          variant="standard"
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
