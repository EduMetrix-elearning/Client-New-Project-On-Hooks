import React from "react";
import "./HrMeeting.css";
import HumanResource from "./HumanResource";

const HrMeeting = () => {
  return (
    <>
    <HumanResource />
    <div className="meeting-cotainer">
      <div className="meeting-cotainer-1">
        <div className="meeting-content">
          <h3>Join Meeting</h3>
          <button className="meeting-btn">
            <a href="https://meet.google.com/fwh-dsrn-wav" target="_blank">
              Join
            </a>
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default HrMeeting;
