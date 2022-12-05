import React, { useState } from 'react'
import { Container, Nav, Navbar, Form, Button, Table, Accordion, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom'





export const AgentNavbar = () => {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (

    <div>
      <Navbar expand="lg" style={{ padding: "15px", backgroundColor: "#193942" }}>
        <Container fluid>
          <h5><Link to="/agents-dashboard" style={{ color: "white", textDecoration: "none", marginLeft:"20px" }}>AgentProfile</Link></h5>
          <Navbar.Toggle aria-controls="navbarScroll" style={{ color: "white", backgroundColor: "white" }} />
          <Navbar.Collapse id="navbarScroll" >
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <h5  ><Link to="/student-details" style={{ color: "white", textDecoration: "none" ,marginLeft:"20px"}}>StudentDetails</Link></h5>
              <h5 style={{ color: "white" }}><Link to="/status" style={{ color: "white", textDecoration: "none",marginLeft:"20px" }}>Status</Link> </h5>


            </Nav>
            <Nav>
              {/* <Navbar.Brand style={{ color: "white" }}><Link to="/internship-data" style={{ color: "white", textDecoration: "none" }}>Internship</Link> </Navbar.Brand>
              <Navbar.Brand style={{ color: "white" }}><Link to="/career-data" style={{ color: "white", textDecoration: "none" }}>Carrer</Link> </Navbar.Brand> */}
              <Link to="/agentslogin">
                <button style={{ padding: "10px 20px" }}>Logout</button>
              </Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>





      {/* <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas> */}
    </div>
  );
}

