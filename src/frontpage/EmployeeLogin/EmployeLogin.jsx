import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./EmployeLogin.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const EmployeLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [position, setPosition] = useState("");
  const services = require("../../services/pages/agentRoute");

  useEffect(() => {
    setPosition(location.state?.role);
  }, [location]);

  // console.log("location", location.state?.role);

  const handleLogin = async (e) => {
    e.preventDefault();
    let obj = { employeeId, password, position };
    try {
      const result = await services.loginWorkingEmployee(obj);
      if (result) {
        switch (position) {
          case "Admin":
            navigate("/adminmeeting");
            break;
          case "Marketing Executive":
            navigate("/marketingmeeting");
            break;
          case "Software Engineer":
            navigate("/itmeeting");
            break;
          case "Software Engineer Intern":
            navigate("/internmeeting");
            break;
          case "Human Resource":
            navigate("/hrmeeting");
            break;
          case "Human Resource Intern":
            navigate("/hrmeeting");
            break;
        }
        setError("");
      }
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data) {
        // Displaying error message on the page
        setError("Invalid login credentials");
      } else {
        // console.error(error.message);
        setError(error.message);
      }
    }
  };

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   let obj = { user, password, position };
  //   services.loginWorkingEmployee(obj, (error, result) => {
  //     console.log("obj-----", obj);
  //     console.log("Mridu", result);
  //     console.log("errorrr", error);
  //     if (result) {
  //       console.log("result", result);
  //     }
  //   });
  // const admin = {
  //   email: "shafan@edumetrix.io",
  //   password: "password",
  // };
  // const hr = {
  //   email: "jamsheerjamshi1998@gmail.com",
  //   password: "Jamshi@123",
  // };
  // const marketing = {
  //   email: "marketing123@gmail.com",
  //   password: "marketing@123",
  // };
  // const it = {
  //   email: "itrecruit@gmail.com",
  //   password: "it@123",
  // };
  // const intern = {
  //   email: "internsdata@gmail.com",
  //   password: "intern@123",
  // };
  // if (position == "Admin") {
  //   if (user === admin.email && password === admin.password) {
  //     setError(false);
  //     navigate("/adminmeeting");
  //     return;
  //   } else setError(true);
  // }
  // if (position == "Human Resource") {
  //   if (user === hr.email && password === hr.password) {
  //     setError(false);
  //     navigate("/hrmeeting");
  //     return;
  //   } else setError(true);
  // }
  // if (position == "Marketing") {
  //   if (user === marketing.email && password === marketing.password) {
  //     setError(false);
  //     navigate("/marketingmeeting");
  //     return;
  //   } else setError(true);
  // }
  // if (position == "IT") {
  //   if (user === it.email && password === it.password) {
  //     setError(false);
  //     navigate("/itmeeting");
  //     return;
  //   } else setError(true);
  // }
  // if (position == "Intern") {
  //   if (user === intern.email && password === intern.password) {
  //     setError(false);
  //     navigate("/internmeeting");
  //     return;
  //   } else {
  //     setError(true);
  //   }
  // } else {
  //   setError(true);
  // }
  // };
  return (
    <div className="main-login-container">
      <form className="main-login-form">
        <div className="main-heading">
          <h4>Login</h4>
        </div>
        <div className="text-filed">
          <input
            type="text"
            placeholder="Enter Your Employee ID"
            onChange={(e) => setEmployeeId(e.target.value)}
          />
        </div>
        <div className="text-filed">
          <input
            type="password"
            placeholder="Enter Your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {position && (
          <div className="text-filed">
            <input type="text" value={position} disabled />
          </div>
        )}
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="login-btn">
          <button onClick={handleLogin}>Login</button>
        </div>
      </form>
    </div>
  );
};
