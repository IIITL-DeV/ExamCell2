import React from 'react'
import { Snackbar } from '@material-ui/core'
import { Alert } from '@mui/material'
import  useStyles  from './styles'



const CustomSnackbar = ({open,setOpen,message}) => {

    const classes = useStyles();

    const handleClose = (event,reason) => {
        if (reason === 'clickaway') return;
        setOpen(false);
    }

    return (
        <div className={classes.root}>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity="success" elevation={6} variant="filled">{message}</Alert>
            </Snackbar>
        </div>
    )
}

export default CustomSnackbar
