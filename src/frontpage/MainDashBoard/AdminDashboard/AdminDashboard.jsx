import React from "react";
import "./AdminNavbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const AdminDashboard = () => {
  const navigate = useNavigate();
  return (
    <ul id="mainmenu">
      <img
        src="https://edumetrix.io/static/media/coin.c062b2cf16bee63f2da9.png"
        alt=""
      />

      <li>
        TEAM
        <ul className="submenu">
          <li>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/employeedetails"
            >
              EmployeeDetails
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/employeeprofiles"
            >
              Employee Profiles
            </Link>
          </li>
        </ul>
      </li>

      <li>
        BILLING
        <ul className="submenu">
          <li>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/newbilingdetails"
            >
              New Billing
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/billinghistory"
            >
              Billing History
            </Link>
          </li>
        </ul>
      </li>

      <li>EMT</li>
      <li>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/adminmeeting"
        >
          MEETING
        </Link>
      </li>

      <li
        onClick={() => navigate("/", { replac: true })}
        style={{
          backgroundColor: "#193942",
          color: "white",
          marginRight: "30px",
          padding: "15px 10px",
        }}
      >
        LOGOUT
      </li>
    </ul>
  );
};

export default AdminDashboard;
