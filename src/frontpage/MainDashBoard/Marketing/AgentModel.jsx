import React, { useState } from "react";
import "./AgentModel.css";
import { Link } from "react-router-dom";

const services = require("../../../services/pages/agentRoute");

export default function AgentModel({ setOpenModal, id }) {
  const [studentMessage, setStudentMessage] = useState();

  const handleStudentMessage = async () => {
    const status = {
      comments: studentMessage,
    };
    console.log(status.comments);

    try {
      const AgentStudentSectionUpdating = async () => {
        const result = await services.updateReferralStatus(status, id);
        console.log(result);
      };
      AgentStudentSectionUpdating();
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <div className="message-modalBackground">
      <div className="message-modalContainer">
        <div className="message-titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h4 style={{ textAlign: "center" }}>Message</h4>
        </div>
        <div className="body">
          <div className="body-content">
            <p>I will call you Later</p>
          </div>

          <div className="body-content">
            <p>I will call you Later</p>
          </div>

          <div className="body-content">
            <p>I will call you Later</p>
          </div>
        </div>
        <div className="body-2">
          <textarea
            placeholder="Enter Message"
            onChange={(e) => setStudentMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              handleStudentMessage()
              setOpenModal(false);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
