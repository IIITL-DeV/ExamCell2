import React from 'react'
import { useState } from 'react'
import { signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword , onAuthStateChanged} from 'firebase/auth';
import { auth } from '../init-firebase'
import {Container, TextField, Typography} from '@material-ui/core'
import { Button, Grid, Paper, Avatar } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core';
import { Alert } from '@mui/material';
import { useAuth } from '../Context/AuthContext';
import useMounted from '../hooks/useMounted';
import { useHistory, useLocation } from 'react-router';

const useStyles = makeStyles({

  btn: {
    backgroundColor: "#e87dfa",
    margin: "4vh auto"
  },
  inp: {
    margin:"20px auto"
  },
  grid: {
    marginTop:"20vh"
  }

})


const SignIn = () => {

    const classes = useStyles()

  const history = useHistory()
  const location = useLocation()
  
    const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isSubmitting,setIsSubmitting] = useState(false)

  const { login } = useAuth()
  
  const mounted = useMounted()

      
  function handleRedirectToOrBack() {
    // console.log(location?.state)
    history.replace(location.state?.from ?? '/')
    // if (location.state) {
    //   history.replace(location.state?.from)
    // } else {
    //   history.replace('/profile')
    // }
  }
  

  const paperStyle = {padding:20,height:'70vh',width:"400px",marin:"20px auto"}
  
  const avatarStyle = {backgroundColor:'#d500f9'}
  return (
    <Container>
      <Grid align= 'center' className={classes.grid}>
        <Paper elevation={10} style={paperStyle}>
          
          <Grid align='center' >
          <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
          <Typography variant="h4"> Sign In</Typography>
          </Grid>
          <form
          onSubmit={async e => {
            e.preventDefault()
            if (!loginEmail || !loginPassword) {
              // toast({
              //   description: 'Credentials not valid.',
              //   status: 'error',
              //   duration: 9000,
              //   isClosable: true,
              // })
              return
            }
            // your login logic here
            setIsSubmitting(true)
            login(loginEmail, loginPassword)
              .then(res => {
                handleRedirectToOrBack()
              })
              .catch(error => {
                console.log(error.message)
                // toast({
                //   description: error.message,
                //   status: 'error',
                //   duration: 9000,
                //   isClosable: true,
                // })
              })
              .finally(() => {
                // setTimeout(() => {
                //   mounted.current && setIsSubmitting(false)
                //   console.log(mounted.current)
                // }, 1000)
                mounted.current && setIsSubmitting(false)
              })
          }}
          >
          <TextField
            color="secondary"
            variant="filled"
            className={classes.inp}
            label="Email" 
            placeholder="Enter Email"
            onChange={(e) => { setLoginEmail(e.target.value) }}
            fullWidth
            required
            type="email"
          />
          <TextField
            color="secondary"
            variant="filled"
            className={classes.inp}
            label="Password"
            placeholder="Enter Password"
            onChange={(e) => { setLoginPassword(e.target.value) }}
            required
            fullWidth
            type="password"
          />
          <Button className={classes.btn} type="submit" color="secondary"
            fullWidth> Login </Button>
            </form>
          
          <Typography gutterBottom color="secondary" variant="body2">Forgot password? Contact Admin at ECAdmin@iiitl.ac.in</Typography>
          
          </Paper>
      </Grid>
       
      </Container>

      )
  }
  
  export default SignIn
  


