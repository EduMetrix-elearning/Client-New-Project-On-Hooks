import React from "react"
import { Button, Form } from 'react-bootstrap';
import "./EmployeLogin.scss"
import { Link } from "react-router-dom";

export const EmployeLogin = () => {
  return (
    <div className="employe-login-whole-div">
      <div className="employe-login-form-div">
        <h1 style={{ marginBottom: "20px", color: "white", backgroundColor: "#193942", padding: "15px" }}>Employe Login</h1>
        <Form className="employe-login-form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email *</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password *</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-1" controlId="formBasicCheckbox">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Form.Check type="checkbox" label="Remember me" />
              <p >Forget Password ?</p>

            </div>
          </Form.Group>

          {/* <Link style={{ textDecoration: "none", color: "white" }} to="/website-dashboard"> */}
            <Button className="employe-login-btn" style={{backgroundColor:"#193942" }} disabled>
              LOG IN
            </Button>
          {/* </Link> */}

         
        </Form>
      </div>
    </div>
  );
}

