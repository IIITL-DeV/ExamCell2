import { Button, Card, CardContent, CardHeader, Checkbox, IconButton, makeStyles, TextField, Typography } from '@material-ui/core'
import {  DeleteOutlined } from '@material-ui/icons';
import React, { useState } from 'react'

const useStyles = makeStyles({
    field: {
      marginTop: 20,
      marginBottom: 20,
      display: 'block'
    }
})

const Query = ({ quer }) => {
    
    const classes = useStyles();

    const [response, setResponse] = useState('');
    const [resolved, setResolved] = useState(false);

    const handleRes = () => {
        setResolved(true)
    }

    return (
        <div>
        <Card>
            <CardHeader
                action={
          <IconButton aria-label="settings" color="secondary" >
            <DeleteOutlined fontSize="large"/>
          </IconButton>
        }
                title={quer.title}
                subheader={quer.rollNo}
            />
            <CardContent>
                <Typography variant="body1">
                {quer.content}
                    </Typography>
                    
         <TextField className={classes.field}
          onChange={(e) => setResponse(e.target.value)}
          label="Response" 
          variant="outlined" 
          color="secondary"
                        multiline
          rows={4}
          fullWidth
          required
                    />
                    
                    <Button
          type="submit" 
          color="secondary" 
                        variant="contained"
                        onClick={handleRes}
          >
          Reply
        </Button>  


                </CardContent>
                
            </Card>
            </div>
    )
}

export default Query
