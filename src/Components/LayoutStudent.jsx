import React from 'react'
import { Button, makeStyles } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import { useHistory, useLocation } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { AssessmentRounded, CloudDownloadOutlined, FontDownload, QueryBuilderOutlined,  } from '@material-ui/icons'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

const drawerWidth = 240

const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: '#f9f9f9',
      width: '100%',
      padding: theme.spacing(3),
    },
    root: {
      display: 'flex',
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    active: {
      background: '#f4f4f4'
    },
    title: {
      padding: theme.spacing(2),
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    date: {
      flexGrow: 1
    },
    toolbar: theme.mixins.toolbar
  }
})

export default function LayoutStudent({ children }) {
  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()

  const menuItemsStudent = [
    { 
      text: 'Check Result', 
      icon: <AssessmentRounded color="secondary" fontSize="large"/>, 
      path: '/checkResult' 
    },
      {
          text: 'Raise Query',
          icon: <QueryBuilderOutlined color="secondary" fontSize="large" />,
          path:'/raiseQuery'
    }
  ];

  return (
    <div className={classes.root}>
      {/* app bar */}
      <AppBar 
        position="fixed" 
        className={classes.appBar}
        elevation={0}
        color="primary"
      >
        <Toolbar>
          <Typography variant="h4" className={classes.date}>
            Student Roll Number
          </Typography>
          <Button
            variant="contained"
            href="/signin"
            color="secondary"
          > Log Out</Button>
        </Toolbar>
      </AppBar>

      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
      >
        <div>
          <Typography gutterBottom variant="h3" className={classes.title}>
                      ExamCell
          </Typography>
        </div>

        {/* links/list section */}
        <List>
          {menuItemsStudent.map((item) => (
            <ListItem 
              button 
              key={item.text} 
              onClick={() => history.push(item.path)}
              className={location.pathname === item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        
      </Drawer>

      {/* main content */}
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        { children }
      </div>
    </div>
  )
}