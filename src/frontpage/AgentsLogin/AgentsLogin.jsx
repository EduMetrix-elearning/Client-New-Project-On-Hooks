import React from "react"
import { Button, Form } from 'react-bootstrap';
import "./AgentsLogin.scss"
import { Link , useNavigate} from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const AgentsLogin = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate = useNavigate()

  const handleLoginSubmit = (e)=>{
    e.preventDefault()
    if(email !="" || password != ""){
      toast("Login Successfully !")
      setTimeout(()=>{
        navigate("/agents-dashboard")
      },3000)
    }
    else{
      toast("Email & password should enter")
    }
  }
  return (
    <div className="agent-login-whole-div">
      <ToastContainer/>
      <div className="agent-login-form-div">
        <h1 style={{ marginBottom: "20px", color: "white", backgroundColor: "#193942", padding: "15px" }}>Login</h1>
        <Form className="agent-login-form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email *</Form.Label>
            <Form.Control type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password *</Form.Label>
            <Form.Control type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-1" controlId="formBasicCheckbox">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Form.Check type="checkbox" label="Remember me" />
             
              <Link to="/forget_agent_password">Forget Password ?</Link>

            </div>
          </Form.Group>

          <Link style={{ textDecoration: "none", color: "white" }} to="/agents-dashboard">
            <Button className="agent-login-btn" type="submit" onClick={handleLoginSubmit}>
              LOG IN
            </Button>
          </Link>


        </Form>
      </div>
    </div>
  );
}

