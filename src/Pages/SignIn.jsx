import React, { useRef ,useState } from 'react'
import { useHistory } from 'react-router';
import {logout,signup,useAuth,login} from '../init-firebase'



const SignIn = () => {

  const emailRef = useRef();
  const passwordRef = useRef();

  const history = useHistory();

  const [loading, setLoading] = useState(false);

  const currentUser = useAuth();

  async function handleSignup() {
    setLoading(true);
      try {
        const cred = await signup(emailRef.current.value, passwordRef.current.value);
        history.push('/');
      } catch {
        alert("Already exists!")
    }
    setLoading(false);
  }  
  
  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error!")
    }
    setLoading(false);
  }

  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/');
    } catch {
      alert("Error!")
    }
    setLoading(false);
  }

    return (
          <div>
        <div style={{ margin: "20px", padding: "10px" }} className="signup">
        <input style={{ margin: "20px", padding: "10px" }} ref={emailRef} placeholder="Email"/>
        <input style={{ margin: "20px", padding: "10px" }} ref={passwordRef} type="password" placeholder="Password"/>
          <button disabled={loading || currentUser} onClick={handleSignup}> Sign Up</button>
          
          
          <div style={{ margin: "20px", padding: "10px" }}><h2>current User is : {currentUser?.email} </h2></div>
          <button disabled={!currentUser || loading} onClick={handleLogout}> Log Out</button>
          
          <button disabled={currentUser || loading} onClick={handleLogin}> Log In</button>
    </div>
      
  </div>
      )
    }
  
  export default SignIn
  


