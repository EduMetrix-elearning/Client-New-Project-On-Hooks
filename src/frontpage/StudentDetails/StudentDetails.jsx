import { React, useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AgentNavbar } from "../AgentNavbar/AgentNavbar";
import { ToastContainer, toast } from "react-toastify";

import "./StudentDetails.scss";
import { color } from "@mui/system";

const services = require("../../services/pages/agentRoute");
const ls = require("local-storage");

export const StudentDetails = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [place, setPlace] = useState("");
  const [placeError, setPlaceError] = useState("");
  const [contact_number, setContactNumber] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [course, setCourse] = useState("");
  const [courseError, setCourseError] = useState("");
  const [year_of_passing, setYear_of_passing] = useState("");
  const [yearError, setYearError] = useState("");

  const usernameValidate = (name) => {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(name);
  };
  const regax = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const inputHandle = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
      setNameError("");
    } else if (e.target.name === "place") {
      setPlace(e.target.value);
      setPlaceError("");
    } else if (e.target.name === "phone") {
      setContactNumber(e.target.value);
      setPhoneError("");
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
      setEmailError("");
    } else if (e.target.name === "course") {
      setCourse(e.target.value);
      setCourseError("");
    } else if (e.target.name === "year_of_passing") {
      setYear_of_passing(e.target.value);
      setYearError("");
    }
  };

  // const handleSubmit = () => {
  //   const obj = {
  //     agent_id: ls.get("id"),
  //     name: name,
  //     place: place,
  //     contact_number: contact_number,
  //     email: email,
  //     course: course,
  //   };

  //   services.referralSubmit(obj, (result) => {
  //     if (result) {
  //       navigate("/status");
  //     } else {
  //       setErrMsg(true);
  //     }
  //   });
  // };

  const handleAgentSubmit = (e) => {
    e.preventDefault();
    let flag = false;
    if (name === "") {
      flag = true;
      setNameError("Agent name field cannot be empty *");
    } else if (usernameValidate(name)) {
      flag = true;
      setNameError("Agent name not valid *");
    } else if (name.indexOf("@") > -1) {
      flag = true;
      setNameError("@ not allowed *");
    } else if (place === "") {
      flag = true;
      setPlaceError("Place Should Not Be Empty*");
    } else if (place.length < 2) {
      flag = true;
      setPlaceError("place name atleast 3 Charecter long*");
    } else if (contact_number === "") {
      flag = true;
      setPhoneError("phone number cannot be empty *");
    } else if (contact_number.length < 10) {
      flag = true;
      setPhoneError("Phone number should be 10 digit *");
    } else if (email === "") {
      flag = true;
      setEmailError("email cannot be empty *");
    } else if (!email.match(regax)) {
      flag = true;
      setEmailError("Email not valid *");
    } else if (email.split(" ").length - 1 > 0) {
      flag = true;
      setEmailError("space not allowed *");
    } else if (course === "") {
      flag = true;
      setCourseError("Enter Course Details*");
    } else if (year_of_passing === "") {
      flag = true;
      setYearError("Enter Year of Passing*");
    }
   
    if (!flag) {
      let obj = {
        agent_id: ls.get("id"),
        name,
        place,
        contact_number,
        email,
        course,
        year_of_passing,
      };
      console.log("api obj", obj);
      services.referralSubmit(obj, (result) => {
        if (obj) {
          navigate("/status");
        } else {
          toast.error("Please Fill All The Details!", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      });
    }
  };

  return (
    <div className="student-details">
      <AgentNavbar />
      <ToastContainer closeOnClick={false} />

      <div className="student-profile-main-div">
        <div className="student-profile-form-div">
          <h2
            style={{
              marginBottom: "20px",
              color: "white",
              backgroundColor: "#193942",
              padding: "15px",
              textAlign: "center",
            }}
          >
            REFFERAL FORM
          </h2>
          <Form className="student-profile-form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label> Student Name *</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Enter name"
                style={{ marginBottom: "15px" }}
                onChange={(e) => inputHandle(e)}
              />
              {nameError ? <p style={{ color: "red" }}>{nameError}</p> : ""}
              <Form.Label>Place *</Form.Label>
              <Form.Control
                name="place"
                type="text"
                placeholder="Enter place"
                style={{ marginBottom: "15px" }}
                onChange={(e) => inputHandle(e)}
              />
              {placeError ? <p style={{ color: "red" }}>{placeError}</p> : ""}
              <Form.Label>Mobile Number *</Form.Label>
              <Form.Control
                name="phone"
                type="number"
                placeholder="Enter mobile number"
                style={{ marginBottom: "15px" }}
                onChange={(e) => inputHandle(e)}
              />
              {phoneError ? <p style={{ color: "red" }}>{phoneError}</p> : ""}
              <Form.Label>Email *</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
                style={{ marginBottom: "15px" }}
                onChange={(e) => inputHandle(e)}
              />
              {emailError ? <p style={{ color: "red" }}>{emailError}</p> : ""}
              <Form.Label>Past course *</Form.Label>
              <Form.Control
                name="course"
                type="text"
                placeholder="Enter past course"
                style={{ marginBottom: "15px" }}
                onChange={(e) => inputHandle(e)}
              />
              {courseError ? <p style={{ color: "red" }}>{courseError}</p> : ""}

              <Form.Label>Year of Passing *</Form.Label>
              <Form.Control
                name="year_of_passing"
                type="date"
                placeholder="Enter Year of Passing"
                style={{ marginBottom: "15px" }}
                onChange={(e) => inputHandle(e)}
              />
              {yearError ? <p style={{ color: "red" }}>{yearError}</p> : ""}
            </Form.Group>

            <Button
              className="student-profile-form-btn"
              variant="primary"
              type="submit"
              onClick={(e) => handleAgentSubmit(e)}
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
