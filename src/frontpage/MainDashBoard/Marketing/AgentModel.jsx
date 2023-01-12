import React, { useState } from "react";
import "./AgentModel.css";


const services = require("../../../services/pages/agentRoute");

export default function AgentModel({ setOpenModal, id,notes }) {
  const [studentMessage, setStudentMessage] = useState("");

  const handleStudentMessage = async () => {
    const status = {
      comments: studentMessage,
    };
    console.log(status.comments);

    try {
      const AgentStudentSectionUpdating = async () => {
        await services.updateReferralStatus(status, id);
        window.location.reload(true);
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
        {notes &&
            notes.map((note, index) => {
              return (
                <div className="body-content" key={index}>
                  <p>{note}</p>
                </div>
              );
            })}
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
