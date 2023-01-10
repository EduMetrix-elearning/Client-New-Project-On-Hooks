import React from "react";
import "./QuickdataModel.css";

function QucikdataModal({ setOpenModal }) {
  return (
    <div className="Quick-modalBackground">
      <div className="Quick-modalContainer">
        <div className="Quick-titleCloseBtn">
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
            <p>Mysore</p>
            <p>BE</p>
            <p>22-01-2021</p>
            <p>I will call you Later</p>
          </div>

          <div className="body-content">
            <p>Mysore</p>
            <p>BE</p>
            <p>22-01-2021</p>
            <p>I will call you Later</p>
          </div>
        </div>
        <div className="body-2">
          <input type="text" placeholder="Enter Location" />
          <input type="text" placeholder="Enter Past Course" />
          <input
            type="text"
            placeholder="Year Of Passing"
            onfocus="(this.type='date')"
          />
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

export default QucikdataModal;
