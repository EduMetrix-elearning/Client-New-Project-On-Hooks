import React from 'react'
import { useState } from 'react'
import { Form,Button } from 'react-bootstrap'
import "../AgentsSignup/AgentsSignup.scss"

 export const ForgetAgentPasswordUpdate = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
  return (
    <div className="agent-signup-whole-div">

    <div className='agent-signup-form-div'>
        <h1 style={{ marginBottom: "20px", color: "white", backgroundColor: "#193942", padding: "15px" }}>Reset Password</h1>
        <Form className="agent-signup-form">
            <div>Reset Your Edumetrix Agent Password</div>
            <hr />
            <label>Email *</label>
            <Form.Control type="text" name='emailotp' value={email} placeholder="Enter email address" style={{ marginBottom: "15px" }}  />
            <label>Password *</label>
            <Form.Control type="passowrd" name='emailotp' value={password} placeholder="Enter password" style={{ marginBottom: "15px" }}  />
            <label>Confirm Password *</label>
            <Form.Control type="password" name='emailotp' value={password} placeholder="Enter confirm password" style={{ marginBottom: "15px" }}  />

            {/* <Link style={{ textDecoration: "none", color: "white" }} to="/agentslogin"> */}
            
            <Button className="agent-signup-btn"   type="submit" >
                Update Password
            </Button>
           
        </Form>
    </div>
</div>
  )
}

