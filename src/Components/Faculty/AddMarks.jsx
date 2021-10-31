import { Button, FormControl, Grid, InputLabel, makeStyles, MenuItem, Paper, Select, TextField, Typography } from '@material-ui/core'
import { CheckCircleRounded, Keyboard } from '@material-ui/icons'
import React, { useState } from 'react'
import LayoutFaculty from '../LayoutFaculty'


const sem = [
    
    {
        id: "1",
        SemNo:"1"
    },
    {
        id: "2",
        SemNo:"2"
    },
    {
        id: "3",
        SemNo:"3"
    },
    {
        id: "4",
        SemNo:"4"
    },
    {
        id: "5",
        SemNo:"5"
    },
    {
        id: "6",
        SemNo:"6"
    },
    {
        id: "7",
        SemNo:"7"
    },
    {
        id: "8",
        SemNo:"8"
    },
]

const useStyles = makeStyles({
  card: {
    margin:"50px 8%",
    padding: "20px" 
},
field: {
    margin: "15px 10px",
    padding:"auto"
},
btn: {
    margin: "10px auto",
    padding: "10px 10px",
    display: "flex",
    alignSelf: "centre",
    width:"40%"
},
photofile: {
    border: "2px solid #d500f9",
    display: "flex",
    padding: '6px 6px',
    cursor: 'pointer',
    margin: "auto 10px",
    backgroundColor: "#edb6f7",
    
},
center: {
    textAlign: "center",
    margin: "auto",
    padding:"10px"
},
heading: {
    margin:"auto 35%",
    padding: "10px"
},
label: {
    backgroundColor: "white",
    padding: "auto",
},
formArea: {
    backgroundColor: "#f7c4e6",
    padding: "auto",
    borderRadius:"70px"
}
})

const AddMarks = () => {

    const [batch, setBatch] = React.useState('');
    const [semester, setSemester] = React.useState('');

    const [roll, setRoll] = useState('');

    const [subject, setSubject] = useState('')
    
    const [obtained, setObtained] = useState('')
    
    const [total,setTotal]=useState('')

    const handleBatch = (event) => {
      setBatch(event.target.value);
    };
    const handleSemester = (event) => {
      setSemester(event.target.value);
    };

    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(batch);
        console.log(roll);
        console.log(subject);
        console.log(semester);
    
      }


    return (
      <LayoutFaculty>
        <div className={classes.formArea}>
        <Paper className={classes.heading}>
            <Typography align="center" variant="h4" gutterBottom>AddMarks</Typography>
        </Paper>
        <Paper className={classes.card}>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>

            <FormControl fullWidth>
                <InputLabel
                  style={{color:"#d500f9"}} >Batch</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={batch}
          label="Age"
                  onChange={handleBatch}
                  variant="outlined"
        >
          <MenuItem value={2018}>2018</MenuItem>
          <MenuItem value={2019}>2019</MenuItem>
          <MenuItem value={2020}>2020</MenuItem>
          <MenuItem value={2021}>2021</MenuItem>
          
        </Select>
      </FormControl>

        <FormControl fullWidth>
                <InputLabel
                  style={{color:"#d500f9"}} id="demo-simple-select-label">Semester</InputLabel>
                <Select
                  variant="outlined"
                  // className={classes.field}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={semester}
          label="Se"
          onChange={handleSemester}
                >
                    {sem.map(s => (
    
                        <MenuItem key={ s.id} value={s.id}>{s.SemNo}</MenuItem>
))}
                     

        </Select>
            </FormControl>
            
      <TextField InputLabelProps={{
                                classes: {
                                    root: classes.label
                                }
                            }} className={classes.field}
          onChange={(e) => setSubject(e.target.value)}
          label="Subject Code" 
          variant="outlined" 
          color="secondary" 
          fullWidth
          required
        //   error={titleError}
            />

        <TextField InputLabelProps={{
                                classes: {
                                    root: classes.label
                                }
                            }} className={classes.field}
          onChange={(e) => setRoll(e.target.value)}
          label="Enrollment No." 
          variant="outlined" 
          color="secondary" 
          fullWidth
          required
        //   error={titleError}
        />    

      <TextField InputLabelProps={{
                                classes: {
                                    root: classes.label
                                }
                            }} className={classes.field}
          onChange={(e) => setObtained(e.target.value)}
          label="Obtained Marks" 
          variant="outlined" 
          color="secondary" 
          fullWidth
          required
        //   error={titleError}
        />
            
      <TextField InputLabelProps={{
                                classes: {
                                    root: classes.label
                                }
                            }} className={classes.field}
          onChange={(e) => setTotal(e.target.value)}
          label="Total Marks" 
          variant="outlined" 
          color="secondary" 
          fullWidth
          required
        //   error={titleError}
        />
      <div className={classes.center}>
      <Button
          type="submit" 
          color="secondary" 
          variant="contained"
          endIcon={<CheckCircleRounded />}>
          Submit
              </Button>
        </div>      
      </form>
      </Paper>
      </div>
        </LayoutFaculty>
    )
}

export default AddMarks
