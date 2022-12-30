import React from "react";
import { useState } from "react";
import "../AgentsSignup/AgentsSignup.scss";
import { Form, Button } from "react-bootstrap";

import * as services from "../../services/pages/agentRoute";
import { useNavigate } from "react-router-dom";

export const ForgetagntPasswod = () => {
  const navigate = useNavigate();
  // const [email,setEmail]=useState("")
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  const inputHandle = (e) => {
    // if (e.target.name === "emailotp") {
    //   setEmailOTP(e.target.value);
    // } else
    if (e.target.name === "mobileotp") {
      setMobile(e.target.value);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    let flag = false;

    if (mobile === "") {
      flag = true;
      return setError("Mobile cannot be empty");
    }
    if (mobile.length !== 10) {
      flag = true;
      return setError("Invalid mobile number.");
    }

    if (!flag) {
      setError("");
      const otp = {
        mobile: "+91" + mobile,
      };
      try {
        const checkOtp = async (otp) => {
          const result = await services.verifyOtp(otp);
          if (result) {
            navigate("/forget_agent_otp_varify");
          }
        };

        checkOtp(otp);
      } catch (error) {
        alert("Something wrong in Agent OTP");
      }
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
          Reset Password
        </h1>
        <Form className="agent-signup-form">
          <div>Reset Your Edumetrix Agent Password</div>
          <hr />
          <label>Mobile Number *</label>
          <Form.Control
            type="text"
            name="mobileotp"
            value={mobile}
            onChange={inputHandle}
            placeholder="Enter mobile number"
            style={{ marginBottom: "15px" }}
          />

          {/* <Link style={{ textDecoration: "none", color: "white" }} to="/agentslogin"> */}
          {error && <p style={{ color: "red" }}>{error}</p>}
          <Button
            className="agent-signup-btn"
            type="submit"
            onClick={handleClick}
          >
            Send OTP
          </Button>
        </Form>
      </div>
    </div>
  );
};
