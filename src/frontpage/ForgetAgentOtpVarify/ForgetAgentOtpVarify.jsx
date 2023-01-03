import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "../AgentsSignup/AgentsSignup.scss";
import * as services from "../../services/pages/agentRoute";

export const ForgetAgentOtpVarify = () => {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");
  const [mobileOtp, setMobileOtp] = useState("");
  const [password, setPassword] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [mobileOtpError, setMobileOtpError] = useState("");
  const [passwordError, setPasswordError] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    setMobileError("");
    setMobileOtpError("");
    setPasswordError("");
    let flag = false;

    if (mobile === "") {
      flag = true;

      return setMobileError("Enter your mobile number");
    } else if (mobile.length !== 10) {
      flag = true;
      return setMobileError("Invalid mobile number.");
    } else if (mobileOtp === "") {
      flag = true;
      return setMobileOtpError("Enter the OTP.");
    } else if (mobileOtp.length !== 6) {
      flag = true;
      return setMobileOtpError("Invalid OTP.");
    } else if (password === "") {
      flag = true;
      return setPasswordError("Enter your new password");
    } else if (password.length < 8) {
      flag = true;
      return setPasswordError(
        "The password must have more or equal to 8 characters"
      );
    }

    const obj = {
      mobile: "+91" + mobile,
      otp: mobileOtp,
      password,
    };

    if (!flag) {
      setMobileError("");
      setMobileOtpError("");
      setPasswordError("");
      try {
        const changePassword = async (obj) => {
          const result = await services.resetPassword(obj);

          if (result) {
            navigate("/agentslogin", { replace: true });
          }
        };
        changePassword(obj);
      } catch (error) {
        alert("Something went wrong.");
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
          Reset OTP Varify
        </h1>
        <Form className="agent-signup-form">
          <div>Reset Your Edumetrix Agent Password</div>
          <hr />
          {/* <label>Please enter verify email *</label>
            <Form.Control type="text" name='emailotp' value={email} placeholder="Enter email" style={{ marginBottom: "15px" }}  /> */}

          <label>Please enter your mobile number *</label>
          <Form.Control
            type="text"
            name="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter mobile number"
            style={{ marginBottom: "15px" }}
          />
          {mobileError && <p style={{ color: "red" }}>{mobileError}</p>}
          <label>Please enter your otp *</label>
          <Form.Control
            type="text"
            name="mobileotp"
            value={mobileOtp}
            onChange={(e) => setMobileOtp(e.target.value)}
            placeholder="Enter mobile otp"
            style={{ marginBottom: "15px" }}
          />
          {mobileOtpError && <p style={{ color: "red" }}>{mobileOtpError}</p>}
          <label>Please enter your new password *</label>
          <Form.Control
            type="text"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Reset password"
            style={{ marginBottom: "15px" }}
          />
          {/* <Link style={{ textDecoration: "none", color: "white" }} to="/agentslogin"> */}
          {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
          <Button
            className="agent-signup-btn"
            type="submit"
            onClick={handleSubmit}
          >
            Verify OTP
          </Button>
        </Form>
      </div>
    </div>
  );
};
