import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div
        className="navbar navbar-expand-lg navbar-dark bg-primary "
        id="sideNav"
      >
        <Link className="navbar-brand js-scroll-trigger" to="/">
          <span className="d-block d-lg-none">Clarence Taylor</span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src="https://wallpapers.com/images/hd/cool-neon-blue-profile-picture-u9y9ydo971k9mdcf.jpg"
              alt="..."
            />
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <li className="nav-item">
              <h3 className="nav-link">Muhammad Anzil</h3>
            </li>
            <li className="nav-item">
              <h4 className="nav-link">UI Designer</h4>
            </li>
            <li className="nav-item">
              <span className="nav-link js-scroll-trigger" >
                Phone No
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link js-scroll-trigger">
                Email
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link js-scroll-trigger">
                Location
              </span>
            </li>

            <li className="nav-item">
              <h3 className="nav-link js-scroll-trigger">
                <u>Language</u>
              </h3>
            </li>
            <li className="nav-item">
              <span className="nav-link js-scroll-trigger">
                English
              </span>
            </li>

            <li className="nav-item">
              <h3 className="nav-link js-scroll-trigger">
                <u>Skills</u>
              </h3>
            </li>
            <li className="nav-item">
              {/* <span className="nav-link js-scroll-trigger">
                drawing
              </span> */}
            </li>

            <li className="nav-item">
              <h3 className="nav-link js-scroll-trigger" to="/skills">
                <u> Hobby </u>
              </h3>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
