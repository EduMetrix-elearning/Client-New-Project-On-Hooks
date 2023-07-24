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
  console.log("position", position);
  useEffect(() => {
    setPosition(location.state?.role);
  }, []);

  console.log("location", location.state?.role);

  const handleLogin = async (e) => {
    e.preventDefault();
    let obj = { employeeId, password, position };
    try {
      const result = await services.loginWorkingEmployee(obj);
      console.log("result in employeelogin", result);
      if (result) {
        localStorage.setItem("employeeid", result.employeeid);
        localStorage.setItem("employeeName", result.employeeName);
        localStorage.setItem("employeeProfilePic", result.employeeProfilePic);
        localStorage.setItem("employeeProfile", result.profile);
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

  return (
    <div className="loginContainer">
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
              placeholder="Enter Your Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {position && (
            <>
              {position === "Human Resource" ||
              position === "Human Resource Intern" ? (
                <div className="category_container">
                  <label>Category :</label>
                  <div className="positionSelect">
                    <input
                      type="radio"
                      name="position"
                      value="Human Resource"
                      style={{ width: "15px", height: "15px" }}
                      onChange={(e) => setPosition(e.target.value)}
                      checked={position === "Human Resource"}
                    />
                    <span>Human Resource</span>
                  </div>
                  <div className="positionSelect">
                    <input
                      type="radio"
                      name="position"
                      value="Human Resource Intern"
                      style={{ width: "15px", height: "15px" }}
                      onChange={(e) => setPosition(e.target.value)}
                      checked={position === "Human Resource Intern"}
                    />
                    <span>Human Resource Intern</span>
                  </div>
                </div>
              ) : (
                <div className="text-filed">
                  <input type="text" value={position} disabled />
                </div>
              )}
            </>
          )}
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div className="login-btn">
            <button onClick={handleLogin}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};
