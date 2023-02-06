import React, { useState } from "react";
import "./InternshipModel.css";
import { Link } from "react-router-dom";
import Modal from "@mui/material/Modal";

const services = require("../../../services/pages/agentRoute");

export default function InternshipModel({
  setOpen,
  id,
  notes,
  open,
  handleClose,
}) {
  const [InternsMessage, setInternsMessage] = useState();

  const handleInternsMessage = async () => {
    const status = {
      comments: InternsMessage,
    };
    console.log(status.comments);
    console.log(status.called_date);

    try {
      const InternsSectionUpdating = async () => {
        await services.updateIntersStatus(status, id);
        window.location.reload(true);
      };
      InternsSectionUpdating();
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <div className="intern-message-modalBackground">
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
              onChange={(e) => setInternsMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="footer">
            <button
              onClick={() => {
                handleInternsMessage();
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
