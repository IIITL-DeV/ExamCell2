import { Button, Card, CardContent, CardHeader,  IconButton, makeStyles, TextField, Typography } from '@material-ui/core'
import {  DeleteOutlined } from '@material-ui/icons';
import React, { useState } from 'react'
import { doc, updateDoc,deleteDoc } from '@firebase/firestore'
import { db } from '../../init-firebase';

const useStyles = makeStyles({
    field: {
      marginTop: 20,
      marginBottom: 20,
      display: 'block'
    }
})

const Query = (props) => {
    
    const classes = useStyles();

    const [response, setResponse] = useState('');
    // const [resolved, setResolved] = useState(false);

    const handleRes = async (id) => {
        // setResolved(true);
        console.log(id);
        const docRef = doc(db, "queries", id);
        try {
            await updateDoc(docRef, {
                "isResolved": true,
                "response": response
            },
            {merge:true}
            )
        } catch (err) {
            console.log(err.message)
        }
    }

    const handleDelete = async (id) => {
        try {
            const docRef = doc(db, "queries", id);
            await deleteDoc(docRef);
            console.log("delted", id);
        } catch(err) {
            alert(err.message)
        }
    }

    return (
        <div>
        <Card>
            <CardHeader
                action={
          <IconButton aria-label="settings" color="secondary" >
            <DeleteOutlined onClick={()=> handleDelete(props.quer.id)} fontSize="large"/>
          </IconButton>
        }
                title={props.quer.title}
                    subheader={`from : ${props.quer.from}`}
            />
            <CardContent>
                <Typography variant="body1">
                {props.quer.body}
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
                        onClick={() => { handleRes(props.quer.id) }}
          >
          Reply
        </Button>  


                </CardContent>
                
            </Card>
            </div>
    )
}

export default Query
