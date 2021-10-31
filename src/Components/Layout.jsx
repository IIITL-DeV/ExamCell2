import React from 'react'
import { AppBar, makeStyles, Button, Toolbar, Typography } from '@material-ui/core'
import Stack from '@mui/material/Stack';
import { mergeClasses } from '@material-ui/styles'
import { useHistory } from 'react-router'

import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';
import { useAuth } from '../Context/AuthContext';
import {Box} from '@mui/material'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const useStyles = makeStyles((theme) => {
    return {

        appBar: {
            padding: theme.spacing(3),
        }


    }
})


const Layout = ({children}) => {

    const classes = useStyles();
    const history = useHistory();
    const { currentUser,logout } = useAuth();

    return (
        <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{background:"#f9f1f9"}}>
    <Toolbar>
                        <Button variant="text"
                            onClick={()=>history.push('/')}
                        >
            <Typography variant="h4">
                ExamCell
                            </Typography>
          </Button>
                            <div style={{flexGrow:1}}></div>
         {!currentUser && <Button onClick={()=>history.push('/signin')} variant="text">Login</Button>}
                        {currentUser
                         && <Button onClick={() => history.push('/signin')} variant="text">Logout</Button>}
        </Toolbar>
      </AppBar>
    </Box>
            <div>{children}</div>
        </>
    )
}

export default Layout
