import React, { useState, useEffect } from "react";
import MarketingNavbar from "./MarketingNavbar";
import HrDates from "../HumanResource/HrDates";
import HrTable from "../HumanResource/HrTable";
import { confirmAlert } from "react-confirm-alert";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "react-confirm-alert/src/react-confirm-alert.css";
import "./AgentStudents.css";
import AgentModel from "./AgentModel";
import { DashBoardInputs } from "../../../WebsiteDashboard/Inputs";

const services = require("../../../services/pages/agentRoute");

const AgentStudents = () => {
  const [referrals, setReferrals] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [studentid, setStudentId] = useState();
  const [comments, setComments] = useState();

  useEffect(() => {
    try {
      const getReferrals = async () => {
        const students = await services.agentAllReferrals();
        setReferrals(students.reverse());
      };
      getReferrals();
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(referrals);

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
    <>
      <MarketingNavbar />
      {openModal && (
        <AgentModel
          id={studentid}
          setOpenModal={setOpenModal}
          notes={comments}
        />
      )}
      <div style={{ width: "100%", marginTop: "1%" }}>
        <div>
          <HrDates />
          <section className="main">
            <div className="profile-card">
              <div>Total</div>
              <h3 style={{ marginLeft: "auto" }}>67</h3>
            </div>

            <div className="profile-card2">
              <div>Verified</div>
              <h3 style={{ marginLeft: "auto" }}>67</h3>
            </div>
            <div className="profile-card3">
              Not Verified
              <h3 style={{ marginLeft: "auto" }}>67</h3>
            </div>
            <div className="profile-card4">
              Fake
              <h3 style={{ marginLeft: "auto" }}>67</h3>
            </div>
          </section>
        </div>
      </div>
      <div>
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
                <TableCell>Message</TableCell>
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
                      {index + 1}
                    </TableCell>
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
                        <option value="Waiting To Call">Waiting To Call</option>
                        <option value="No Response">No Response</option>
                        <option value="Decision Pending">
                          Decision Pending
                        </option>
                        <option value="Not Interested">Not Interested</option>
                        <option value="Interested">Interested </option>
                        <option value="Waiting to Join">Waiting to Join</option>
                        <option value="Admission">Admission</option>
                      </select>
                    </TableCell>

                    <TableCell>
                      {new Date(detail.created_date).toLocaleString("lookup")}
                    </TableCell>
                    <TableCell>
                      <button
                        style={{
                          backgroundColor: "skyblue",
                          color: "white",
                          width: "100%",
                          height: "40px",
                          border: "none",
                          borderRadius: "5px",
                        }}
                        onClick={() => {
                          setComments(detail.comments);
                          setStudentId(detail.student_id);
                          setOpenModal(true);
                        }}
                      >
                        Update
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default AgentStudents;
