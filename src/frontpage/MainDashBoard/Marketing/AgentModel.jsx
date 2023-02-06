import React, { useState } from "react";
import "./AgentModel.css";
import Modal from "@mui/material/Modal";

const services = require("../../../services/pages/agentRoute");

export default function AgentModel({ setOpen, id, notes, open, handleClose }) {
  const [studentMessage, setStudentMessage] = useState("");
  const [calledDate, setCalleDate] = useState();

  const handleStudentMessage = async () => {
    const status = {
      comments: studentMessage,
      called_date: calledDate,
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
    <div className="agent-message-modalBackground">
      <Modal open={open} onClose={handleClose}>
        <div className="message-modalContainer">
          <div className="message-titleCloseBtn">
            <button
              onClick={() => {
                setOpen(false);
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
            <input type="number" placeholder="Calling Date" />
            <textarea
              placeholder="Enter Message"
              onChange={(e) => setStudentMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="footer">
            <button
              onClick={() => {
                handleStudentMessage();
                setOpen(false);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
