import React, { useState, useEffect } from "react";
import "./Carrier.scss";
import Button from "@mui/material/Button";
import {
  Card,
  CardContent,
  TextField,
  Box,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Typography,
  Grid,
  Modal,
} from "@material-ui/core";
import ClearIcon from "@mui/icons-material/Clear";
import * as services from "../../services/pages/agentRoute";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const Carrier = (props) => {
  const { handleClose, carrierOpen } = props;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact_number, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [job, setJob] = useState("");
  const [image, setImage] = useState("");
  const [errorname, setErrorName] = useState("");
  const [errorphone, setErrorPhone] = useState("");
  const [erroremail, setErrorEmail] = useState("");
  const [errormessage, setErrorMessage] = useState("");
  const [errorjob, setErrorJob] = useState("");
  const [errorimage, setErrorImage] = useState("");
  const [employee, setEmployee] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setErrorName("");
    setErrorPhone("");
    setErrorEmail("");
    setErrorMessage("");
    setErrorJob("");
    setErrorImage("");

    const regax = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let flag = false;
    if (name === "") {
      flag = true;
      setErrorName("Name field cannot be empty *");
    } else if (contact_number === "") {
      flag = true;
      setErrorPhone("phone number cannot be empty *");
    } else if (contact_number.length !== 10) {
      flag = true;
      setErrorPhone("Phone number is Invalid *");
    } else if (email === "") {
      flag = true;
      setErrorEmail("Email cannot be empty *");
    } else if (!email.match(regax)) {
      flag = true;
      setErrorEmail("Email not valid *");
    } else if (email.split(" ").length - 1 > 0) {
      flag = true;
      setErrorEmail("space not allowed *");
    } else if (job === "") {
      flag = true;
      setErrorJob("Select the Job *");
    } else if (message === "") {
      flag = true;
      setErrorMessage("Message cannot be empty *");
    } else if (image === "") {
      flag = true;
      setErrorImage("Upload the resume *");
    }
    if (!flag) {
      const employee = {
        name,
        email,
        contact_number: "+91" + contact_number,
        job,
        message,
        image,
      };

      try {
        const registerEmployee = async (obj) => {
          const result = await services.submitEmployee(obj);
          console.log(result);
        };
        registerEmployee(employee);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="carrier-form">
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
          <TextField
            fullWidth
            sx={{ m: 1 }}
            id="standard-basic"
            label="Name *"
            onChange={(e) => setName(e.target.value)}
            variant="standard"
          />
          {errorname ? <div style={{ color: "red" }}>{errorname}</div> : null}
          <TextField
            fullWidth
            sx={{ m: 1 }}
            id="standard-basic"
            label="10  digits Mobile No *"
            onChange={(e) => setContact(e.target.value)}
            variant="standard"
          />
          {errorphone ? <div style={{ color: "red" }}>{errorphone}</div> : null}
          <TextField
            fullWidth
            sx={{ m: 1 }}
            id="standard-basic"
            label="Email *"
            onChange={(e) => setEmail(e.target.value)}
            variant="standard"
          />
          {erroremail ? <div style={{ color: "red" }}>{erroremail}</div> : null}
          <select
            style={{ marginTop: "20px" }}
            onChange={(e) => setJob(e.target.value)}
          >
            <option value="">Select Job</option>
            <option value="fullstack">Full stack Developer</option>
            <option value="frontend">Frontend Developer</option>
            <option value="backend">Backend Developer</option>
            <option value="marketing">Marketing</option>
          </select>
          {errorjob ? <div style={{ color: "red" }}>{errorjob}</div> : null}

          <TextField
            fullWidth
            sx={{ m: 1 }}
            id="standard-basic"
            label="Message *"
            onChange={(e) => setMessage(e.target.value)}
            variant="standard"
          />
          {errormessage ? (
            <div style={{ color: "red" }}>{errormessage}</div>
          ) : null}
          <label htmlFor="">Upload CV Here</label>
          <input type="file" onChange={(e) => setImage(e.target.value)} />
          {errorimage ? <div style={{ color: "red" }}>{errorimage}</div> : null}
          <Button
            fullWidth
            sx={{ marginTop: "20px" }}
            variant="contained"
            className="student-form-filling-btn"
            onClick={handleClick}
          >
            I'm Interested
          </Button>
          {/* <h1>{employee.email}</h1>
          <img
            src={`/uploads/${employee.image}`}
            width={"100px"}
            height={"100px"}
          />
          <h1>hi</h1> */}
        </Box>
      </Modal>
    </div>
  );
};
