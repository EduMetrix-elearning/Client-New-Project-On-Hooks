import { React, useState, useEffect } from "react";
import { AgentNavbar } from "../AgentNavbar/AgentNavbar";
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
import "./Status.scss";

const services = require("../../services/pages/agentRoute");

export const Status = () => {
  const [referrals, setReferrals] = useState("");

  useEffect(() => {
    services.agentReferrals((error, result) => {
      if (result && !!result.length) setReferrals(result.reverse());
    });
  }, []);

  return (
   
    <div className="status-main-div">
      <AgentNavbar />
      <TableContainer component={Paper}>
        <Table sx={{ width: "100%" }} aria-label="simple table">
          <TableHead
            sx={{ backgroundColor: "#f5f5ef", border: 1 }}
            align="center"
          >
            <TableRow>
             
              <TableCell>No.</TableCell>
              <TableCell>NAME</TableCell>
              <TableCell>EMAIL</TableCell>
              <TableCell>PHONE</TableCell>
              <TableCell>LOCATION</TableCell>
              <TableCell>PAST COURSE</TableCell>
              <TableCell>YEAR OF PASSING</TableCell>
              <TableCell>STATUS</TableCell>
              <TableCell>SUBMISSION DATE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody align="center">
            {referrals &&
              referrals.map((detail, index) => (
                <TableRow
                  className="tabelrow"
                  key={index}
                  sx={{ border: 1, borderColor: "#f5f5ef" }}
                >
                  <TableCell component="th" scope="row">
                    {detail.student_id}
                  </TableCell>
                  <TableCell>{detail.name}</TableCell>
                  <TableCell>{detail.email}</TableCell>
                  <TableCell>{detail.contact_number}</TableCell>
                  <TableCell>{detail.place}</TableCell>
                  <TableCell>{detail.course}</TableCell>
                  <TableCell>{detail.year_of_passing}</TableCell>
                  <TableCell>{detail.status}</TableCell>

                  <TableCell>
                    {new Date(detail.created_date).toLocaleString("lookup")}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
