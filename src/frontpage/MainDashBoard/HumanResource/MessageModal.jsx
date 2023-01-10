import React from "react";
import "./MessageModal.css";
import { Link } from "react-router-dom";

function MessageModal({ setOpenModal }) {
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
          <textarea placeholder="Enter Message"></textarea>
        </div>
        <div className="footer">
          <button
            onClick={() => {
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

export default MessageModal;
