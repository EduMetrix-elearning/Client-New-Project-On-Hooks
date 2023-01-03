import React, { useState } from "react";
import "./Bussiness.scss";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@material-ui/core";
import ClearIcon from "@mui/icons-material/Clear";
import Slider from "react-slick";

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

export const BussinessPartner = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact_number, setContact] = useState("");
  const [message, setMessage] = useState("");

  const [errorname, setErrorName] = useState("");
  const [errorphone, setErrorPhone] = useState("");
  const [erroremail, setErrorEmail] = useState("");
  const [errormessage, setErrorMessage] = useState("");

  const handleClick = (e) => {
    setErrorName("");
    setErrorPhone("");
    setErrorMessage("");
    setErrorEmail("");

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
    } else if (message === "") {
      flag = true;
      setErrorMessage("Message cannot be empty *");
    }

    if (!flag) {
      const enquiry = {
        name,
        email,
        contact_number: "+91" + contact_number,
        message,
      };

      try {
        const registerSyllabus = async (obj) => {
          const result = await services.submitSyllabus(obj);
          console.log(result);
        };
        registerSyllabus(enquiry);
      } catch (error) {
        console.log(error);
        alert(error);
      }
    }
  };
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="hiring-partner">
      <div className="hiring-card">
        <h3>Our Top Hiring Partners</h3>
        <button onClick={handleOpen}>Get Career Handbook</button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box className="inner-model">
              <Typography id="modal-modal-title" variant="h6" component="h4">
                Get Courses Fees and Discount
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
            />
            {errorname ? <div style={{ color: "red" }}>{errorname}</div> : null}
            <TextField
              fullWidth
              sx={{ m: 1 }}
              id="standard-basic"
              label="10  digits Mobile No *"
              variant="standard"
              onChange={(e) => setContact(e.target.value)}
            />
            {errorphone ? (
              <div style={{ color: "red" }}>{errorphone}</div>
            ) : null}
            <TextField
              fullWidth
              sx={{ m: 1 }}
              id="standard-basic"
              label="Email *"
              variant="standard"
              onChange={(e) => setEmail(e.target.value)}
            />
            {erroremail ? (
              <div style={{ color: "red" }}>{erroremail}</div>
            ) : null}
            <TextField
              fullWidth
              sx={{ m: 1 }}
              id="standard-basic"
              label="Message *"
              variant="standard"
              onChange={(e) => setMessage(e.target.value)}
            />
            {errormessage ? (
              <div style={{ color: "red" }}>{errormessage}</div>
            ) : null}
            <Button
              fullwidth
              sx={{ marginTop: "20px" }}
              variant="contained"
              className="student-form-filling-btn"
              onClick={handleClick}
            >
              I'm Interested
            </Button>
          </Box>
        </Modal>
      </div>

      <div className="slider">
        <div className="slide-track">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU4JJwLn39rxBmyioEyVxxcVaYqu8k-Uog90OWwZMslZxVDDMkT7QVi_7iGpP4b3AjTLI&usqp=CAU"
            alt=""
          />

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgf4_bbZiLCikJTkmLsD6aDxlC88WNhxSz_gYexp-w2tYZIx4frAr7BBY0wbYyVWdacCg&usqp=CAU"
            alt=""
          />

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZCYLPuMbA9IqypgdMKND7_nG610CDD4avMka5hxbR1sjJkX7hhd5L-esqkUUhpAHSsW0&usqp=CAU"
            alt=""
          />

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fc/IBM_logo_in.jpg"
            alt=""
          />

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS0jJYZaVuHk4vBJ_fVtGwLwMFn6XNvg_1-K7Jgbx1ySiCRn4yr1ZP9IM6V98G5IfHKHA&usqp=CAU"
            alt=""
          />

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7hpGF01SgVO8-9YgnFE-3fCJB8hPpWd8Yw-GYlvZpPcwmmFJVi23x94VKs3F0HOaQiIY&usqp=CAU"
            alt=""
          />

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS74WU_4X1ZfH37F0PyAyf89k8KCFkuOt_eQX_3cMv_XPxc18O6LD7Yy-P6v_n_Hh53Z_s&usqp=CAU"
            alt=""
          />

          <img
            src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202106/tcs_logo_1200_020621101143.jpg?size=1200:675"
            alt=""
          />

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStd6s9Uzb-GZM5eKlpSiG09KG3c8JWioeovyxjJhyB-G5_VN4ZXz_BpQ3ocDZuW2ZNc0Q&usqp=CAU"
            alt=""
          />

          <img
            src="https://fresherslike.com/wp-content/uploads/2021/09/Zoho-logo.jpg"
            alt=""
          />

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd6AopjQ2NpAREVaSl8U_wGcPx-AvhMcreMCrPHZStbs4HMaSDVE0q7hrLrC3xgZ4ylRg&usqp=CAU"
            alt=""
          />

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSI7ynekLUlZXz79GC4oRYxz_lOUFiLfERRsxXMrCDlBnLvtKt6uSdROk_-14nYbLUqxI&usqp=CAU"
            alt=""
          />

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQehRoYKIP27l5F9G8YUTWsvYpzV7vTYuPG36V7erPwkHDHCbD_pttPhnCH4HK-hPYZXBw&usqp=CAU"
            alt=""
          />

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp2griX30oJ_HJn-hmIjQA3XdGsU6hih9Ui1ncDsFhZQs2IxiGjRxw9XbyssVH-z5ZGeg&usqp=CAU"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
