import React, { useState } from "react";
// import "./AgentVarification.scss"
import { useNavigate } from "react-router-dom";
import "../AgentsSignup/AgentsSignup.scss";
import { Form, Button } from "react-bootstrap";
const services = require("../../services/pages/agentRoute");

export const AgentVarification = () => {
  const [emailotp, setEmailOTP] = useState("");
  const [mobileotp, setMobileOTP] = useState("");
  const [errorEmailOTP, setErrorEmailOTP] = useState("");
  const [errormobileOTP, setErrormobileOTP] = useState("");
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  const inputHandle = (e) => {
    // if (e.target.name === "emailotp") {
    //   setEmailOTP(e.target.value);
    // } else
    if (e.target.name === "mobileotp") {
      setMobileOTP(e.target.value);
    }
  };

  const handlesignUpSubmit = (e) => {
    e.preventDefault();
    let flag = false;
    // if (emailotp === "") {
    //   flag = true;
    //   setErrorEmailOTP("Agent otp field cannot be empty *");
    // } else 
    if (mobileotp === "") {
      flag = true;
      setErrormobileOTP("mobile otp cannot be empty *");
    }
    if (!flag) {
      let obj = {
        agent_id: localStorage.getItem("agent_id"),
        // email_otp: emailotp,
        mobile_otp: mobileotp,
      };
      console.log("api obj", obj);
      services.otpVarify(obj, (error, result) => {
        if (result) {
          setLoading(true);
          alert(`Succefully registered...
Login to continue.`);
          setLoading(false);
          navigate("/agentslogin", { replace: true });
        } else {
          console.log("Agent OTP error", error);
          alert("Something wrong in Agent OTP");
        }
      });
    }
  };
  return (
    <div className="agent-signup-whole-div">
      <div className="agent-signup-form-div">
        <h1
          style={{
            marginBottom: "20px",
            color: "white",
            backgroundColor: "#193942",
            padding: "15px",
          }}
        >
          OTP Varify
        </h1>
        <Form className="agent-signup-form">
          <div id="instruction-title">Please complete the following steps</div>
          <div id="otp-message">
            Please enter OTP passwords which already send to your email and
            mobile no
          </div>
          <hr />
          {/* <label>Email OTP *</label>
          <Form.Control
            type="text"
            name="emailotp"
            value={emailotp}
            onChange={(e) => inputHandle(e)}
            placeholder="Enter email otp"
            style={{ marginBottom: "15px" }}
          /> */}

          <Form.Label>Mobile OTP*</Form.Label>
          <Form.Control
            type="number"
            name="mobileotp"
            value={mobileotp}
            onChange={(e) => inputHandle(e)}
            placeholder="Enter Mobile otp"
            style={{ marginBottom: "15px" }}
          />

          {/* <Link style={{ textDecoration: "none", color: "white" }} to="/agentslogin"> */}

          <Button
            className="agent-signup-btn"
            type="submit"
            onClick={(e) => handlesignUpSubmit(e)}
          >
            Verify OTP
          </Button>
          {/* <Button className="agent-signup-btn"   type="submit" >
                       Resend OTP
                    </Button> */}
        </Form>
      </div>
    </div>
  );
};
