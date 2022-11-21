import React from 'react'
import { Container, Nav, Navbar, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AgentNavbar } from '../Navbar/Navbar';
import "./StudentDetails.scss"

export const StudentDetails = () => {
  return (
    <div className='student-details'>
      <AgentNavbar />


      <div className='student-profile-main-div'>
        <div className='student-profile-form-div'>
          <h1 style={{ marginBottom: "20px", color: "white", backgroundColor: "#193942", padding: "15px" }}>Referral Form</h1>
          <Form className="student-profile-form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label> Student Name *</Form.Label>
              <Form.Control type="text" placeholder="Enter name" style={{ marginBottom: "15px" }} />
              <Form.Label>Place *</Form.Label>
              <Form.Control type="text" placeholder="Enter place" style={{ marginBottom: "15px" }} />
              <Form.Label>Mobile Number *</Form.Label>
              <Form.Control type="number" placeholder="Enter mobile number" style={{ marginBottom: "15px" }} />
              <Form.Label>Email *</Form.Label>
              <Form.Control type="email" placeholder="Enter email" style={{ marginBottom: "15px" }} />
              <Form.Label>Past course *</Form.Label>
              <Form.Control type="text" placeholder="Enter past course" style={{ marginBottom: "15px" }} />

            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Link style={{ textDecoration: "none", color: "white" }} to="/status">
              <Button className="student-profile-form-btn" variant="primary" type="submit">
                Submit
              </Button>
            </Link>
          </Form>
        </div>
      </div>
    </div>
  )
}
