import { Container, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography ,Button, Grid, Divider } from '@material-ui/core'
import { useReactToPrint } from 'react-to-print';
import React, { useRef } from 'react'
// import avatarResult from '../Assets/avtarResult.jpg'
import DownloadingIcon from '@mui/icons-material/Downloading';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

const rows = [
    createData('EDA123', 91, 100, "A+", 93),
    createData('ABC999', 90, 100, "A", 91),
    createData('DAA192', 62, 100, "C", 90),
    createData('SE230', 85, 100, "A", 88),
    createData('CRP123', 70, 100, "B" , 95),
  ];
 

  const useStyles = makeStyles({
    root: {
        marginTop: 40,
        marginBottom: 20,
      display: 'block',
  
        
    },
    detailCard: {
      margin: "10px auto",
      padding: "30px"
    },
    img: {
      width: "100%",
      maxWidth: "200px",
      display: "flex",
      justifyContent:"centre"
    },
    detail: {
      width: "60%",
      display: "flex",
      padding:"5px" ,
      justifyContent:"centre"
    },
    btn: {
      padding: "20px auto",
      margin:"20px",
      display: 'flex',
      padding:"20px" ,
      justifyContent: 'center'
    },
    center: {
      padding: "2px",
      display:"flex",
      justifyContent:"center",
      widht: "50%",
      border: "2px solid black",
      borderRadius:"15px"
    },
    divs: {
      // display: "inline-block",
      padding: "10% auto",
      margin:"auto 5%"
    }
    
})

const ResultForm = () => {

  const classes = useStyles()
  const componentRef = useRef()
  
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
    
  });


    return (

        <Container className={classes.root}>
            <Typography align="center" variant="h4" gutterBottom>
                Result for Semester
        </Typography>
        
        <div ref={componentRef} >
          
          <Paper className={classes.detailCard} elevation={3}>
        <div className={classes.center}>    
        
              <div  >
                <h5>Name: Ram Singh</h5>
                <h5>Batch: CS 2019</h5>
                <h5>Roll No. : LCS2019099 </h5>
                <h5>CGPA: 8.7 </h5>
                <h5>Semester: 4 </h5>
              </div>
              <div className={classes.divs}>
                <img src={ "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiHtdakfs0OGh1nAVPxfxSzZQ6_ahfebaLKg&usqp=CAU"} style={{width:"120px", height:"120px",border:"2px solid black"}} alt="img"/>
              </div>
          
        </div>
        </Paper> 

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>    
              <TableRow>
                <TableCell>Subject Code</TableCell>
                <TableCell align="right">Obtained Marks</TableCell>
                <TableCell align="right">Max Marks</TableCell>
                <TableCell align="right">Grade</TableCell>
                <TableCell align="right">Highest Score</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </TableContainer>
        </div>
        
        <div className={classes.btn}>
        <Button
          endIcon={<DownloadingIcon/>}
          onClick={handlePrint}
          variant="contained"
          color="secondary"
        >Download Result</Button>
        </div>
            </Container>
      );
}

export default ResultForm
