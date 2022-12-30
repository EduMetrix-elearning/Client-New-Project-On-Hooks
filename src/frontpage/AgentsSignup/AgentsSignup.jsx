import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./AgentsSignup.scss";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingScreen from "./LoadingScreen";
const services = require("../../services/pages/agentRoute");

export const AgentsSignup = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorname, setErrorName] = useState("");
  const [errorphone, setErrorPhone] = useState("");
  const [erroremail, setErrorEmail] = useState("");
  const [errorpassword, setErrorPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  let navigate = useNavigate();

  const inputHandle = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
      setErrorName("");
    } else if (e.target.name === "phone") {
      setPhone(e.target.value);
      setErrorPhone("");
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
      setErrorEmail("");
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
      setErrorPassword("");
    }
  };

  const usernameValidate = (name) => {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(name);
  };
  const regax = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


  const handlesignUpSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    let flag = false;
    if (name === "") {
      flag = true;
      setErrorName("Agent name field cannot be empty *");
    } else if (usernameValidate(name)) {
      flag = true;
      setErrorName("Agent name not valid *");
    } else if (name.indexOf("@") > -1) {
      flag = true;
      setErrorName("@ not allowed *");
    } else if (phone === "") {
      flag = true;
      setErrorPhone("phone number cannot be empty *");
    } else if (phone.length < 10) {
      flag = true;
      setErrorPhone("Phone number should be 10 digit *");
    } else if (email === "") {
      flag = true;
      setErrorEmail("email cannot be empty *");
    } else if (!email.match(regax)) {
      flag = true;
      setErrorEmail("Email not valid *");
    } else if (email.split(" ").length - 1 > 0) {
      flag = true;
      setErrorEmail("space not allowed *");
    } else if (password === "") {
      flag = true;
      setErrorPassword("password field cannot be empty *");
    } else if (password && password != undefined && password.length < 8) {
      flag = true;
      setErrorPassword("Password cannot be less than 8 characters *");
    } else if (
      password &&
      password != undefined &&
      password.split(" ").length - 1 > 0
    ) {
      flag = true;
      setErrorPassword("space not allowed *");
    }
    if (!flag) {
      let obj = {
        name: name,
        contact_number: "+91" + phone,
        email: email,
        password: password,
      };
   
      services.agentSignup(obj, (error, result) => {
        if (result) {
          setIsLoading(false);
          navigate("/agent_otp_varification");
        } else {
          setIsLoading(false);
          console.log("Agent signup error", error);
          alert("Something wrong in Agentsignup");
        }
      });
    }
  };

  return (
    <div>
      {!isLoading ? (
        <div className="agent-signup-whole-div">
          <ToastContainer />
          <div className="agent-signup-form-div">
            <h1
              style={{
                marginBottom: "20px",
                color: "white",
                backgroundColor: "#193942",
                padding: "15px",
              }}
            >
              Sign Up
            </h1>
            <Form className="agent-signup-form">
              <label>Name *</label>
              <Form.Control
                type="text"
                name="name"
                value={name}
                placeholder="Enter name"
                style={{ marginBottom: "15px" }}
                onChange={(e) => inputHandle(e)}
              />

              {errorname ? <div className="error_div">{errorname}</div> : null}

              <Form.Label>Mobile Number*</Form.Label>
              <Form.Control
                type="number"
                name="phone"
                value={phone}
                onChange={(e) => inputHandle(e)}
                placeholder="Enter Mobile number"
                style={{ marginBottom: "15px" }}
              />
              {errorphone ? (
                <div className="error_div">{errorphone}</div>
              ) : null}
              <Form.Label>Email *</Form.Label>
              <Form.Control
                type="text"
                name="email"
                value={email}
                onChange={(e) => inputHandle(e)}
                placeholder="Enter email"
                style={{ marginBottom: "15px" }}
              />
              {erroremail ? (
                <div className="error_div">{erroremail}</div>
              ) : null}

              <label htmlFor="password">Password *</label>
              <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={(e) => inputHandle(e)}
                placeholder="Password"
                style={{ marginBottom: "15px" }}
              />
              {errorpassword ? (
                <div className="error_div">{errorpassword}</div>
              ) : null}

              {/* <Form.Check type="checkbox" label="Remember me" /> */}

              <Button
                className="agent-signup-btn"
                variant="primary"
                onClick={(e) => handlesignUpSubmit(e)}
                type="submit"
              >
                SIGN UP
              </Button>

              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/agentslogin"
              >
                <Button
                  className="agent-signup-btn"
                  variant="primary"
                  type="submit"
                >
                  Already have an account? LOG IN
                </Button>
              </Link>
            </Form>
          </div>
        </div>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
};
