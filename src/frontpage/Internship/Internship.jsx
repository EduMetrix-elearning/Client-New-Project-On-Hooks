import { Card, CardContent, TextField, Box, FormControl, InputLabel, Input, FormHelperText, Typography, Grid, Modal } from '@material-ui/core'
import React from 'react'
import Button from '@mui/material/Button';
import "./Internship.scss"
import ClearIcon from '@mui/icons-material/Clear';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 200,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export const Internship = (props) => {

  const {handleClose,internshipOpen}=props
 
  
  return (
    <div className='internship-form'>

      <Modal
      className='full-modal'
        open={internshipOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{width:"360px"}} >
          <Box className="inner-model">
            <Typography id="modal-modal-title" variant="h6" component="h4">
              Apply for Internship
            </Typography>
            <Button onClick={handleClose}>
              <ClearIcon />
            </Button>
          </Box>
          <hr />
          <TextField fullWidth sx={{ m: 1 }} id="standard-basic" label="Name *" variant="standard"  style={{marginBottom:"10px"}}/>
          <TextField fullWidth sx={{ m: 1 }} id="standard-basic" label="10  digits Mobile No *" variant="standard" style={{marginBottom:"10px"}} />
          <TextField fullWidth sx={{ m: 1 }} id="standard-basic" label="Email *" variant="standard" style={{marginBottom:"10px"}} />
          <TextField fullWidth sx={{ m: 1 }} id="standard-basic" label="Place *" variant="standard" style={{marginBottom:"10px"}} />
          <div className='select-gender-employee' style={{marginBottom:"10px",gap:"20px"}}>
          <select>
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <select>
            <option value="">Employment Status</option>
            <option value="employed">Employed</option>
            <option value="frasher">Frasher</option>
            <option value="student">Student</option>

          </select>
          </div>

          <div className='select-div-2' >
          <select style={{marginBottom:"10px",gap:"20px"}}>
            <option value="">Select Courses</option>
            <option value="fullstack">Full stack Developer</option>
            <option value="frontend">Frontend Developer</option>
            <option value="backend">Backend Developer</option>
            <option value="marketing">Marketing</option>
          </select>
          <select>
            <option value="">Educational Qualification</option>          
            <option value="btech">B.Tech</option>
            <option value="mtech">M.Tech</option>
            <option value="bca/mca">BCA/MCA</option>
            <option value="bsc/msc">BSC/MSC</option>
            <option value="diploma">Diploma</option>
          </select>
          </div>
          
          <TextField fullWidth sx={{ m: 1 }} id="standard-basic" label="Year of graduation *" type="Number" variant="standard" style={{marginBottom:"10px"}} />
          <TextField fullWidth sx={{ m: 1 }} id="standard-basic" label="Name of College/Organisation *" variant="standard" style={{marginBottom:"10px"}} />
          <TextField fullWidth sx={{ m: 1 }} id="standard-basic" label="Tell us more about you *" variant="standard" style={{marginBottom:"10px"}} />
          
          <label htmlFor="">Apply CV Here</label>
          <input type="file" />
          <Button fullWidth sx={{ marginTop: "20px" }} variant="contained" className='student-form-filling-btn'>I'm Interested</Button>
            
        </Box>
      </Modal>
    </div>
  )
}
