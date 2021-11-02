import { doc, updateDoc ,setDoc,collection } from '@firebase/firestore'
import { TextField,Button, Typography, makeStyles } from '@material-ui/core'
import { Paper } from '@mui/material'
import React, { useState } from 'react'
import { db } from '../../init-firebase'
import LayoutAdmin from '../LayoutAdmin'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {uploadBytesResumable,getDownloadURL,getStorage,ref as sRef } from "firebase/storage"
import CustomSnackbar from '../Snackbar/Snackbar'
import { styled } from '@mui/material/styles';
import ImageIcon from '@material-ui/icons/Image';


import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 100,
    },
  },
};

const names = [
    "DMS431C (T)",

    "OSY431C (T)",
    
    
    "CNE431C (T)",
    
    
    "DAA431C (T)",
    
    
    "ACA431C (T)",
    
    
    "DMS431C (L)",
    
    
    "OSY431C (L)",
    
    
    "CNE431C (L)",
    
    
    "DAA431C (L)",
    
    
    "ACA431C (L)",
    
    
    "SPO401C (L)",
    
    "APL331C (T)",
    
    
    "COR340C (T)",
    
    
    "DMA340C (T)",
    
    
    "CAL340C (T)",
    
    
    "TOC340C (T)",
    
    
    "APL331C (L)"
];

function getStyles(name, subjects, theme) {
  return {
    fontWeight:
      subjects.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
  

const useStyles = makeStyles({
    card: {
        margin:"50px 8%",
        padding: "20px",
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
        margin:"2px 35%",
        padding: "10px",
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


const EditFaculties = () => {

    const classes = useStyles()
 
    const facultyCollectionRef = collection(db,"faculties")
 
    const [code, setCode] = useState("");
    const [name, setName] = useState("");
    const [subjects,setSubjects] = useState([])
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(false);


    const theme = useTheme();

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSubjects(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
      );
      
      console.log(subjects);
  };

    
    const AddFaculty = async () => {
        

        await setDoc(doc(db,"faculties",code), {
            name: name,
            code: code,
            subjects:subjects
        } )

        setOpen(true);

    }




    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(code, name, subjects);
        AddFaculty();
    }

    return (
        <div>
            <LayoutAdmin>
        <div className={classes.formArea}>
                <CustomSnackbar open={open} setOpen={setOpen} message={"Faculty Updated Succesfully !"} />

                <Paper
                    elevation={5}
                className={classes.heading}
                >
                    <Typography  InputLabelProps={{
                                classes: {
                                    root: classes.label
                                }
                            }} color="secondary" variant="h4" align="center">
                        Update Faculties
                    </Typography>
                </Paper>


                <Paper elevation={5} className={classes.card}>
                    <form>
                        <TextField
                            required
                            InputLabelProps={{
                                classes: {
                                    root: classes.label
                                }
                            }}
                                fullWidth
                                autoComplete="off"
                                className={classes.field}
                                variant="outlined"
                                label="Faculty Code"
                                color="secondary"
                                onChange={(e)=> setCode(e.target.value)}
                        />
                        <TextField
                            required
                            InputLabelProps={{
                                classes: {
                                    root: classes.label
                                }
                            }}
                                fullWidth
                                autoComplete="off"
                                className={classes.field}
                                variant="outlined"
                                label="Name"
                                color="secondary"
                                onChange={(e)=> setName(e.target.value)}
                            />
                            
{/*================Select Subjects================= */}
      <div className={classes.center}>                  
<FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel style={{color:"#d500f9"}}  id="demo-multiple-chip-label">Subjects</InputLabel>
                                <Select
                                    color="secondary"
                                    className={classes.field}
          style={{margin:"auto",width:"300px",display:"flex"}}                          
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={subjects}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Subjects" />}
          renderValue={(selected) => ( 
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, subjects, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
                            </FormControl>
                            </div>


                        <Button
                            endIcon={<KeyboardArrowRightIcon/>}
                            variant="contained"
                            color="secondary"
                            className={classes.btn}
                                onClick={handleSubmit}>Submit</Button>
                        </form>                                
                    </Paper>
                    
            </div>

            </LayoutAdmin>
        </div>
    )
}

export default EditFaculties