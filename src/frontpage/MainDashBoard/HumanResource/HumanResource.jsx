import React from "react";
import "./HumanResource.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const HumanResource = () => {
  const navigate = useNavigate()
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
            <Link to="/hrcareer">
              <i className="fas fa-qrcode"></i>CAREER
            </Link>
          </li>
          <li>
            <Link to="/hrcorporate">
              <i className="fas fa-link"></i>CORPORATE
            </Link>
          </li>
          <li>
            <Link >
              <i className="fas fa-stream"></i>EMT
            </Link>
          </li>
          <li>
            <Link to="/hrmeeting">
              <i className="fas fa-calendar-week"></i>MEETING
            </Link>
          </li>
        </ul>
        <div className="media_icons">
          <button onClick={() => navigate("/", { replace: true })} className="logout-btn">logout</button>
        </div>
      </div>
    </>
  );
};

export default HumanResource;
