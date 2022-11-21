import React from 'react'
import { Container, Nav, Navbar, Form, Button, Table, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./CareerData.scss"
import { AgentNavbar } from '../Navbar/Navbar';

export const CareerData = () => {
    return (
        <div className='careerdata-main-div'>
            <AgentNavbar />
            <div className='careerdata-inner-div'>
                <div className='careerdata-table-div'>
                    <h1 style={{ marginBottom: "30px", color: "#193942", textAlign: "center", marginTop: "20px" }}>Career Data</h1>
                    <Table bordered responsive className='student-table'>
                        <thead>
                            <tr>
                                <th>NO.</th>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>PHONE</th>
                                <th>COURSE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Shafan</td>
                                <td>Shafan@gmail.com</td>
                                <td>9459088234</td>
                                <td>Full stacak course</td>
                                
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Abhishek</td>
                                <td>abhishek@gmail.com</td>
                                <td>9342567762</td>
                                <td>Backend Course</td>
                                
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Sruti</td>
                                <td>sruti@gmail.com</td>
                                <td>9498338234</td>
                                <td>Frontend course</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}
