import React, { useState } from "react";
import "./InternshipModel.css";
import { Link } from "react-router-dom";

const services = require("../../../services/pages/agentRoute");

export default function InternshipModel({ setOpenModal, id }) {
  const [InternsMessage, setInternsMessage] = useState([]);

  const handleInternsMessage = async () => {
    const status = {
      comments: InternsMessage,
    };
    console.log(status.comments);

    try {
      const InternsSectionUpdating = async () => {
        const result = await services.updateIntersStatus(status, id);
        console.log(result);
      };
      InternsSectionUpdating();
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
            <p>{InternsMessage}</p>
          </div>
        </div>
        <div className="body-2">
          <textarea
            placeholder="Enter Message"
            onChange={(e) => setInternsMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              handleInternsMessage();
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
