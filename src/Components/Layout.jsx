import React from 'react'
import { AppBar, makeStyles, Button, Toolbar, Typography } from '@material-ui/core'
import Stack from '@mui/material/Stack';
import { mergeClasses } from '@material-ui/styles'
import { useHistory } from 'react-router'

import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';
import { Box } from '@mui/material'
import { logout ,useAuth} from '../init-firebase';

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
    const currentUser = useAuth();

    async function handleLogout() {
        // setLoading(true);
        try {
            await logout();
            history.push('/')
        } catch {
          alert("Error!")
        }
        // setLoading(false);
      }

    return (
        <>
           
    <Box sx={{ flexGrow: 1 }}>
      <AppBar elevation={3} position="static" style={{background:"d500f9"}}>
    <Toolbar>
                        <Button variant="text"
                            onClick={()=>history.push('/')}
                        >
            <Typography variant="h3">
                ExamCell
                            </Typography>
          </Button>
                        <div style={{ flexGrow: 1 }}></div>
                        {currentUser && <Button>My Section</Button> }
                        {!currentUser && <Button onClick={() => history.push('/signin')}>Login</Button>}
                        {currentUser && <Button onClick={handleLogout} >Logout</Button>}
        </Toolbar>
      </AppBar>
    </Box>
                <div>{children}</div>
           
        </>
    )
}

export default Layout
