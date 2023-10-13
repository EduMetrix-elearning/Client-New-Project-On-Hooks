import React from 'react'
import "./EduHomeNavbar.css"
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';

function EduHomeNavbar() {
  return (
    <div className="navbar-whole-div">
    <Navbar className="frontend-navbar" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="" style={{ fontSize: "30px" }}>
          <Link to="/homepage" style={{ textDecoration: "none" }}>
            {/* <img src={EdumetrixImage} className="edu-image" alt="" />{" "} */}
            <span style={{ color: "#636567" }}>Edu</span>
            <span style={{ color: "#164e64" }}>M</span>
            <span style={{ color: "#636567" }}>etrix</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-4 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Nav className="navbar-items">
            <Nav.Link className="all-items">
              <Link
                to="/Courses"
                style={{ textDecoration: "none", color: "#707071" }}
              >
                Courses
              </Link>
            </Nav.Link>

            <Nav.Link className="all-items" >
             Team
            </Nav.Link>


            {/* <Nav.Link className="all-items" onClick={handleinternship}>
              Internship
            </Nav.Link> */}
            {/* <Nav.Link className="all-items" onClick={handleCarrier}>
              Career
            </Nav.Link> */}
            <Nav.Link className="all-items" >
              <Link
                //   to="/agentssignup"
                style={{ textDecoration: "none", color: "#707071" }}
              >
                Affiliate Program
              </Link>
            </Nav.Link>
            <Nav.Link className="all-items">
              <Link
                to="/Hrform"
                style={{ textDecoration: "none", color: "#707071" }}
              >
                Corporates
              </Link>
            </Nav.Link>
            {/* <Nav.Link className="all-items">
              <Link
                to="/"
                style={{ textDecoration: "none", color: "#707071" }}
              >
                Resume Builder
              </Link>
            </Nav.Link> */}
            <Nav.Link className="all-items" href="#">
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "#707071" }}
              >
                Student
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default EduHomeNavbar