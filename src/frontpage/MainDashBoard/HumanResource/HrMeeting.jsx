import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HrMeeting.css";
import HumanResource from "./HumanResource";

const HrMeeting = () => {
  const navigate = useNavigate();
  const authentication = localStorage.getItem("employeeid");

  useEffect(() => {
    if (!authentication) {
      return navigate("/maindashboard");
    }
  }, []);
  return (
    <>
      {authentication && (
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
