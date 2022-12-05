import React,{useState} from 'react'
// import "./AgentVarification.scss"
import "../AgentsSignup/AgentsSignup.scss"
import { Form, Button } from 'react-bootstrap';


export const AgentVarification = () => {
    const [emailotp,setEmailOTP]=useState("")
    const [mobileotp,setMobileOTP]=useState("")
    const [otperror,setOtpError]=useState("")
    return (
        <div className="agent-signup-whole-div">

            <div className='agent-signup-form-div'>
                <h1 style={{ marginBottom: "20px", color: "white", backgroundColor: "#193942", padding: "15px" }}>OTP Varify</h1>
                <Form className="agent-signup-form">
                    <div id="instruction-title">Please complete the following steps</div>
                    <div id="otp-message">Please enter OTP passwords which already send to your email and mobile no</div>
                    <hr />
                    <label>Email OTP *</label>
                    <Form.Control type="text" name='emailotp' value={emailotp} placeholder="Enter email otp" style={{ marginBottom: "15px" }}  />
                    <Form.Label>Mobile OTP*</Form.Label>
                    <Form.Control type="number" name='mobileotp' value={mobileotp}  placeholder="Enter Mobile otp" style={{ marginBottom: "15px" }} />


                    {/* <Link style={{ textDecoration: "none", color: "white" }} to="/agentslogin"> */}
                    
                    <Button className="agent-signup-btn"   type="submit" >
                        Varify OTP
                    </Button>
                    <Button className="agent-signup-btn"   type="submit" >
                       Resend OTP
                    </Button>
                </Form>
            </div>
        </div>
    )
}


