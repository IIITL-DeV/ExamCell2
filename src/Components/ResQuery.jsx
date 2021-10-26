import { Button, Card, CardContent, CardHeader, Divider, IconButton, makeStyles, TextField, Typography } from '@material-ui/core'
import { DeleteOutlined } from '@material-ui/icons'
import React, { useState } from 'react'

const useStyles = makeStyles({
    field: {
      marginTop: 20,
      marginBottom: 20,
      display: 'block'
    }
})

const ResQuery = (props) => {
    
    const classes = useStyles();

    const [response, setResponse] = useState('');
    const [resolved, setResolved] = useState(false);

    const handleRes = () => {
        setResolved(true)
    }


    return (
        <Card>
            <CardHeader
                action={
          <IconButton aria-label="settings" color="secondary" >
            <DeleteOutlined fontSize="large"/>
          </IconButton>
        }
                title={props.quer.title}
                subheader={props.quer.rollNo}
            />
            <CardContent>
                <Typography variant="h6">
                {props.quer.content}
                    </Typography>
                <Divider className={classes.field}/>
                <Typography variant="h5">
                    
                    {props.resolved? props.quer.response : null}
               </Typography>
                    

                </CardContent>
                
            </Card>

    )
}

export default ResQuery
