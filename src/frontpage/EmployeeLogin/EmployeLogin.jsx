import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./EmployeLogin.css";
import { Link, useNavigate } from "react-router-dom";

export const EmployeLogin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const admin = {
      email: "shafan@edumetrix.io",
      password: "password",
    };
    const hr = {
      email: "jamsheerjamshi1998@gmail.com",
      password: "Jamshi@123",
    };
    const marketing = {
      email: "marketing123@gmail.com",
      password: "marketing@123",
    };
    const it = {
      email: "itrecruit@gmail.com",
      password: "it@123",
    };
    const intern = {
      email: "internsdata@gmail.com",
      password: "intern@123",
    };
    if (user === admin.email && password === admin.password) {
      setError(false);
      navigate("/adminmeeting");
      return;
    } else if (user === hr.email && password === hr.password) {
      setError(false);
      navigate("/hrmeeting");
      return;
    } else if (user === marketing.email && password === marketing.password) {
      setError(false);
      navigate("/marketingmeeting");
      return;
    } else if (user === it.email && password === it.password) {
      setError(false);
      navigate("/itmeeting");
      return;
    } else if (user === intern.email && password === intern.password) {
      setError(false);
      navigate("/internmeeting");
      return;
    } else {
      setError(true);
    }
  };
  return (
    <div className="main-login-container">
      <form className="main-login-form">
        <div className="main-heading">
          <h4>Login</h4>
        </div>
        <div className="text-filed">
          <input
            type="email"
            placeholder="Enter Your Email"
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div className="text-filed">
          <input
            type="password"
            placeholder="Enter Your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && (
          <p style={{ color: "red" }}>Incorrect email or password...</p>
        )}
        <div className="login-btn">
          <button onClick={handleLogin}>Login</button>
        </div>
      </form>
    </div>
  );
};
