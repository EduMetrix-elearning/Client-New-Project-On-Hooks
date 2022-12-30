import React from "react";
import "./StudentStatusShow.scss";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { DashBoardInputs } from "../Inputs";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import AodIcon from "@mui/icons-material/Aod";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CircleCheckedFilled from "@mui/icons-material/CheckCircle";
import CircleUnchecked from "@mui/icons-material/RadioButtonUnchecked";
import { DashBoardDetails } from "../Details";
import axios from "axios";
import { useParams } from "react-router";

import * as services from "../../services/pages/agentRoute";

export const StudentStatusShow = (props) => {
  const [value, setValues] = useState("1");
  const handleChange = (e, val) => {
    setValues(val);
  };
  const [students, setStudents] = useState([]);
  const [agent, setAgent] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    try {
      const getAgent = async (id) => {
        const agent = await services.getAgent(id);
        setAgent(agent);
      };
      const getStudents = async (id) => {
        const students = await services.getStudentByAgent(id);
        setStudents(students);
      };
      getStudents(id);
      getAgent(id);
    } catch (error) {
      alert(error.response.data.message);
    }
  }, []);
  return (
    <>
      <div className="student-agent-full-details-show">
        <div className="agent-full-details">
          <div className="agent-picture">
            <div className="upper-box">
              <div className="image-box">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwQQTS4NPqnCGbJPd4x7O_YJNOJ5gH6KkejH3nhVfIhxwwJPHEotjPs0VCpGg-UcybvxM&usqp=CAU"
                  alt=""
                  height="150px"
                  width="150px"
                />
              </div>
            </div>
            <div className="lower-box">
              <h3>{agent.agent_name}</h3>
              <p>{agent.agent_email}</p>
              <p>{agent.agent_phone}</p>
            </div>
          </div>
        </div>

        <div className="all-student-details">
          <DashBoardInputs />
          <DashBoardDetails />
          <TableContainer
            component={Paper}
            className="website-dashboard-status-check"
          >
            <Table sx={{ width: "100%" }} aria-label="simple table">
              <TableHead
                sx={{ backgroundColor: "#f5f5ef", border: 1 }}
                align="center"
              >
                <TableRow>
                  <TableCell padding="checkbox"></TableCell>
                  <TableCell>No.</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Past Course</TableCell>
                  <TableCell>Place</TableCell>
                  <TableCell>Call Status</TableCell>
                  <TableCell>Call Response</TableCell>
                </TableRow>
              </TableHead>
              <TableBody align="center">
                {students.map((student, index) => (
                  <TableRow key={student.student_id}>
                    <TableCell padding="checkbox"></TableCell>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.contact_number}</TableCell>
                    <TableCell>{student.course}</TableCell>
                    <TableCell>{student.place}</TableCell>
                    <TableCell>{student.status}</TableCell>
                    <TableCell>Call Response</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
};
