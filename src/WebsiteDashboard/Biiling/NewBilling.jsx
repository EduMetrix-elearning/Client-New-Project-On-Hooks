import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { DashBoardDetails } from "../Details";
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

import * as services from "../../services/pages/agentRoute";

export const NewBilling = () => {
  const [billingData, setBillingData] = useState([]);

  useEffect(() => {
    try {
      const getBills = async () => {
        const bills = await services.getStudentBill();
        console.log(bills);

        setBillingData(bills);
      };
      getBills();
    } catch (error) {
      alert(error.response.data.message);
    }
  }, []);
  return (
    <div>
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
              {/* <TableCell padding="checkbox"></TableCell> */}
              <TableCell>Id</TableCell>
              <TableCell>Enquired On</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>E-Mail</TableCell>
              <TableCell>Course</TableCell>
              <TableCell>Call Status</TableCell>
              <TableCell>Intrest Response</TableCell>
            </TableRow>
          </TableHead>
          {billingData.map((bill) => (
            <TableRow key={bill.student_id}>
              <TableCell>{bill.student_id}</TableCell>
              <TableCell>Enquired On</TableCell>
              <TableCell>{bill.name}</TableCell>
              <TableCell>{bill.email}</TableCell>
              <TableCell>Course</TableCell>
              <TableCell>{bill.status}</TableCell>
              <TableCell>Intrest Response</TableCell>
            </TableRow>
          ))}
          {/* <TableBody align="center">
            {billingData.map((row, index) => (
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
          </TableBody> */}
        </Table>
      </TableContainer>
    </div>
  );
};
