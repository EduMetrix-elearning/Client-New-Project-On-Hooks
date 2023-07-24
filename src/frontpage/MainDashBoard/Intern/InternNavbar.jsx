import React, { useEffect, useState } from "react";
import "./InternNavbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import EmployeeProfile from "../../../components/employee_profile/EmployeeProfile";
// import { DashBoardInputs } from "../../../WebsiteDashboard/Inputs";
// import { DashBoardDetails } from "../../../WebsiteDashboard/Details";
// import { DashBoardStatus } from "../../../WebsiteDashboard/Status";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const InternNavbar = () => {
  const navigate = useNavigate();
  const [empId, setEmpId] = useState("");
  const [username, setUsername] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  useEffect(() => {
    setEmpId(localStorage.getItem("employeeid"));
    setUsername(localStorage.getItem("employeeName"));
    setProfilePic(localStorage.getItem("employeeProfilePic"));
  }, []);

  const onLogoutClick = () => {
    localStorage.clear();
    navigate("/maindashboard", { replace: true });
  };

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
        <div className="logo" onClick={onOpenModal}>
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
              src="https://cdn.britannica.com/92/215392-050-96A4BC1D/Australian-actor-Chris-Hemsworth-2019.jpg"
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
          {/* <li>
            <Link>
              <i className="fas fa-qrcode"></i>Internship
            </Link>
          </li>
          <li>
            <Link>
              <i class="fa-solid fa-user"></i>Agent
            </Link>
          </li> */}
          <li>
            <Link>
              <i className="fas fa-stream"></i>EMT
            </Link>
          </li>
          <li>
            <Link to="/internmeeting">
              <i className="fas fa-calendar-week"></i>MEETING
            </Link>
          </li>
        </ul>
        <div className="media_icons">
          <button onClick={onLogoutClick} className="logout-btn">
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

export default InternNavbar;
