import React from "react";
import "./MarketingNavbar.css";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const MarketingNavbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="side_bar">
        <div className="logo">
          <img
            className="logo-img"
            src="https://edumetrix.io/static/media/coin.c062b2cf16bee63f2da9.png"
            alt=""
          />
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
    </>
  );
};

export default MarketingNavbar;
