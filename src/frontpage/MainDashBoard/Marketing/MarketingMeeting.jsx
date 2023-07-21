import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MarketingMeeting.css";
import MarketingNavbar from "./MarketingNavbar";

const MarketingMeeting = () => {
  const navigate = useNavigate();
  const [authenticateUser, setAuthenticateUser] = useState(false);
  const position = "Marketing Executive";
  const EmployeId = localStorage.getItem("employeeid");
  const EmployeeProfile = localStorage.getItem("employeeProfile");

  // if (!EmployeId) {
  //   return navigate("/maindashboard");
  // }
  console.log("type of position", position);
  console.log("type of EmployeeProfile", EmployeeProfile);

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
        <>
          <MarketingNavbar />
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
        </>
      )}
    </>
  );
};

export default MarketingMeeting;
