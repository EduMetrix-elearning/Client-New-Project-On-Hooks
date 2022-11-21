import React, { useState } from 'react'
import { Container, Nav, Navbar, Form, Button, Table, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AgentNavbar } from '../AgentNavbar/AgentNavbar';
import "./InternshipData.scss"
import {internshipdata} from "./intenship.js"


export const InternshipData = () => {
  const [Searchname,setSearchname]=useState("")
  
  return (
    <div className='internshipdata-main-div'>
      <AgentNavbar />
      <div className='internshipdata-inner-div'>
        <div className='internshipdata-table-div'>
          <h1 style={{ marginBottom: "30px", color: "#193942", textAlign: "center", marginTop: "20px" }}>Internship Data</h1>
          <div className='filtering-items'>
            <div>

              <label>Name :</label>
              <input type="text" onChange={(e)=>setSearchname(e.target.value)} placeholder="Search Name" />
            </div>
            <div>

              <label>Date :</label>
              <input type="text" placeholder="Search Date" />
            </div>
            <div>

              <label>Status :</label>
              <input type="text" placeholder="Search Status" />
            </div>
          </div>
          <Table bordered responsive className='student-table'>
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
              {internshipdata.filter((e)=>{
                return Searchname.toLowerCase() === "" ? e : e.name.toLowerCase().includes(Searchname)
              }).map((e)=>(
                  
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.phone}</td>
                <td>{e.email}</td>
                <td>{e.place}</td>
                <td>{e.gender}</td>
                <td>{e.employe_status}</td>
                <td>{e.course}</td>
                <td>{e.qualification}</td>
                <td>{e.year_of_qualification}</td>
                <td>{e.college}</td>
              </tr>
              ))}
              
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  )
}
