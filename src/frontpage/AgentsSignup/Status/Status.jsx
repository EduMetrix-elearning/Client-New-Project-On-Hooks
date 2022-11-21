import React from 'react'
import { Container, Nav, Navbar, Form, Button,Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AgentNavbar } from '../Navbar/Navbar';
import "./Status.scss"

export const Status = () => {
  return (
    <div className='status-main-div'>
      <AgentNavbar/>
        

      <div className='status-inner-div'>
        <div className='status-table-div'>
          <h1 style={{marginBottom:"30px",color:"#193942",textAlign:"center",marginTop:"20px"}}> Student Status</h1> 
          <Table  responsive className='student-table'>
      <thead>
        <tr>
          <th>NO.</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>PHONE</th>
          <th>LOCATION</th>
          <th>PAST COURSE</th>
          <th>STATUS</th>
          <th>SUBMISSION DATE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Shafan</td>
          <td>Shafan@gmail.com</td>
          <td>9459088234</td>
          <td>Bangalore</td>
          <td>Full stacak course</td>
          <td>Active</td>
          <td>12/09/2022</td>
        </tr>
        <tr>
        <td>2</td>
          <td>Abhishek</td>
          <td>abhishek@gmail.com</td>
          <td>9342567762</td>
          <td>Lukhnow</td>
          <td>Backend Course</td>
          <td>Active</td>
          <td>12/09/2022</td>
        </tr>
        <tr>
        <td>3</td>
          <td>Sruti</td>
          <td>sruti@gmail.com</td>
          <td>9498338234</td>
          <td>Delhi</td>
          <td>Frontend course</td>
          <td>Inactive</td>
          <td>12/09/2022</td>
        </tr>
      </tbody>
    </Table>          
        </div>
      </div>
    </div>
  )
}
