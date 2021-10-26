import { Button, FormControl, Grid, InputLabel, makeStyles, MenuItem, Select, TextField, Typography } from '@material-ui/core'
import { CheckCircleRounded, Keyboard } from '@material-ui/icons'
import React, { useState } from 'react'
import LayoutFaculty from './LayoutFaculty'


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
    field: {
      marginTop: 20,
      marginBottom: 20,
      display: 'block'
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
            <Typography variant="h4" gutterBottom>AddMarks</Typography>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>

            <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Batch</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={batch}
          label="Age"
          onChange={handleBatch}
        >
          <MenuItem value={2018}>2018</MenuItem>
          <MenuItem value={2019}>2019</MenuItem>
          <MenuItem value={2020}>2020</MenuItem>
          <MenuItem value={2021}>2021</MenuItem>
          
        </Select>
      </FormControl>

        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Semester</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={semester}
          label="Age"
          onChange={handleSemester}
                >
                    {sem.map(s => (
    
                        <MenuItem key={ s.id} value={s.id}>{s.SemNo}</MenuItem>
))}
                     

        </Select>
            </FormControl>
            
      <TextField className={classes.field}
          onChange={(e) => setSubject(e.target.value)}
          label="Subject Code" 
          variant="outlined" 
          color="secondary" 
          fullWidth
          required
        //   error={titleError}
            />

        <TextField className={classes.field}
          onChange={(e) => setRoll(e.target.value)}
          label="Enrollment No." 
          variant="outlined" 
          color="secondary" 
          fullWidth
          required
        //   error={titleError}
        />    

      <TextField className={classes.field}
          onChange={(e) => setObtained(e.target.value)}
          label="Obtained Marks" 
          variant="outlined" 
          color="secondary" 
          fullWidth
          required
        //   error={titleError}
        />
            
      <TextField className={classes.field}
          onChange={(e) => setTotal(e.target.value)}
          label="Total Marks" 
          variant="outlined" 
          color="secondary" 
          fullWidth
          required
        //   error={titleError}
        />

      <Button
          type="submit" 
          color="secondary" 
          variant="contained"
          endIcon={<CheckCircleRounded />}>
          Submit
        </Button>      
      </form>
        </LayoutFaculty>
    )
}

export default AddMarks
