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

import * as services from "../services/pages/agentRoute";
import { async } from "./../services/pages/agentRoute";

export const DashBoardStatus = ({ data }) => {
  const [referrals, setReferrals] = useState([]);

  useEffect(() => {
    try {
      const getReferrals = async () => {
        const referrals = await services.agentAllReferrals();
        const referral = referrals.reverse();
        setReferrals(referral);
      };
      getReferrals();
    } catch (error) {
      alert(error.response.data.message);
    }
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

    try {
      const updateStatus = async () => {
        await services.updateReferralStatus(status, id);
      };
      updateStatus();
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: "100%" }} aria-label="simple table">
        <TableHead
          sx={{ backgroundColor: "#f5f5ef", border: 1 }}
          align="center"
        >
          <TableRow>
            {/* <TableCell padding="checkbox"></TableCell> */}
            <TableCell>No.</TableCell>
            <TableCell>Student Id</TableCell>
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
                <TableCell>{index + 1}</TableCell>
                <TableCell>{detail.student_id}</TableCell>
                <TableCell>{detail.name}</TableCell>
                <TableCell>{detail.email}</TableCell>
                <TableCell>{detail.contact_number}</TableCell>
                <TableCell>{detail.place}</TableCell>
                <TableCell>{detail.course}</TableCell>
                <TableCell>{detail.year_of_passing}</TableCell>
                <TableCell>
                  <select
                    className="student-status"
                    onChange={(e) => submit(e, detail.student_id)}
                  >
                    <option value="">{detail.status}</option>
                    <option value="No Response">No Response</option>
                    <option value="Not Interested">Not Interested</option>
                    <option value="Interested">Interested </option>
                    <option value="Waiting to Join">Waiting to Join</option>
                    <option value="Admission">Admission</option>
                  </select>
                </TableCell>
                <TableCell>
                  {new Date(detail.created_date).toLocaleString("lookup")}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
