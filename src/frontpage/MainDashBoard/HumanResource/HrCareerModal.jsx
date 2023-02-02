import React, { useState } from "react";
import "./HrCareerModal.css";
import Modal from "@mui/material/Modal";

import { Link } from "react-router-dom";

const services = require("../../../services/pages/agentRoute");

function HrCareerModal({ setOpen, id, notes, open, handleClose }) {
  const [EmployeeMessage, setEmployeeMessage] = useState([]);

  const handleEmployeeMessage = async () => {
    const status = {
      comments: EmployeeMessage,
    };
    console.log(status.comments);

    try {
      const EmployeeSectionUpdating = async () => {
        await services.updateEmployeeStatus(status, id);
        window.location.reload(true);
      };
      EmployeeSectionUpdating();
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  return (
    <div className="career-message-modalBackground">
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
            <textarea
              placeholder="Enter Message"
              onChange={(e) => setEmployeeMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="footer">
            <button
              onClick={() => {
                handleEmployeeMessage();
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

export default HrCareerModal;
