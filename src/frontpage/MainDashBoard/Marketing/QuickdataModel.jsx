import React, { useState } from "react";
import "./QuickdataModel.css";
import Modal from "@mui/material/Modal";

const services = require("../../../services/pages/agentRoute");

function QucikdataModal({ setOpen, id, content, notes, open, handleClose }) {
  const [location, setLocation] = useState("");
  const [past_course, setPastCourse] = useState("");
  const [year_of_passing, setPassingYear] = useState("");
  const [comments, setComments] = useState("");
  const [calledDate, setCalledDate] = useState();
  const [error, setError] = useState("");

  const handleClick = async () => {
    //   if (!location) return setError("Location field is required");
    //   if (!past_course) return setError("Past Course is required");
    //   if (!year_of_passing) return setError("Year of passing is required");
    if (!calledDate) return setError("Date field is required");
    if (!comments) return setError("Message field is required");
    setError("");
    setOpen(false);

    let status = {
      location: location,
      past_course: past_course,
      year_of_passing: year_of_passing,
      comments: comments,
      called_date: calledDate,
    };
    if (content) {
      status = {
        comments,
        called_date: calledDate,
      };
    }

    try {
      const StudentSectionUpdating = async () => {
        await services.updateStudentEnquiryStatus(status, id);
        window.location.reload(true);
      };
      StudentSectionUpdating();
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  console.log(notes);

  return (
    <div className="Quick-modalBackground">
      <Modal open={open} onClose={handleClose}>
        <div className="Quick-modalContainer">
          <div className="Quick-titleCloseBtn">
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
            {!content && (
              <input
                type="text"
                placeholder="Enter Location"
                onChange={(e) => setLocation(e.target.value)}
              />
            )}
            {!content && (
              <input
                type="text"
                placeholder="Enter Past Course"
                onChange={(e) => setPastCourse(e.target.value)}
              />
            )}
            {!content && (
              <input
                type="text"
                placeholder="Year Of Passing"
                onChange={(e) => setPassingYear(e.target.value)}
              />
            )}
            <input
              type="date"
              placeholder="Calling Date"
              onChange={(e) => setCalledDate(e.target.value)}
            />
            <textarea
              placeholder="Enter Message"
              onChange={(e) => setComments(e.target.value)}
            />
          </div>
          <div className="footer" style={{ flexDirection: "column" }}>
            <p style={{ color: "red" }}>{error}</p>{" "}
            <button onClick={handleClick}>Submit</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default QucikdataModal;
