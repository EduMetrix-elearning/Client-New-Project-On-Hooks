import React, { useEffect, useState } from "react";
import "./MarketingNavbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import EmployeeProfile from "../../../components/employee_profile/EmployeeProfile";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const MarketingNavbar = () => {
  const navigate = useNavigate();
  const [empId, setEmpId] = useState("");
  const [username, setUsername] = useState("");
  const [profilePic, setProfilePic] = useState();
  const temporaryPic =
    "https://cdn.britannica.com/92/215392-050-96A4BC1D/Australian-actor-Chris-Hemsworth-2019.jpg";

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  useEffect(() => {
    setEmpId(localStorage.getItem("employeeid"));
    setUsername(localStorage.getItem("employeeName"));
    setProfilePic(localStorage.getItem("employeeProfilePic"));
  }, []);

  return (
    <>
      <div className="side_bar">
        {/* <div className="logo">
          <img
            className="logo-img"
            src="https://edumetrix.io/static/media/coin.c062b2cf16bee63f2da9.png"
            alt=""
          />
        </div> */}
        <div onClick={onOpenModal}>
          <div
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "end",
              gap: "10px",
              cursor: "pointer",
            }}
          >
            <img
              src={temporaryPic}
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                objectFit: "cover",
                marginLeft: "20px",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              {empId && (
                <span
                  style={{
                    color: "black",
                    fontSize: "15px",
                    fontWeight: "800",
                  }}
                >
                  {empId}
                </span>
              )}
              {username && (
                <span
                  style={{
                    color: "black",
                    fontSize: "25px",
                    fontWeight: "800",
                  }}
                >
                  {username}
                </span>
              )}
            </div>
          </div>
        </div>

        <ul>
          <li>
            <NavLink to="/quickdata">
              <i className="fas fa-qrcode"></i>Quick Data
            </NavLink>
          </li>
          <li>
            <NavLink to="/internsdetails">
              <i className="fas fa-qrcode"></i>Internship
            </NavLink>
          </li>
          <li>
            <NavLink to="/agentstudents">
              <i className="fa-solid fa-user"></i>Agent
            </NavLink>
          </li>
          <li>
            <NavLink to="/emtform">
              <i className="fas fa-stream"></i>EMT
            </NavLink>
          </li>
          <li>
            <NavLink to="/marketingmeeting">
              <i className="fas fa-calendar-week"></i>MEETING
            </NavLink>
          </li>
        </ul>
        <div className="media_icons">
          <button
            onClick={() => navigate("/", { replace: true })}
            className="logout-btn"
          >
            logout
          </button>
        </div>
      </div>
      <div>
        <Modal open={open} onClose={onCloseModal} center>
          <EmployeeProfile />
        </Modal>
      </div>
    </>
  );
};

export default MarketingNavbar;
