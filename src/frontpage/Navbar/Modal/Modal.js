import React from "react";
import "./Modal.css";
import { Link } from "react-router-dom";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h4>EduMetrix Affiliate Program</h4>
        </div>
        <div className="body">
          <p>1. Signup Your Agent Profile</p>
          <p>2. Verify Email & Phone Number</p>
          <p>3. Finish Agent KYC form</p>
          <p>4. Go to Student Details Page</p>
          <p>
            5. Start Filling Student Details in your network whom are already
            having Any Graduation
          </p>
          <p>
            6. We will Followup the students & You can See it in Student Status
            Page.
          </p>
          <p>
            7. For every student we close deal in your database, you will be
            rewarded INR 2500/- As your commission amount on the same day.
          </p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>
            <Link
              to="/agentssignup"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Continue
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
