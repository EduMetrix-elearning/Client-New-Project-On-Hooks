import React, { useState } from "react";
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
// import dayjs from "dayjs";
// import { AppPagination } from "./AppPagination";

export const HiringStatus = ({ data }) => {
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
              <TableCell>Interest Response</TableCell>
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
                    <option>interested</option>
                    <option>Not interested</option>
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
