import React from 'react'
import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core'
import { mergeClasses } from '@material-ui/styles'

const useStyles = makeStyles((theme) => {
    return {

        appBar: {
            padding: theme.spacing(3),
        }


    }
})


const Navbar = () => {

    const classes = useStyles();

    return (
        <>
            <AppBar className={mergeClasses.appBar}>
                <Toolbar>
                    <Typography>
                        Examcell
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
