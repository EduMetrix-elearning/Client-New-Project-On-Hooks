import React from "react";
import "./InternNavbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
// import { DashBoardInputs } from "../../../WebsiteDashboard/Inputs";
// import { DashBoardDetails } from "../../../WebsiteDashboard/Details";
// import { DashBoardStatus } from "../../../WebsiteDashboard/Status";

const InternNavbar = () => {
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
              <i className="fas fa-calendar-week"></i>METTING
            </Link>
          </li>
        </ul>
        <div className="media_icons">
          <button
            onClick={() => navigate("/", { replac: true })}
            className="logout-btn"
          >
            logout
          </button>
        </div>
      </div>
    </>
  );
};

export default InternNavbar;
