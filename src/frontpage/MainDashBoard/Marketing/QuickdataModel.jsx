import React, {  useState } from "react";
import "./QuickdataModel.css";

const services = require("../../../services/pages/agentRoute");


function QucikdataModal({ setOpenModal, id, content, notes }) {
  const [location, setLocation] = useState("");
  const [past_course, setPastCourse] = useState("");
  const [year_of_passing, setPassingYear] = useState("");
  const [comments, setComments] = useState("");

  const handleClick = async () => {
    let status = {
      location: location,
      past_course: past_course,
      year_of_passing: year_of_passing,
      comments: comments,
    };
    if (content) {
      status = {
        comments,
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

  console.log(notes)

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
          {/* {notes && notes.map((note, index) => {
            return (
              <div className="body-content" key={index}>
                <p>{note}</p>
              </div>
            );
          })} */}
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
          <textarea
            placeholder="Enter Message"
            onChange={(e) => setComments(e.target.value)}
          />
        </div>
        <div className="footer">
          <button
            onClick={() => {
              handleClick();
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
