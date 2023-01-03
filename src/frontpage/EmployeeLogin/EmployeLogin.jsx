import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./EmployeLogin.css";
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
      navigate("/admindashboard");
      return;
    } else if (user === hr.email && password === hr.password) {
      setError(false);
      navigate("/humanresource");
      return;
    } else if (user === marketing.email && password === marketing.password) {
      setError(false);
      navigate("/marketingnavbar");
      return;
    } else if (user === it.email && password === it.password) {
      setError(false);
      navigate("/itresource");
      return;
    } else if (user === intern.email && password === intern.password) {
      setError(false);
      navigate("/internnavbar");
      return;
    } else {
      setError(true);
    }
  };
  return (
    // <div className="employe-login-whole-div">
    //   <div className="employe-login-form-div">
    //     <h1
    //       style={{
    //         marginBottom: "20px",
    //         color: "white",
    //         backgroundColor: "#193942",
    //         padding: "15px",
    //         textAlign: "center",
    //       }}
    //     >
    //       LOGIN
    //     </h1>
    //     <Form className="employe-login-form">
    //       <Form.Group
    //         onChange={(e) => setUser(e.target.value)}
    //         className="mb-3"
    //         controlId="formBasicEmail"
    //       >
    //         <Form.Label>Email *</Form.Label>
    //         <Form.Control
    //           type="email"
    //           placeholder="Enter email"
    //           autoComplete="off"
    //         />
    //         <Form.Text className="text-muted">
    //           We'll never share your email with anyone else.
    //         </Form.Text>
    //       </Form.Group>

    //       <Form.Group
    //         onChange={(e) => setPassword(e.target.value)}
    //         className="mb-3"
    //         controlId="formBasicPassword"
    //       >
    //         <Form.Label>Password *</Form.Label>
    //         <Form.Control
    //           type="password"
    //           placeholder="Password"
    //           autoComplete="off"
    //         />
    //       </Form.Group>
    //       <Form.Group className="mb-1" controlId="formBasicCheckbox">
    //         <div style={{ display: "flex", justifyContent: "space-between" }}>
    //           <Form.Check type="checkbox" label="Remember me" />
    //           <p>Forget Password ?</p>
    //         </div>
    //       </Form.Group>

    //       {/* <Link
    //         style={{ textDecoration: "none", color: "white" }}

    //       > */}
    //       {error && (
    //         <p style={{ color: "red" }}>Incorrect email or password...</p>
    //       )}
    //       <Button
    //         onClick={handleLogin}
    //         className="employe-login-btn"
    //         style={{ backgroundColor: "#193942" }}
    //       >
    //         LOG IN
    //       </Button>
    //       {/* </Link> */}
    //     </Form>
    //   </div>
    // </div>
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
