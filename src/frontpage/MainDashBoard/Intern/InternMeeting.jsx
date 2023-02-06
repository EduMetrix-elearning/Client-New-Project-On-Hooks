import React from "react";
import "./InternMeeting.css";
import InternNavbar from "./InternNavbar";

const InternMeeting = () => {
  return (
    <>
      <InternNavbar />
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

export default InternMeeting;
