import React, { useState } from "react";
import "./CorporateModal.css";
import { Link } from "react-router-dom";

const services = require("../../../services/pages/agentRoute");

export default function CorporateModel({ setOpenModal, id, notes }) {
  const [CorporateMessage, setCorporateMessage] = useState([]);

  const handleCorporateMessage = async () => {
    const status = {
      comments: CorporateMessage,
    };
    console.log(status.comments);

    try {
      const CorporateSectionUpdating = async () => {
        await services.updateCorporateStatus(status, id);
        window.location.reload(true);
      };
      CorporateSectionUpdating();
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
            onChange={(e) => setCorporateMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              handleCorporateMessage();
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
