import React, { useState } from "react";
import "./HrCareerModal.css";
import { Link } from "react-router-dom";

const services = require("../../../services/pages/agentRoute");

function HrCareerModal({ setOpenModal, id, notes }) {
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
            onChange={(e) => setEmployeeMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              handleEmployeeMessage();
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

export default HrCareerModal;
