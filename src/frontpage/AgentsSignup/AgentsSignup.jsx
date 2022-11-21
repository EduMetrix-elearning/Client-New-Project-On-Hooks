import React from 'react'
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./AgentsSignup.scss"

export const AgentsSignup = () => {
  return (
    <div className="agent-signup-whole-div">
      <div className='agent-signup-form-div'>
        <h1 style={{ marginBottom: "20px", color: "white", backgroundColor: "#193942", padding: "15px" }}>Sign Up</h1>
        <Form className="agent-signup-form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name *</Form.Label>
            <Form.Control type="text" placeholder="Enter name" style={{ marginBottom: "15px" }} />
            <Form.Label>Mobile Number*</Form.Label>
            <Form.Control type="number" placeholder="Enter Mobile number" style={{ marginBottom: "15px" }} />
            <Form.Label>Email *</Form.Label>
            <Form.Control type="email" placeholder="Enter email" style={{ marginBottom: "15px" }} />

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password *</Form.Label>
            <Form.Control type="password" placeholder="Password" style={{ marginBottom: "15px" }} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>

          <Link style={{ textDecoration: "none", color: "white" }} to="/agentslogin">
            <Button className="agent-signup-btn" variant="primary" type="submit" >
              SIGN UP
            </Button>
          </Link>
          <Link style={{ textDecoration: "none", color: "white" }} to="/agentslogin">
            <Button className="agent-signup-btn" variant="primary" type="submit" >
              LOG IN
            </Button>
            </Link>
        </Form>
      </div>
    </div>
  );
}