import React from 'react'
import "./Carrier.scss"
import Button from '@mui/material/Button';
import { Card, CardContent, TextField, Box, FormControl, InputLabel, Input, FormHelperText, Typography, Grid ,Modal } from '@material-ui/core'
import ClearIcon from '@mui/icons-material/Clear';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const Carrier = (props) => {
  
  const {handleClose,carrierOpen}=props
  
  return (
    <div className='carrier-form'>
        
      <Modal
        open={carrierOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box className="inner-model">
            <Typography id="modal-modal-title" variant="h6" component="h4">
              Apply For Work With Us
            </Typography>
            <Button onClick={handleClose}>
              <ClearIcon />
            </Button>
          </Box>
          <hr />
          <TextField fullWidth sx={{ m: 1 }} id="standard-basic" label="Name *" variant="standard" />
          <TextField fullWidth sx={{ m: 1 }} id="standard-basic" label="10  digits Mobile No *" variant="standard" />
          <TextField fullWidth sx={{ m: 1 }} id="standard-basic" label="Email *" variant="standard" />
          <select style={{marginTop:"20px"}}>
            <option value="">Apply Courses</option>
            <option value="fullstack">Full stack Developer</option>
            <option value="frontend">Frontend Developer</option>
            <option value="backend">Backend Developer</option>
            <option value="marketing">Marketing</option>
          </select>
          
          <TextField fullWidth sx={{ m: 1 }} id="standard-basic" label="Message *" variant="standard" />
          <input type="file" />
          <Button fullWidth sx={{ marginTop: "20px" }} variant="contained" className='student-form-filling-btn'>I'm Interested</Button>

        </Box>
      </Modal>
    </div>
  )
}
