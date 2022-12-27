import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./EmployeLogin.scss";
import { Link, useNavigate } from "react-router-dom";

export const EmployeLogin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const admin = {
      email: "shafan@edumetrix.io",
      password: "password",
    };
    if (user === admin.email && password === admin.password) {
      setError(false);
      navigate("/website-dashboard");
      return;
    }
    return setError(true);
  };
  return (
    <div className="employe-login-whole-div">
      <div className="employe-login-form-div">
        <h1
          style={{
            marginBottom: "20px",
            color: "white",
            backgroundColor: "#193942",
            padding: "15px",
          }}
        >
          Employe Login
        </h1>
        <Form className="employe-login-form">
          <Form.Group
            onChange={(e) => setUser(e.target.value)}
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label>Email *</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group
            onChange={(e) => setPassword(e.target.value)}
            className="mb-3"
            controlId="formBasicPassword"
          >
            <Form.Label>Password *</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-1" controlId="formBasicCheckbox">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Form.Check type="checkbox" label="Remember me" />
              <p>Forget Password ?</p>
            </div>
          </Form.Group>

          {/* <Link
            style={{ textDecoration: "none", color: "white" }}
            
          > */}
          {error && (
            <p style={{ color: "red" }}>Incorrect email or password...</p>
          )}
          <Button
            onClick={handleLogin}
            className="employe-login-btn"
            style={{ backgroundColor: "#193942" }}
          >
            LOG IN
          </Button>
          {/* </Link> */}
        </Form>
      </div>
    </div>
  );
};
