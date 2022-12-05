import React from 'react'
import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import "../AgentsSignup/AgentsSignup.scss"

export const ForgetAgentOtpVarify = () => {
    const [email,setEmail]=useState("")
    const [emailOtp,setEmailOtp]=useState("")
  return (
    <div className="agent-signup-whole-div">

    <div className='agent-signup-form-div'>
        <h1 style={{ marginBottom: "20px", color: "white", backgroundColor: "#193942", padding: "15px" }}>Reset OTP Varify</h1>
        <Form className="agent-signup-form">
            <div>Reset Your Edumetrix Agent Password</div>
            <hr />
            <label>Please enter varify email *</label>
            <Form.Control type="text" name='emailotp' value={email} placeholder="Enter email" style={{ marginBottom: "15px" }}  />
            
            <label>Please enter your otp *</label>
            <Form.Control type="text" name='emailotp' value={emailOtp} placeholder="Enter email otp" style={{ marginBottom: "15px" }}  />
            {/* <Link style={{ textDecoration: "none", color: "white" }} to="/agentslogin"> */}
            
            <Button className="agent-signup-btn"   type="submit" >
                Varify OTP
            </Button>
           
        </Form>
    </div>
</div>
  )
}


