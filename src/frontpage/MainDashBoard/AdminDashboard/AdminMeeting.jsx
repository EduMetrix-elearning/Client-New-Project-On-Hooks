import React, { useEffect, useState } from "react";
import AdminDashboard from "./AdminDashboard";
import "./AdminMeeting.css";
import { useNavigate } from "react-router-dom";

const AdminMeeting = () => {
  const navigate = useNavigate();
  const [authenticateUser, setAuthenticateUser] = useState(false);
  const position = "Admin";
  const EmployeId = localStorage.getItem("employeeid");
  const EmployeeProfile = localStorage.getItem("employeeProfile");

  useEffect(() => {
    if (!EmployeId) {
      return navigate("/maindashboard");
    }
    if (EmployeId) {
      if (EmployeeProfile === position) {
        return setAuthenticateUser(true);
      } else {
        setAuthenticateUser(false);
        alert("Invalid login credentials, Please try to login again");
        return navigate("/maindashboard");
      }
    }
  }, []);

  return (
    <>
      {authenticateUser && (
        <div className="background">
          <AdminDashboard />
          <div className="meeting-cotainer">
            <div className="meeting-cotainer-1">
              <div className="meeting-content">
                <h3>Join Meeting</h3>
                <button className="meeting-btn">
                  <a
                    href="https://meet.google.com/fwh-dsrn-wav"
                    target="_blank"
                  >
                    Join
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminMeeting;
