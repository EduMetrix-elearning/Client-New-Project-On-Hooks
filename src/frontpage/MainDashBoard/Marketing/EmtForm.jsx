import React, { useState } from "react";
import "./EmtForm.css";
import MarketingNavbar from "../Marketing/MarketingNavbar";
import * as services from "../../../services/pages/agentRoute";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const EmtForm = () => {
  ///-----Protecting router --------------////
  const navigate = useNavigate();
  const [authenticateUser, setAuthenticateUser] = useState(false);
  const position = "Marketing Executive";
  const EmployeId = localStorage.getItem("employeeid");
  const EmployeeProfile = localStorage.getItem("employeeProfile");

  useEffect(() => {
    if (!EmployeId) {
      return navigate("/maindashboard");
    }
    if (EmployeId) {
      if (EmployeeProfile === position) {
        return setAuthenticateUser(true);
      } else {
        setAuthenticateUser(false);
        alert("Invalid login credentials, Please try to login again");
        return navigate("/maindashboard");
      }
    }
  }, []);
  ///-----Protecting router  ends--------------////
  const [name, setName] = useState();
  const [date, setDate] = useState();
  const [catogory, setCategory] = useState();
  const [work, setWork] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      name: name,
      date: date,
      category: catogory,
      title: work,
    };

    try {
      const AddTrackDetails = async (obj) => {
        const result = await services.submitEmtTracks(obj);
      };
      AddTrackDetails(newPost);
      setName("");
      setDate("");
      setCategory("");
      setWork("");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <>
      {authenticateUser && (
        <>
          <MarketingNavbar />
          <div className="emt-form-container">
            <form className="main-emt-form">
              <div className="main-emt-heading">
                <h4>Emt Form</h4>
              </div>
              <div className="emt-text-filed">
                <label htmlFor="ename">Name</label>
                <input
                  value={name}
                  type="text"
                  id="ename"
                  placeholder="Enter Employee Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="emt-text-filed">
                <label>Working date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="emt-text-filed">
                <label>Category</label>
                <select
                  value={catogory}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option>Enter Position</option>
                  <option>Developer</option>
                  <option>Hr</option>
                  <option>Marketing</option>
                </select>
              </div>

              <div className="emt-text-filed">
                <label>Working Status</label>
                <input
                  value={work}
                  type="text"
                  placeholder="Enter Working Status"
                  onChange={(e) => setWork(e.target.value)}
                />
              </div>
              {/* {error && (
          <p style={{ color: "red" }}>Incorrect email or password...</p>
        )} */}
              <div className="emt-login-btn">
                <button onClick={handleSubmit}>Submit</button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default EmtForm;
