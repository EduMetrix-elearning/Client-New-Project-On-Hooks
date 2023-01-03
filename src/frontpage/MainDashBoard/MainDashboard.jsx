import React from "react";
import { Link } from "react-router-dom";

import "./Dashboard.css";

const MainDashboard = () => {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="sidebar-item">
          <Link
            style={{ textDecoration: "none" }}
            className="hr-image"
            to="/employelogin"
          >
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyOuIaeauF-9HtYno_-9jltc0KKkpiMVTPHBig17B_l-eMM8XtfnfjKOpkWEDxu8gpliQ&usqp=CAU"
                width="50px"
                height="50px"
                alt=""
              />
              <h4>ADMIN</h4>
            </div>
          </Link>
        </div>
      </div>
      <div className="aside">
        <div className="content">
          <Link className="content-item-1" to="/employelogin">
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2vxIhPPnM8flohiwm1Br6Bw_axWffH105OA&usqp=CAU"
                width="100px"
                height="100px"
                alt=""
              />
              <h4>HUMAN RESOURCE</h4>
            </div>
          </Link>

          <Link className="content-item-1" to="/employelogin">
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKLj4BwUcDBPrqCz5qDfBs5AT_qhqobfOvsg&usqp=CAU"
                width="80px"
                height="80px"
                alt=""
              />
              <h4>MARKETING</h4>
            </div>
          </Link>
        </div>
        <div className="content">
          <Link className="content-item-1" to="/employelogin">
            <div>
              <img
                src="data:image/png;base64,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"
                width="80px"
                height="80px"
                alt=""
              />
              <h4>IT</h4>
            </div>
          </Link>

          <Link className="content-item-1" to="/employelogin">
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLw6xz1Vu6FjSwOFHHJlXgpWEF9GqKK93PXA&usqp=CAU"
                width="80px"
                height="80px"
                alt=""
              />
              <h4>INTERN</h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
