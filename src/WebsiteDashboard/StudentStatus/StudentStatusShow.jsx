import React from 'react'
import "./StudentStatusShow.scss";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import { DashBoardNavbar } from '../Navbar';
import { DashBoardHeader } from '../Header';
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import {
    Box,
    Tab,} from "@mui/material";
import { useState } from "react";
import { DashBoardStatus } from '../Status';
import { DashBoardInputs } from '../Inputs';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import AodIcon from '@mui/icons-material/Aod';
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CircleCheckedFilled from '@mui/icons-material/CheckCircle';
import CircleUnchecked from '@mui/icons-material/RadioButtonUnchecked';
import { DashBoardDetails } from '../Details';

export const StudentStatusShow = () => {
    const [value, setValues] = useState("1")
    const handleChange = (e, val) => {
      setValues(val)
    }
    const [data,setData]=useState([])
    return (
        <>
        {/* <DashBoardHeader/> */}
        {/* <DashBoardStatus/> */}
        
        <div className="student-agent-full-details-show">
            <div className='agent-full-details'>
                <div className='agent-picture'>
                    <div className="upper-box">
                        <div className="image-box">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwQQTS4NPqnCGbJPd4x7O_YJNOJ5gH6KkejH3nhVfIhxwwJPHEotjPs0VCpGg-UcybvxM&usqp=CAU" alt="" height="150px" width="150px" />
                        </div>
                    </div>
                    <div className="lower-box">
                        <h3>Abhishek Singh</h3>
                        <p>Abhishek@gmail.com</p>
                        <p>Phone : 909090455</p>
                    </div>
                </div>
            </div>

            <div className='all-student-details'>
                <DashBoardInputs/>
                <DashBoardDetails/>
                <TableContainer component={Paper} className="website-dashboard-status-check">
      <Table sx={{ width: "100%" }} aria-label="simple table">
        <TableHead
          sx={{ backgroundColor: "#f5f5ef", border: 1 }}
          align="center"
        >
          <TableRow>
            <TableCell padding="checkbox"></TableCell>
            <TableCell>Id</TableCell>
            <TableCell>Enquired On</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Message</TableCell>
            <TableCell>Course</TableCell>
            <TableCell>Call Status</TableCell>
            <TableCell>Intrest Response</TableCell>
          </TableRow>
        </TableHead>
        <TableBody align="center">
          {data.map((row, index) => (
            <TableRow
              className="tabelrow"
              key={index}
              sx={{ border: 1, borderColor: "#f5f5ef" }}
            >
              <TableCell padding="checkbox">
                <Checkbox
                  style={{ color: "green" }}
                  icon={<CircleUnchecked />}
                  checkedIcon={<CircleCheckedFilled />}
                />
               
              </TableCell>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>{row.submission_date} </TableCell>
              <TableCell >
                <span style={{color:"blue"}}>{row.name}</span>
                <Box sx={{ placeItems: "center" }} className="mobile">
                  <AodIcon sx={{ fontSize: "20px" }} />
                  <span style={{ marginRight: "20px" }}>{row.phone}</span>
                  <MailOutlineIcon sx={{ fontSize: "20px" }} />
                  <span>{row.email}</span>
                </Box>
              </TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.course}</TableCell>

              <TableCell>
                <select className="table-status">
                  <option>Status</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </TableCell>

              <TableCell>
                <select className="table-status">
                  <option>Status</option>
                  <option>intrested</option>
                  <option>Not intrested</option>
                </select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </div>
        </div>
        </>
    )
}
