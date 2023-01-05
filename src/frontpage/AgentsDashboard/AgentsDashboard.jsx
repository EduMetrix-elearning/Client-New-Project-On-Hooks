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

import { React, useState, useEffect } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import { AgentNavbar } from "../AgentNavbar/AgentNavbar";
import "./AgentsDashboard.scss";

const services = require("../../services/pages/agentRoute");
const ls = require("local-storage");

export const AgentsDashboard = () => {
  const navigate = useNavigate();

  const [image, setImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBRdmz3LadjgP_7giopi8RU6TJQgE-9IZaYXSJYWHuFv3ty1vbrgMiiU6XqdhxXyFqJqU&usqp=CAU"
  );
  const [profileError, setProfileError] = useState("");
  const [name, setname] = useState("");
  const [errorName, setErrorName] = useState("");

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

  const [show, setShow] = useState(true);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount();
  });

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

  // const usernameValidate = (name) => {
  //   const re = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
  //   return re.test(name);
  // };
  // const regax = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;

  const inputHandle = (e) => {
    if (e.target.name === "place") {
      setplace(e.target.value);
      setErrorPlace("");
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
      setImage(e.target.files[0]);
    }
  };

  const uploadPANCard = (e) => {
    if (e.target.files.length !== 0) {
      setpancard(e.target.files[0]);
    }
  };

  const uploadAdharFront = (e) => {
    if (e.target.files.length !== 0) {
      setAdharCardFront(e.target.files[0]);
    }
  };

  const uploadAdharBack = (e) => {
    if (e.target.files.length !== 0) {
      setAdharCardBack(e.target.files[0]);
    }
  };

  const updateImages = async () => {
    const formData = new FormData();

    formData.append("agent_id", ls.get("id"));
    formData.append("agent_photo", image);
    formData.append("agent_pan", pancard);
    formData.append("agent_aadharfront", adharcardfront);
    formData.append("agent_aadharback", adharcardback);

    services.uploadImages(formData);
  };

  useEffect(() => {
    services.agentInfo((error, result) => {
      if (result.bank_branch) {
        setShow(!show);
      }
      if (result.agent_name) setname(result.agent_name);
      if (result.agent_phone) setmobile(result.agent_phone);
      if (result.agent_email) setemail(result.agent_email);
      if (result.agent_address) setplace(result.agent_address);
      if (result.bank_branch) setBranchName(result.bank_branch);
      if (result.bank_account_name) setAccountname(result.bank_account_name);
      if (result.bank_account_number) setAccountno(result.bank_account_number);
      if (result.bank_ifsc) setIfsc(result.bank_ifsc);
      if (result.agent_photo) setImage(result.agent_photo);
      if (result.agent_pan) setpancard(result.agent_pan);
      if (result.agent_aadharfront) setAdharCardFront(result.agent_aadharfront);
      if (result.agent_aadharback) setAdharCardBack(result.agent_aadharback);
    });
  }, []);

  const handleAgentSubmit = (e) => {
    e.preventDefault();
    let flag = false;

    if (name.indexOf("@") > -1) {
      flag = true;
      setErrorName("@ not allowed *");
    } else if (place === "") {
      flag = true;
      setErrorPlace("Place Should Not Be Empty*");
    } else if (place.length < 2) {
      flag = true;
      setErrorPlace("place name atleast 3 Charecter long*");
    } else if (brachname === "") {
      flag = true;
      setErrorBname("Agent Bank name field cannot be empty *");
    } else if (accountname === "") {
      flag = true;
      setErrorAccName("Agent name field cannot be empty *");
    } else if (accountno === "") {
      flag = true;
      setErrorAccNo("Agent Account No field cannot be empty *");
    } else if (Ifsc === "") {
      flag = true;
      setErrorIfsc("Agent Ifsc field cannot be empty *");
    } else if (image === "") {
      flag = true;
      setProfileError("Required *");
    } else if (pancard === "") {
      flag = true;
      setPancardError("Required*");
    } else if (adharcardfront === "") {
      flag = true;
      setAdharError("Required*");
    } else if (adharcardback === "") {
      flag = true;
      setAdharBackError("Required*");
    }

    if (!flag) {
      var obj = {
        agent_id: ls.get("id"),
        agent_address: place,

        bank_branch: brachname,
        bank_account_name: accountname,
        bank_account_number: accountno,
        bank_ifsc: Ifsc,
      };

      services.agentKYC(obj, (error, result) => {
        if (result) {
          updateImages();

          navigate("/student-details");
        } else {
          toast.error("Please Fill All The Details!", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      });
    }
  };

  const paperStyle = {
    padding: 20,
    width: "400px",
    placeItems: "center",
    align: "center",
  };

  return (
    <div className="agents-dashboard">
      <AgentNavbar />

      <div className="agent-profile-main-div">
        <ToastContainer closeOnClick={false} />

        {show ? (
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
                <h2>AGENT KYC</h2>
              </Grid>

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
              {errorPlace ? (
                <div className="error_div">{errorPlace}</div>
              ) : null}

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
              {errorBname ? (
                <div className="error_div">{errorBname}</div>
              ) : null}
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
              {errorAccNo ? (
                <div className="error_div">{errorAccNo}</div>
              ) : null}

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
                  onClick={(e) => handleAgentSubmit(e)}
                  sx={{ color: "grey", backgroundColor: "#193942" }}
                >
                  Submit
                </Button>
              </Stack>
            </Paper>
          </Grid>
        ) : (
          ""
        )}

        <div
          className={`agent-card-container ${
            !show ? "agent-dashboard-after" : ""
          }`}
        >
          <div className={"agent-card-item"}>
            <div className="agent-image">
              <div className="agent-profile-img">
                <img src={image} alt="" />
              </div>
              <div className="agent-profile-details">
                <h3>{name}</h3>
                <h4>{email}</h4>
                <p>{mobileno}</p>
                <p>{place}</p>
              </div>
              <div className="agent-profile-earning">
                <h4>Earned Amount</h4>
                <MonetizationOnIcon align="center" /> {totalAmount}/-
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
