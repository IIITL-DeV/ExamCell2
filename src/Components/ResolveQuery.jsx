import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import LayoutFaculty from './LayoutFaculty'
import Query from './Query'


const queryArr = [

    {
        id: '1',
        title: "Example title of Query",
        rollNo: "abc20iikl",
        content: "I am a sample query detail  I am a sample query detail ",
        
    },
    {
        id: '2',
        title: "Example title of Query",
        rollNo: "abc20kloo",
        content: "I am a sample query detail  I am a sample query detail ",
        
    },
    {
        id: '3',
        title: "Example title of Query",
        rollNo: "abc20pill",
        content: "I am a sample query detail  I am a sample query detail ",
        
    },
    {
        id: '4',
        title: "Example title of Query",
        rollNo: "abc20kplm",
        content: "I am a sample query detail  I am a sample query detail ",
        
    }
]

const ResolveQuery = () => {
    return (
        <LayoutFaculty>
            
            <Typography gutterBottom variant="h4">Unresolved Queries</Typography>

            <Grid container spacing={3}>
                    
                        {queryArr.map(quer => (
                            <Grid item xs={12} sm={6} md={4} lg={4} key={quer.id}>
                                <Query quer={quer}/>
                            </Grid>

                        ))}
                        
                    </Grid>


        </LayoutFaculty>
    )
}

export default ResolveQuery
