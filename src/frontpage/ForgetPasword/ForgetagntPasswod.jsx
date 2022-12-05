import React from 'react'
import { useState } from 'react'
import "../AgentsSignup/AgentsSignup.scss"
import { Form, Button } from 'react-bootstrap';

export const ForgetagntPasswod = () => {
    const [email,setEmail]=useState("")
  return (
    <div className="agent-signup-whole-div">

    <div className='agent-signup-form-div'>
        <h1 style={{ marginBottom: "20px", color: "white", backgroundColor: "#193942", padding: "15px" }}>Reset Password</h1>
        <Form className="agent-signup-form">
            <div>Reset Your Edumetrix Agent Password</div>
            <hr />
            <label>Email *</label>
            <Form.Control type="text" name='emailotp' value={email} placeholder="Enter email address" style={{ marginBottom: "15px" }}  />
            

            {/* <Link style={{ textDecoration: "none", color: "white" }} to="/agentslogin"> */}
            
            <Button className="agent-signup-btn"   type="submit" >
                Send OTP
            </Button>
           
        </Form>
    </div>
</div>
  )
}


