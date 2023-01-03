import React from "react";
import "./ItMeeting.css";
import ItResource from "./ItResource";

const ItMeeting = () => {
  return (
    <>
      <ItResource />
      <div className="meeting-cotainer">
        <div className="meeting-cotainer-1">
          <div className="meeting-content">
            <h3>Join Meeting</h3>
            <button className="meeting-btn">
              <a href="https://meet.google.com/yst-ewzj-ioh" target="_blank">
                Join
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItMeeting;
