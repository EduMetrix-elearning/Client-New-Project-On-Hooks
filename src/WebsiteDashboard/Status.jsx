import React, { useState, useEffect } from "react";
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
import { Box } from "@mui/system";
import CircleCheckedFilled from "@mui/icons-material/CheckCircle";
import CircleUnchecked from "@mui/icons-material/RadioButtonUnchecked";
import "./EduMetrixDashboard.scss";
import axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import "./EduMetrixDashboard.scss";
function createData(id, EnquiredOn, name, phone, email, message, course) {
  return { id, EnquiredOn, name, phone, email, message, course };
}

const rows = [
  createData(
    1,
    "10-11-21",
    "Jayasmita",
    9880686768,
    "jasmitasahu@gmail.com",
    "hkjklj",
    "fullstack"
  ),
  createData(
    2,
    "11-11-21",
    "Ashwini",
    880686768,
    "jasmitasahu@gmail.com",
    "hkjklj",
    "fullstack"
  ),
  createData(
    3,
    "12-11-22",
    "Rachna",
    880686768,
    "jasmitasahu@gmail.com",
    "hkjklj",
    "fullstack"
  ),
  createData(
    4,
    "13-6-22",
    "Akshay",
    880686768,
    "jasmitasahu@gmail.com",
    "hkjklj",
    "fullstack"
  ),
  createData(
    5,
    "14-11-22",
    "Anoop",
    880686768,
    "jasmitasahu@gmail.com",
    "hkjklj",
    "fullstack"
  ),
];

export const DashBoardStatus = ({ data }) => {
  const [status, setStatus] = useState();
  const [referrals, setReferrals] = useState([]);
  useEffect(() => {
    const getReferrals = async () => {
      try {
        const referrals = await axios.get(
          "http://localhost:9000/agent/referrals/allstudents"
        );
        console.log(referrals.data.data);
        setReferrals(referrals.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getReferrals();
  }, []);

  const submit = (e, id) => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => handleStatusChange(e, id),
        },
        {
          label: "No",
          onClick: () => window.location.reload(true),
        },
      ],
    });
  };

  const handleStatusChange = async (e, id) => {
    const status = { status: e.target.value };
    setStatus(e.target.value);

    try {
      const result = await axios.put(
        `http://localhost:9000/agent/referrals/status/${id}`,
        status
      );
      setStatus(result.data.data.status);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
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
              <TableCell>Id</TableCell>
              <TableCell>Enquired On</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Message</TableCell>
              <TableCell>Course</TableCell>
              <TableCell>Call Status</TableCell>
              <TableCell>Intrest Response</TableCell>
            </TableRow>
            {referrals.map((referral) => (
              <TableRow key={referral.student_id}>
                <TableCell padding="checkbox"></TableCell>
                <TableCell>{referral.student_id}</TableCell>
                <TableCell>Enquired On</TableCell>
                <TableCell>{referral.name}</TableCell>
                <TableCell>{status}</TableCell>
                <TableCell>{referral.course}</TableCell>
                <TableCell>
                  <select
                    className="student-status"
                    onChange={(e) => submit(e, referral.student_id)}
                  >
                    <option value="">{referral.status}</option>
                    <option value="Completed">Completed</option>
                    <option value="no response">no response</option>
                    <option value="waiting to call">waiting to call </option>
                    <option value="not intrested">not intrested</option>
                    <option value="interest">interest</option>
                  </select>
                </TableCell>
                <TableCell>Intrest Response</TableCell>
              </TableRow>
            ))}
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
                <TableCell>
                  <span style={{ color: "blue" }}>{row.name}</span>
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
    </>
  );
};
