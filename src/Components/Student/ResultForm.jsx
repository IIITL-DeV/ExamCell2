import { Container, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography ,Button } from '@material-ui/core'
import { useReactToPrint } from 'react-to-print';
import React, { useEffect, useRef, useState } from 'react'
// import avatarResult from '../Assets/avtarResult.jpg'
import DownloadingIcon from '@mui/icons-material/Downloading';
import { useAuth } from '../../init-firebase';

function createData(name, obtained, max, grade) {
    return { name, obtained, max, grade};
  }

let rows = [
    createData('EDA123', 91, 100, "A+"),
    createData('ABC999', 90, 100, "A"),
    createData('DAA192', 62, 100, "C"),
    createData('SE230', 85, 100, "A"),
    createData('CRP123', 70, 100, "B" ),
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


const ResultForm = ({sem,marksArr,funcCall}) => {

  const currentUser = useAuth();
  const classes = useStyles()
  const componentRef = useRef()
  // let [marksArr,setMarksArr]=useState([])
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  });

  const [show, setShow] = useState(false);

  const showMarks = () => {
    setShow(!show);
    funcCall();

    // const docRef = doc(db)

    console.log(marksArr);
  }

  useEffect(() => {
    console.log("EMAIL:",currentUser?.email);
    console.log(marksArr);
  },[show])



    return (
<>
        <Button onClick={showMarks}>Show Result for {sem}</Button>
{show && <Container className={classes.root}>
            <Typography align="center" variant="h4" gutterBottom>
                Result for Semester
        </Typography>
        
        <div ref={componentRef} >
          
          <Paper className={classes.detailCard} elevation={3}>
            
            <div className={classes.center}>
        
              <div>
                  <h5>Name: Example Student  </h5>
                <h5>Batch: CS 2019</h5>
                <h5>Roll No. : LXY2999100 </h5>
                <h5>CGPA: 8.7 </h5>
                <h5>Semester: 1 </h5>
              </div>

              <div className={classes.divs}>
                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiHtdakfs0OGh1nAVPxfxSzZQ6_ahfebaLKg&usqp=CAU"} style={{ width: "120px", height: "120px", border: "2px solid black" }} alt="img" />
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
                  {/* <TableCell align="right">Highest Score</TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {marksArr.map((row) => (
                  <TableRow
                    key={row.subject}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.subject}
                    </TableCell>
                    <TableCell align="right">{row.marks}</TableCell>
                    <TableCell align="right">100</TableCell>
                    <TableCell align="right">A</TableCell>
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
        </Container>}
        </>
      );
}

export default ResultForm
