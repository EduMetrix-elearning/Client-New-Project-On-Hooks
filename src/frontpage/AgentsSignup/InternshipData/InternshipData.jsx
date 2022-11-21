import React from 'react'
import { Container, Nav, Navbar, Form, Button, Table, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./InternshipData.scss"
import { AgentNavbar } from '../Navbar/Navbar';

export const InternshipData = () => {
  return (
    <div className='internshipdata-main-div'>
      <AgentNavbar/>
      <div className='internshipdata-inner-div'>
        <div className='internshipdata-table-div'>
          <h1 style={{marginBottom:"30px",color:"#193942",textAlign:"center",marginTop:"20px"}}>Internship Data</h1> 
          <Table  bordered responsive className='student-table'>
      <thead>
        <tr>
          <th>NO.</th>
          <th>NAME</th>
          <th>PHONE</th>
          <th>EMAIL</th>
          <th>PLACE</th>
          <th>GENDER</th>
          <th>EMPLOYEE STATUS</th>
          <th>SELECT COURSE</th>
          <th>QUALIFICATION</th>
          <th>YEAR OF GRADUATION</th>
          <th>COLLEGE NAME</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Shafan</td>
          <td>9459088234</td>
          <td>Shafan@gmail.com</td>
          <td>Bangalore</td>
          <td>Male</td>
          <td>Employe</td>
          <td>Full Stack course</td>
          <td>B.Tech</td>
          <td>2016</td>
          <td>Fakir Mohan University</td>
        </tr>
        <tr>
        <td>2</td>
          <td>Abhishek</td>
          <td>9342567762</td>
          <td>abhishek@gmail.com</td>
          <td>Lukhnow</td>
          <td>Male</td>
          <td>Employe</td>
          <td>Backend Course</td>
          <td>Bca</td>
          <td>2015</td>
          <td>IPU University</td>
        </tr>
        <tr>
        <td>3</td>
          <td>Sruti</td>
          <td>9498338234</td>
          <td>sruti@gmail.com</td>
          <td>Delhi</td>
          <td>Male</td>
          <td>Fresher</td>
          <td>Frontend course</td>
          <td>Bsc</td>
          <td>2017</td>
          <td>Delhi University</td>
        </tr>
      </tbody>
    </Table>          
        </div>
      </div>
    </div>
  )
}
