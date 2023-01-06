import React from "react";
import "./AdminNavbar.css";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

// import { DashBoardInputs } from "../../../WebsiteDashboard/Inputs";
// import { DashBoardDetails } from "../../../WebsiteDashboard/Details";
// import { DashBoardStatus } from "../../../WebsiteDashboard/Status";

const AdminDashboard = () => {
  return (
    <>
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
            meeting
          </Link>
        </li>

        <li
          style={{
            backgroundColor: "#193942",
            color: "white",
            marginRight: "10px",
          }}
        >
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            LOGOUT
          </Link>
        </li>
      </ul>
    </>
  );
};

export default AdminDashboard;
