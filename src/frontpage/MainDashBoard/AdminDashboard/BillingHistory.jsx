import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import AdminDashboard from "./AdminDashboard";
import * as services from "../../../services/pages/agentRoute";

export default function BillingHistory() {
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
    <>
      <AdminDashboard />
      {/* <Paper sx={{ width: '100%', overflow: 'hidden' }}> */}
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
              <TableCell>No.</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Amount paid</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Payment Mode</TableCell>
              <TableCell>Plan</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Submission date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {billingData.map((bill) => (
              <TableRow key={bill.student_id}>
                <TableCell>{bill.student_id}</TableCell>
                <TableCell>{bill.name}</TableCell>
                <TableCell>{bill.email}</TableCell>
                <TableCell>{bill.address}</TableCell>
                <TableCell>{bill.contact_number}</TableCell>
                <TableCell>{bill.amount_paid}</TableCell>
                <TableCell>{bill.payment_mode}</TableCell>
                <TableCell>{bill.plan}</TableCell>
                <TableCell>{bill.status}</TableCell>
                <TableCell>{bill.created_date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
