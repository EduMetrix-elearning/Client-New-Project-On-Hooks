import React from "react";
import "../../frontpage/EmployeeLogin/EmployeLogin.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ChangePassword() {
  const [employeeId, setEmployeeId] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const services = require("../../services/pages/agentRoute");

//   const [open, setOpen] = useState(false);

//   const onOpenModal = () => setOpen(true);
//   const onCloseModal = () => setOpen(false);

  useEffect(() => {
    setEmployeeId(localStorage.getItem("employeeid"));
  }, [employeeId]);

  const onHandleSubmit = async (e) => {
    setError(false);
    if (
      currentPassword === "" ||
      newPassword === "" ||
      confirmPassword === ""
    ) {
      setError("All fields are mandatory");
    } else if (newPassword !== confirmPassword) {
      setError("New Password and Confirm Password should be same");
    } else if (newPassword.match(/\s/)) {
      setError("*No whitespace allowed");
    } else if (!newPassword.match(/[A-Z]/)) {
      setError("*Password should contain atleast one Uppercase");
    } else if (!newPassword.match(/[a-z]/)) {
      setError("*Password should contain atleast one smallcase");
    } else if (!newPassword.match(/[0-9]/)) {
      setError("*Password should contain atleast one Number");
    } else if (!newPassword.match(/[!@#%&]/)) {
      setError(
        "Password should contain atleast one of this special characters: ! @ # % & ) "
      );
    } else if (currentPassword === newPassword) {
      setError("Current Password and New Password cannot be same");
    }

    if (newPassword.length > 10) {
      setError("*Password cannot have more than 10 characters");
    }
    if (error === false) {
      let obj = { employeeId, currentPassword, newPassword };
      const result = await services.changePasswordOfWorkingEmployee(obj);
      alert(result);
      if (result === "Password changed successfully") {
        alert(
          "Redirecting you to the login page, please try to login with the new password"
        );
        setTimeout(() => {
          navigate("/maindashboard", { replace: true });
        }, 1000);
      }
    }

    console.log(newPassword, currentPassword);
  };
  return (
    <>
        <div className="main-login-container" style={{ marginTop: "20px" }}>
          <div className="main-login-form">
            {/* <div className="main-heading"></div> */}
            <div className="text-filed">
              <input
                type="text"
                placeholder="Current Password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </div>
            <div className="text-filed">
              <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            {/* {position && ( */}
            <div className="text-filed">
              <input
                type="text"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            {/* )} */}
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div className="login-btn">
              <button onClick={onHandleSubmit}>Submit</button>
            </div>
          </div>
        </div>
    </>
  );
}
