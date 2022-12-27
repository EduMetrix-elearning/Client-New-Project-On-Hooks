import React from "react";
import { Button, Form } from "react-bootstrap";
import "./AgentsLogin.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const services = require("../../services/pages/agentRoute");

export const AgentsLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erroremail, setErrorEmail] = useState("");
  const [errorpassword, setErrorPassword] = useState("");
  const navigate = useNavigate();

  const inputHandle = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
      setErrorEmail("");
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
      setErrorPassword("");
    }
  };

  // const handleLoginSubmit = (e)=>{
  //   e.preventDefault()
  //   if(email !="" || password != ""){
  //     toast("Login Successfully !")
  //     setTimeout(()=>{
  //       navigate("/agents-dashboard")
  //     },3000)
  //   }
  //   else{
  //     toast("Email & password should enter")
  //   }
  // }
  const handlesignUpSubmit = (e) => {
    e.preventDefault();
    let flag = false;
    if (email === "") {
      flag = true;
      setErrorEmail("Email field cannot be empty *");
    } else if (password === "") {
      flag = true;
      setErrorPassword("password cannot be empty *");
    }
    if (!flag) {
      let obj = {
        email: email,
        password: password,
      };
      console.log("api obj", obj);
      services.agentLogin(obj, (error, result) => {
        if (result) {
          navigate("/agents-dashboard");
        } else {
          console.log("email and password error", error);
          alert("Something wrong in Agent email and password");
        }
      });
    }
  };

  return (
    <div className="agent-login-whole-div">
      <ToastContainer />
      <div className="agent-login-form-div">
        <h2
          style={{
            marginBottom: "20px",
            color: "white",
            backgroundColor: "#193942",
            padding: "15px",
            textAlign:"center"
          }}
        >
          LOGIN
        </h2>
        <Form className="agent-login-form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email *</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={(e) => inputHandle(e)}
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password *</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={(e) => inputHandle(e)}
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-1" controlId="formBasicCheckbox">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Form.Check type="checkbox" label="Remember me" />

              <Link to="/forget_agent_password">Forget Password ?</Link>
            </div>
          </Form.Group>

          {/* <Link style={{ textDecoration: "none", color: "white" }} 
          to="/agents-dashboard"> */}
          <Button
            className="agent-login-btn"
            type="submit"
            onClick={(e) => handlesignUpSubmit(e)}
          >
            LOG IN
          </Button>
          {/* </Link> */}
        </Form>
      </div>
    </div>
  );
};
