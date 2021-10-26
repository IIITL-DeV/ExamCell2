import { createTheme , ThemeProvider } from '@material-ui/core';
import "bootstrap/dist/css/bootstrap.min.css"
import { purple } from '@material-ui/core/colors';
import {Container} from 'react-bootstrap'
import React from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Admin from './Pages/Admin';
import Student from './Pages/Student';
import Faculty from './Pages/Faculty';
import AddMarks from './Components/AddMarks';
import ResolveQuery from './Components/ResolveQuery';
import CheckResult from './Components/CheckResult';
import SubmitQuery from './Components/SubmitQuery';
import LayoutStudent from './Components/LayoutStudent';
import AuthProvider from './Context/AuthContext';
import AddNotice from './Components/AddNotice';
import EditToppers from './Components/EditToppers';
import EditFaculties from './Components/EditFaculties';
import CheckResultAdmin from './Components/CheckResultAdmin';
import EditStudents from './Components/EditStudents';
import LayoutAdmin from './Components/LayoutAdmin';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
    secondary: purple
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})

const App = () => {
  return (
    
    <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        
          <Route path="/about">
          <About/>
          </Route>
          
          <Route path="/contact">
          <Contact/>
          </Route>
          
          <Route path="/signIn">
          <SignIn/>
          </Route>
          
          <Route path="/signUp">
             <SignUp/>
          </Route>

          <Route path="/admin">
          <Admin/>
          </Route>
          
          <Route path="/student">
          <Student/>
          </Route>

          <Route path="/faculty">
          <Faculty/>
          </Route>

          <Route path="/add-marks">
          <AddMarks/>
          </Route>

          <Route path="/resolve-query">
          <ResolveQuery/>
          </Route>

          <Route path="/add-notice">
          <AddNotice/>
          </Route>

          <Route path="/edit-toppers">
          <EditToppers/>
          </Route>

          <Route path="/checkResultAdmin">
            <LayoutAdmin>
          <CheckResultAdmin/>
          </LayoutAdmin>
          </Route>

          <Route path="/edit-students">
          <EditStudents/>
          </Route>

          <Route path="/edit-faculties">
          <EditFaculties/>
          </Route>

          <Route path="/checkResult">
          <LayoutStudent>
          <CheckResult/>
          </LayoutStudent>
          </Route>

          <Route path="/raiseQuery">
            <LayoutStudent>
          <SubmitQuery/>
          </LayoutStudent>
          </Route>

          <Route path="/">
          <Home/>
          </Route>
          
    </Switch>
      </Router>
      </ThemeProvider>
      
  )
}

export default App
