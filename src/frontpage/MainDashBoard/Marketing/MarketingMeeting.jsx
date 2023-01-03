import React from "react";
import "./MarketingMeeting.css";
import MarketingNavbar from "./MarketingNavbar";

const MarketingMeeting = () => {
  return (
    <>
      <MarketingNavbar />
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

export default MarketingMeeting;
