import React from "react";
import { Grid, Paper, TextField } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import { ToastContainer, toast } from "react-toastify";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { useState, useEffect } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import "./EmployeeDetails.scss";


const EmployeeDetails = () => {
  const [image, setImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBRdmz3LadjgP_7giopi8RU6TJQgE-9IZaYXSJYWHuFv3ty1vbrgMiiU6XqdhxXyFqJqU&usqp=CAU"
  );
  const [profileError, setProfileError] = useState("");
  const [name, setname] = useState("");
  const [errorName, setErrorName] = useState("");

  const [position, setPosition] = useState("");
  const [joiningdate, setJoiningDate] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [bllodgroup, setBloodGroup] = useState("");
  const [dateofbirth, setdateofbirth] = useState("");

  const [place, setplace] = useState("");
  const [errorPlace, setErrorPlace] = useState("");

  const [mobileno, setmobile] = useState("");
  const [errorNumber, setErrorNumber] = useState("");

  const [email, setemail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  const [accountno, setAccountno] = useState("");
  const [errorAccNo, setErrorAccNo] = useState("");
  const [accountname, setAccountname] = useState("");
  const [errorAccName, setErrorAccName] = useState("");
  const [brachname, setBranchName] = useState("");
  const [errorBname, setErrorBname] = useState("");
  const [Ifsc, setIfsc] = useState("");
  const [errorIfsc, setErrorIfsc] = useState("");

  const [adharcardfront, setAdharCardFront] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeYAWo19XH2Z_ow2WVzhIKxQ--8pDGtWnI9Q&usqp=CAU"
  );
  const [adharError, setAdharError] = useState("");

  const [adharcardback, setAdharCardBack] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrL9UKZ3r3lcX8uQW_0ErRKikH3ZZI4xUdVyEz2Sxqf-am-SU22xqKfOiIiel0Bs4zfk4&usqp=CAU"
  );
  const [adharBackError, setAdharBackError] = useState("");

  const [pancard, setpancard] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiynov2NK7TZhPQAjAfyup8EO4efuRqJH8Jw&usqp=CAU"
  );
  const [pancardError, setPancardError] = useState("");

  const [empPosition, setEmpPosition] = useState("");

  const handleChange = (event) => {
    setEmpPosition(event.target.value);
  };

  const usernameValidate = (name) => {
    const re = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    return re.test(name);
  };
  const regax = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;

  const inputHandle = (e) => {
    if (e.target.name === "name") {
      setname(e.target.value);
      setErrorName("");
    } else if (e.target.name === "place") {
      setplace(e.target.value);
      setErrorPlace("");
      // } else if (e.target.name === "position") {
      //   setPosition(e.target.value);
    } else if (e.target.name === "empid") {
      setEmployeeId(e.target.value);
    } else if (e.target.name === "dob") {
      setdateofbirth(e.target.value);
    } else if (e.target.name === "joiningdate") {
      setJoiningDate(e.target.value);
    } else if (e.target.name === "bloodgroup") {
      setBloodGroup(e.target.value);
    } else if (e.target.name === "email") {
      setemail(e.target.value);
      setErrorEmail("");
    } else if (e.target.name === "branchname") {
      setBranchName(e.target.value);
      setErrorBname("");
    } else if (e.target.name === "accname") {
      setAccountname(e.target.value);
      setErrorAccName("");
    } else if (e.target.name === "accnumber") {
      setAccountno(e.target.value);
      setErrorAccNo("");
    } else if (e.target.name === "ifsc") {
      setIfsc(e.target.value);
      setErrorIfsc("");
    } else if (e.target.name === "profile") {
      setImage(e.target.value);
      setProfileError("");
    } else if (e.target.name === "adharfront") {
      setAdharCardFront(e.target.value);
      setAdharError("");
    } else if (e.target.name === "adharback") {
      setAdharCardBack(e.target.value);
      setAdharBackError("");
    } else if (e.target.name === "pancard") {
      setpancard(e.target.value);
      setPancardError("");
    }
  };

  const uploadImage = (e) => {
    if (e.target.files.length !== 0) {
      // setImage(e.target.files[0]);
      setImage(URL.createObjectURL(e.target.files[0]));

      // setImage(URL.createObjectURL(e.target.files[0]));
    }
    // setImage(URL.createObjectURL(e.target.files[0]));
  };

  const uploadPANCard = (e) => {
    if (e.target.files.length !== 0) {
      // setpancard(e.target.files[0]);
      setpancard(URL.createObjectURL(e.target.files[0]));

      // setpancard(URL.createObjectURL(e.target.files[0]));
    }
    // setpancard(URL.createObjectURL(e.target.files[0]));
  };

  const uploadAdharFront = (e) => {
    if (e.target.files.length !== 0) {
      // setAdharCardFront(e.target.files[0]);
      setAdharCardFront(URL.createObjectURL(e.target.files[0]));

      // setAdharCardFront(URL.createObjectURL(e.target.files[0]));
    }
    // setAdharCardFront(URL.createObjectURL(e.target.files[0]));
  };

  const uploadAdharBack = (e) => {
    if (e.target.files.length !== 0) {
      // setAdharCardBack(e.target.files[0]);
      setAdharCardBack(URL.createObjectURL(e.target.files[0]));

      //   setAdharCardBack(URL.createObjectURL(e.target.files[0]));
    }
    // setAdharCardBack(URL.createObjectURL(e.target.files[0]));
  };

  const paperStyle = {
    padding: 20,
    width: "400px",
    placeItems: "center",
    align: "center",
  };

  return (
    <div className="agents-dashboard">
      <AdminDashboard />

      <div className="agent-profile-main-div">
        <ToastContainer closeOnClick={false} />

        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid
              sx={{
                backgroundColor: "#193942",
                margin: 0,
                padding: "10px 0px",
                color: "#ffffff",
                textAlign: "center",
              }}
            >
              <h2>Employee Details</h2>
            </Grid>

            <TextField
              autoComplete="off"
              name="name"
              label="Employee Name"
              placeholder="Enter Employee name"
              fullWidth
              required
              size="small"
              margin="normal"
              onChange={(e) => inputHandle(e)}
            />
            {errorName ? <div className="error_div">{errorName}</div> : null}

            <TextField
              autoComplete="off"
              name="dob"
              label="Date Of Birth"
              placeholder="DD-MM-YYYY"
              fullWidth
              required
              size="small"
              margin="normal"
              onChange={(e) => inputHandle(e)}
            />
            {errorName ? <div className="error_div">{errorName}</div> : null}

            {/* <TextField
              autoComplete="off"
              name="position"
              label="Enter Employee Position"
              placeholder="Enter Employee Position"
              fullWidth
              required
              size="small"
              margin="normal"
              onChange={(e) => inputHandle(e)}
            />
            {errorName ? <div className="error_div">{errorName}</div> : null} */}
            {/* <InputLabel id="demo-select-small">Enter Position</InputLabel>
            <Select
              placeholder="Enter Position"
              name="position"
              size="small"
              fullWidth
              labelId="demo-select-small"
              id="demo-select-small"
              value={empPosition}
              label="enter position"
              onChange={handleChange}
              onChange={(e) => inputHandle(e)}
            >
              <MenuItem value="">
                <em>Enter Position</em>
              </MenuItem>
              <MenuItem value={"Human Resource"}>Human Resource</MenuItem>
              <MenuItem>Hr Intern</MenuItem>
              <MenuItem>marketing Exicutive</MenuItem>
              <MenuItem>marketing Intern</MenuItem>
              <MenuItem>Software Engineer</MenuItem>
              <MenuItem>Software Engineer Intern</MenuItem>
              <MenuItem>Operation Exicutive</MenuItem>
              <MenuItem>Operation Intern</MenuItem>
            </Select> */}
            <select
              className="empposition"
              value={empPosition}
              onChange={(e) => {
                setEmpPosition(e.target.value);
              }}
            >
              <option style={{ color: "Grey" }} disabled>
                Enter Position
              </option>
              <option>Human Resource</option>
              <option>HR Intern</option>
              <option>Marketing Exicutive</option>
              <option>Software Engineer</option>
              <option>Software Engineer Intern</option>
              <option>Operation Exicutive</option>
              <option>Operation Intern</option>
            </select>

            <TextField
              autoComplete="off"
              name="empid"
              label="Enter Employee Id"
              placeholder="Enter Employee Id"
              fullWidth
              required
              size="small"
              margin="normal"
              onChange={(e) => inputHandle(e)}
            />
            {errorName ? <div className="error_div">{errorName}</div> : null}

            <TextField
              autoComplete="off"
              name="joiningdate"
              label="Joining Date"
              placeholder="DD-MM-YYYY"
              fullWidth
              required
              size="small"
              margin="normal"
              onChange={(e) => inputHandle(e)}
            />
            {errorName ? <div className="error_div">{errorName}</div> : null}

            <TextField
              autoComplete="off"
              name="number"
              label="Mobile Number"
              placeholder="Mobile Number"
              type="number"
              fullWidth
              required
              size="small"
              margin="normal"
              onChange={(e) => inputHandle(e)}
            />
            {errorNumber ? (
              <div className="error_div">{errorNumber}</div>
            ) : null}
            <TextField
              autoComplete="off"
              name="email"
              label="Email"
              placeholder="Enter Email"
              type="email"
              fullWidth
              required
              size="small"
              margin="normal"
              onChange={(e) => inputHandle(e)}
            />
            {errorEmail ? <div className="error_div">{errorEmail}</div> : null}

            <TextField
              autoComplete="off"
              name="place"
              label="Place"
              placeholder="Enter Place"
              type="text"
              fullWidth
              required
              size="small"
              margin="normal"
              onChange={(e) => inputHandle(e)}
            />
            {errorPlace ? <div className="error_div">{errorPlace}</div> : null}

            <TextField
              autoComplete="off"
              name="bloodgroup"
              label="Blood Group"
              placeholder="Blood Group"
              fullWidth
              required
              size="small"
              margin="normal"
              onChange={(e) => inputHandle(e)}
            />
            {errorName ? <div className="error_div">{errorName}</div> : null}

            <TextField
              autoComplete="off"
              name="branchname"
              label="Branch Name"
              placeholder="Branch Name"
              type="text"
              fullWidth
              required
              size="small"
              margin="normal"
              onChange={(e) => inputHandle(e)}
            />
            {errorBname ? <div className="error_div">{errorBname}</div> : null}
            <TextField
              autoComplete="off"
              name="accname"
              label="Account Holder Name"
              placeholder="Name"
              type="text"
              fullWidth
              required
              size="small"
              margin="normal"
              onChange={(e) => inputHandle(e)}
            />
            {errorAccName ? (
              <div className="error_div">{errorAccName}</div>
            ) : null}
            <TextField
              autoComplete="off"
              name="accnumber"
              label="Account Number"
              placeholder="Account Number"
              type="number"
              fullWidth
              required
              size="small"
              margin="normal"
              onChange={(e) => inputHandle(e)}
            />
            {errorAccNo ? <div className="error_div">{errorAccNo}</div> : null}

            <TextField
              autoComplete="off"
              name="ifsc"
              label="IFSC"
              placeholder="IFSC CODE"
              type="text"
              fullWidth
              required
              size="small"
              margin="normal"
              onChange={(e) => inputHandle(e)}
            />
            {errorIfsc ? <div className="error_div">{errorIfsc}</div> : null}

            <Stack
              direction="column"
              // alignItems="center"
              textAlign="justify"
              display="flex"
              justifyContent="space-between"
              spacing={2}
              marginTop="10px"
              color="#000"
            >
              <Button
                variant="outlined"
                component="label"
                fullWidth
                sx={{ color: "grey", border: "grey 1px solid" }}
              >
                <PhotoCamera />
                Upload Profile Photo
                <input
                  required
                  name="profile"
                  hidden
                  accept="image/*"
                  multiple
                  type="file"
                  onChange={uploadImage}
                />
              </Button>
              {profileError ? (
                <div className="error_div">{profileError}</div>
              ) : null}

              <Button
                variant="outlined"
                component="label"
                fullWidth
                sx={{
                  color: "grey",
                  border: "grey 1px solid",
                }}
              >
                <PhotoCamera />
                Upload PanCard
                <input
                  name="pancard"
                  hidden
                  accept="image/*"
                  multiple
                  type="file"
                  onChange={uploadPANCard}
                />
              </Button>
              {pancardError ? (
                <div className="error_div">{pancardError}</div>
              ) : null}

              <Button
                variant="outlined"
                component="label"
                fullWidth
                sx={{ color: "grey", border: "grey 1px solid" }}
              >
                <PhotoCamera />
                Upload AdhaarCard Front
                <input
                  name="adharfront"
                  hidden
                  accept="image/*"
                  multiple
                  type="file"
                  onChange={uploadAdharFront}
                />
              </Button>
              {adharError ? (
                <div className="error_div">{adharError}</div>
              ) : null}

              <Button
                variant="outlined"
                component="label"
                fullWidth
                sx={{ color: "grey", border: "grey 1px solid" }}
              >
                <PhotoCamera />
                Upload AdhaarCard Back
                <input
                  name="adharback"
                  hidden
                  accept="image/*"
                  multiple
                  type="file"
                  onChange={uploadAdharBack}
                />
              </Button>
              {adharBackError ? (
                <div className="error_div">{adharBackError}</div>
              ) : null}
            </Stack>
            <Stack
              direction="column"
              // alignItems="center"
              textAlign="justify"
              display="flex"
              justifyContent="space-between"
              spacing={2}
              marginTop="10px"
              color="#000"
            >
              <Button
                variant="outlined"
                color="inherit"
                component="label"
                fullWidth
                //   onClick={(e) => handleAgentSubmit(e)}
                // onClick={() => setShow(!show)}
                sx={{ color: "grey", backgroundColor: "#193942" }}
              >
                Submit
              </Button>
            </Stack>
          </Paper>
        </Grid>

        <div className="agent-card-container">
          <div className={"agent-card-item"}>
            <div className="agent-image">
              <div className="agent-profile-img">
                <img src={image} alt="" />
              </div>
              <div className="agent-profile-details">
                <h3>Name: {name}</h3>

                <h5>Position: {empPosition}</h5>
                <h5>Employee Id: {employeeId}</h5>
                <p>DOB: {dateofbirth}</p>

                <p>Email:{email}</p>
                <p>Mobile No: {mobileno}</p>
                <p>Joining Date:{joiningdate}</p>
                <p>Address: {place}</p>
                <p>Blood Group:{bllodgroup}</p>
              </div>
            </div>
            <div className="agent-bank-details">
              <div className="bank-details">
                <h6>Account Holder Name</h6>
                <p>{accountname}</p>
              </div>
              <div className="bank-account">
                <h6>Account Number</h6>
                <p>{accountno}</p>
              </div>
              <div className="bank-account">
                <h6>Branch Name</h6>
                <p>{brachname}</p>
              </div>
              <div className="bank-account">
                <h6>IFSC CODE</h6>
                <p>{Ifsc}</p>
              </div>
            </div>

            <div className="cards">
              <div className="cards-item">
                <img src={pancard} alt="" />
              </div>
              <div className="cards-item">
                <img src={adharcardfront} alt="" />
              </div>
              <div className="cards-item">
                <img src={adharcardback} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
