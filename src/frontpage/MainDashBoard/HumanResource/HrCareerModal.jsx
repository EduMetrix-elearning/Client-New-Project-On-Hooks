import React, { useState } from "react";
import "./HrCareerModal.css";
import { Link } from "react-router-dom";

const services = require("../../../services/pages/agentRoute");

function HrCareerModal({ setOpenModal, id }) {
  const [EmployeeMessage, setEmployeeMessage] = useState([]);

  const handleEmployeeMessage = async () => {
    const status = {
      comments: EmployeeMessage,
    };
    console.log(status.comments);

    try {
      const EmployeeSectionUpdating = async () => {
        const result = await services.updateEmployeeStatus(status, id);
        console.log(result);
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
          <div className="body-content">
            <p>{EmployeeMessage}</p>
          </div>
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
              handleEmployeeMessage()
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
