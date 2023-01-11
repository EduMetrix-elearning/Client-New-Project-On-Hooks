import React, { useEffect, useState } from "react";
import "./QuickdataModel.css";

const services = require("../../../services/pages/agentRoute");
const ls = require("local-storage");

function QucikdataModal({
  setOpenModal,
  id,
  content,
  // contentCourse,
  // contentYear,
}) {
  const [location, setLocation] = useState("");
  const [past_course, setPastCourse] = useState("");
  const [year_of_passing, setPassingYear] = useState("");
  const [comments, setComments] = useState();
  const [updateData, setUpdateData] = useState([]);

  useEffect(() => {
    setUpdateData();
  }, []);

  const handleClick = async () => {
    const status = {
      // enquiry_id: ls.get("id"),
      location: location,
      past_course: past_course,
      year_of_passing: year_of_passing,
      comments: comments,
    };
    console.log(status.comments);

    try {
      const StudentSectionUpdating = async () => {
        const result = await services.updateStudentEnquiryStatus(status, id);
        console.log(result);
        setUpdateData(result);
      };
      StudentSectionUpdating();
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  console.log(content);

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
            <div>{location}</div>
            <div>{past_course}</div>
            <p>{year_of_passing}</p>
            <p>{comments}</p>
          </div>
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
          ></textarea>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              handleClick()
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
