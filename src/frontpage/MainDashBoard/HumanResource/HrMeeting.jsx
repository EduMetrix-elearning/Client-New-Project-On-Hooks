import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HrMeeting.css";
import HumanResource from "./HumanResource";

const HrMeeting = () => {
  //--Protecting Router-starts---///
  const navigate = useNavigate();
  const [authenticateUser, setAuthenticateUser] = useState(false);
  const position1 = "Human Resource";
  const position2 = "Human Resource Intern";
  const EmployeId = localStorage.getItem("employeeid");
  const EmployeeProfile = localStorage.getItem("employeeProfile");

  useEffect(() => {
    if (!EmployeId) {
      return navigate("/maindashboard");
    }
    if (EmployeId) {
      if (EmployeeProfile === position1 || EmployeeProfile === position2) {
        return setAuthenticateUser(true);
      } else {
        setAuthenticateUser(false);
        alert("Invalid login credentials, Please try to login again");
        return navigate("/maindashboard");
      }
    }
  }, []);
   //--Protecting Router ends----///

  return (
    <>
      {authenticateUser && (
        <>
          <HumanResource />
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

export default HrMeeting;
