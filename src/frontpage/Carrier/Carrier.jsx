import React from 'react'
import "./carrier.scss"
import Button from '@mui/material/Button';
import { Card, CardContent, TextField, Box, FormControl, InputLabel, Input, FormHelperText, Typography, Grid ,Modal } from '@material-ui/core'
import ClearIcon from '@mui/icons-material/Clear';

const courses = [
  {title:"Full stack Developer",id:"1"},
  {title:"Frontend Developer",id:"2"},
  {title:"Backend Developer",id:"3"},
  {title:"Marketing",id:"4"}
]

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
  // const {handleClose,handleOpen,handleChange,open,course,setCourses}=props
  const [course, setCourses] = React.useState(courses || [])
  const {handleClose,carrierOpen}=props
  console.log("carrier",course)
  const handleChange = (event) => {
    setCourses(event.target.value);
  }
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
          <TextField
            fullWidth sx={{ m: 1 }}
            id="standard-select-currency-native"
            select
            label="Select courses interested in"
            value={course}
            onChange={handleChange}
            SelectProps={{
              native: true,
            }}
            variant="standard"
          >
            {courses.map((e) => (
              <option key={e.id} value={e.id}>
                {e.title}
              </option>
            ))}
          </TextField>
          <TextField fullWidth sx={{ m: 1 }} id="standard-basic" label="Message *" variant="standard" />
          <input type="file" />
          <Button fullWidth sx={{ marginTop: "20px" }} variant="contained" className='student-form-filling-btn'>I'm Interested</Button>

        </Box>
      </Modal>
    </div>
  )
}
