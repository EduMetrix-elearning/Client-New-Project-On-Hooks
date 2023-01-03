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
import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./Internship.scss";
import ClearIcon from "@mui/icons-material/Clear";
import { InternshipContext } from "../../context/InternshipContext";
import * as services from "../../services/pages/agentRoute";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 200,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export const Internship = (props) => {
  const { handleClose, internshipOpen } = props;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact_number, setContact] = useState("");
  const [place, setPlace] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [course, setCourse] = useState("");
  const [education, setEducation] = useState("");
  const [year, setYear] = useState("");
  const [college, setCollege] = useState("");
  const [about, setAbout] = useState("");
  const [resume, setResume] = useState("");

  const [errorname, setErrorName] = useState("");
  const [errorphone, setErrorPhone] = useState("");
  const [erroremail, setErrorEmail] = useState("");
  const [errorplace, setErrorPlace] = useState("");
  const [errorstatus, setErrorStatus] = useState("");
  const [errorgender, setErrorGender] = useState("");
  const [errorcourse, setErrorCourse] = useState("");
  const [erroreducation, setErrorEducation] = useState("");
  const [erroryear, setErrorYear] = useState("");
  const [errorcollege, setErrorCollege] = useState("");
  const [errorabout, setErrorAbout] = useState("");
  const [errorresume, setErrorResume] = useState("");

  const handleClick = (e) => {
    setErrorName("");
    setErrorPhone("");
    setErrorPlace("");
    setErrorEmail("");
    setErrorStatus("");
    setErrorGender("");
    setErrorCollege("");
    setErrorCourse("");
    setErrorEducation("");
    setErrorYear("");
    setErrorAbout("");
    setErrorResume("");
    e.preventDefault();

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
    } else if (place === "") {
      flag = true;
      setErrorPlace("Place cannot be empty *");
    } else if (gender === "") {
      flag = true;
      setErrorGender("Select the gender *");
    } else if (status === "") {
      flag = true;
      setErrorStatus("Select the status *");
    } else if (course === "") {
      flag = true;
      setErrorCourse("Select the course *");
    } else if (education === "") {
      flag = true;
      setErrorEducation("Education cannot be empty *");
    } else if (year === "") {
      flag = true;
      setErrorYear("Select the year *");
    } else if (college === "") {
      flag = true;
      setErrorCollege("College cannot be empty *");
    } else if (about === "") {
      flag = true;
      setErrorAbout("Tell us yourself *");
    } else if (resume === "") {
      flag = true;
      setErrorResume("Upload the resume *");
    }

    if (!flag) {
      const student = {
        name,
        email,
        contact_number: "+91" + contact_number,
        place,
        employment_status: status,
        gender,
        education,
        course,
        year_of_passing: year,
        institute: college,
        about_yourself: about,
        resume,
      };

      try {
        const registerInternship = async (obj) => {
          const result = await services.submitInternship(obj);
        };
        registerInternship(student);
      } catch (error) {
        console.log(error);
        alert(error);
      }
    }
  };

  return (
    <div className="internship-form">
      <Modal
        className="full-modal"
        open={internshipOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{ width: "360px" }}>
          <Box className="inner-model">
            <Typography id="modal-modal-title" variant="h6" component="h4">
              Apply for Internship
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
            variant="standard"
            onChange={(e) => setName(e.target.value)}
            style={{ marginBottom: "10px" }}
          />
          {errorname ? <div style={{ color: "red" }}>{errorname}</div> : null}
          <TextField
            fullWidth
            sx={{ m: 1 }}
            id="standard-basic"
            label="10  digits Mobile No *"
            onChange={(e) => setContact(e.target.value)}
            variant="standard"
            style={{ marginBottom: "10px" }}
          />
          {errorphone ? <div style={{ color: "red" }}>{errorphone}</div> : null}
          <TextField
            fullWidth
            sx={{ m: 1 }}
            id="standard-basic"
            label="Email *"
            variant="standard"
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginBottom: "10px" }}
          />
          {erroremail ? <div style={{ color: "red" }}>{erroremail}</div> : null}
          <TextField
            fullWidth
            sx={{ m: 1 }}
            id="standard-basic"
            label="Place *"
            variant="standard"
            onChange={(e) => setPlace(e.target.value)}
            style={{ marginBottom: "10px" }}
          />
          {errorplace ? <div style={{ color: "red" }}>{errorplace}</div> : null}
          <div
            className="select-gender-employee"
            style={{ marginBottom: "10px", gap: "20px" }}
          >
            <select onChange={(e) => setGender(e.target.value)}>
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <select onChange={(e) => setStatus(e.target.value)}>
              <option value="">Employment Status</option>
              <option value="employed">Employed</option>
              <option value="frasher">Fresher</option>
              <option value="student">Student</option>
            </select>
          </div>
          {errorgender ? (
            <div style={{ color: "red" }}>{errorgender}</div>
          ) : null}
          {errorstatus ? (
            <div style={{ color: "red" }}>{errorstatus}</div>
          ) : null}

          <div className="select-div-2">
            <select
              style={{ marginBottom: "10px", gap: "20px" }}
              onChange={(e) => setCourse(e.target.value)}
            >
              <option value="">Select Courses</option>
              <option value="fullstack">Full stack Developer</option>
              <option value="frontend">Frontend Developer</option>
              <option value="backend">Backend Developer</option>
              <option value="marketing">Marketing</option>
            </select>
            {errorcourse ? (
              <div style={{ color: "red" }}>{errorcourse}</div>
            ) : null}
            <select onChange={(e) => setEducation(e.target.value)}>
              <option value="">Educational Qualification</option>
              <option value="btech">B.Tech</option>
              <option value="mtech">M.Tech</option>
              <option value="bca/mca">BCA/MCA</option>
              <option value="bsc/msc">BSC/MSC</option>
              <option value="diploma">Diploma</option>
            </select>
            {erroreducation ? (
              <div style={{ color: "red" }}>{erroreducation}</div>
            ) : null}
          </div>

          <TextField
            fullWidth
            sx={{ m: 1 }}
            id="standard-basic"
            label="Year of graduation *"
            onChange={(e) => setYear(e.target.value)}
            type="Number"
            variant="standard"
            style={{ marginBottom: "10px" }}
          />
          {erroryear ? <div style={{ color: "red" }}>{erroryear}</div> : null}
          <TextField
            fullWidth
            sx={{ m: 1 }}
            id="standard-basic"
            label="Name of College/Organisation *"
            onChange={(e) => setCollege(e.target.value)}
            variant="standard"
            style={{ marginBottom: "10px" }}
          />
          {errorcollege ? (
            <div style={{ color: "red" }}>{errorcollege}</div>
          ) : null}
          <TextField
            fullWidth
            sx={{ m: 1 }}
            id="standard-basic"
            label="Tell us more about you *"
            onChange={(e) => setAbout(e.target.value)}
            variant="standard"
            style={{ marginBottom: "10px" }}
          />
          {errorabout ? <div style={{ color: "red" }}>{errorabout}</div> : null}
          <label htmlFor="">Upload CV Here</label>
          <input type="file" onChange={(e) => setResume(e.target.value)} />
          {errorresume ? (
            <div style={{ color: "red" }}>{errorresume}</div>
          ) : null}
          <Button
            fullWidth
            sx={{ marginTop: "20px" }}
            onClick={handleClick}
            variant="contained"
            className="student-form-filling-btn"
          >
            I'm Interested
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
