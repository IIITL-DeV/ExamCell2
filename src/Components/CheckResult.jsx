import React, { useState } from 'react'
import { Avatar, Button, Container, Divider, Grid, List, ListItem, makeStyles, Typography } from '@material-ui/core'
import ResultForm from './ResultForm'
import { ClassNames } from '@emotion/react'

const semList = [

    {
        id: '1',
        sem:'1'
    },

    {
        id: '2',
        sem:'2'
    },

    {
        id: '3',
        sem:'3'
    },

    {
        id: '4',
        sem:'4'
    },

    {
        id: '5',
        sem:'5'
    },

    {
        id: '6',
        sem:'6'
    },

    {
        id: '7',
        sem:'7'
    }


]

const useStyles = makeStyles({
    space: {
        marginTop: 50,
        marginBottom: 50,
        display:'block'
    }
})


const CheckResult = () => {

    const classes = useStyles();

    const [showForm, setShowForm] = useState(false)

    const displayForm = (e) => {
        console.log(e);
        setShowForm(!showForm);
    }

    if (showForm) {
        return (
            <Container>
                <Grid Container spacing={5}>
                    
                    <Grid item>
                <Typography
                    variant="h5"
                    component="h2"
                    color='textSecondary'
                    gutterBottom
                    align="center"
                >
                    Available results.
                </Typography>

                 

                {semList.map(s => {
                    return s.id!='7' ?
                        <Button color="secondary" onClick={displayForm}>View Result for Semester {s.sem}
                        </Button>
                        :
                        <Button
                            color="secondary"
                            endIcon={
          <Avatar
            src={
              "https://i.ibb.co/s6xKX14/new-gif.gif"
            }
          />
        }
                            onClick={displayForm}
                        >View Result for  Semester {s.sem}
                        </Button>

                    
                })}
                
            </Grid>

                <Divider />
                 
                    <Grid item>
                
                    <ResultForm />
                   </Grid> 
               
              </Grid>     
            </Container>
        )
    } else {
        return (
            <Container>
                <Typography
                    variant="h5"
                    component="h2"
                    color='textSecondary'
                    gutterBottom
                    align="center"
                >
                    Available results.
                </Typography>

                {semList.map(s => {
                    return s.id!='7' ?
                        <Button color="secondary" onClick={displayForm}>View Result for Semester {s.sem}
                        </Button>
                        :
                        <Button
                    color="secondary"
                            endIcon={
          <Avatar
            src={
              "https://i.ibb.co/s6xKX14/new-gif.gif"
            }
          />
        }
                            onClick={displayForm}
                        >View Result for  Semester {s.sem}
                        </Button>

                    
                })}

           

            </Container>
        )
    }
}

export default CheckResult
