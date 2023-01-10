import React, { useEffect, useState } from "react";
import MarketingNavbar from "./MarketingNavbar";
import HrDates from "../HumanResource/HrDates";
import MessageModal from "../HumanResource/MessageModal";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./internsDetails";

const services = require("../../../services/pages/agentRoute");

const InternspDetails = () => {
  const [internshipDetails, setInternshipDetails] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const handleInternshipDetails = async () => {
    const result = await services.getInternship();
    console.log(result);
    setInternshipDetails(result.data);
  };

  useEffect(() => {
    handleInternshipDetails();
  }, []);
  return (
    <>
      <MarketingNavbar />
      {openModal && <MessageModal setOpenModal={setOpenModal} />}
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
                <TableCell>SELF INTRO</TableCell>
                <TableCell>CV</TableCell>
                <TableCell>STATUS</TableCell>
                <TableCell>SUBMISSION DATE</TableCell>
                <TableCell>Message</TableCell>
              </TableRow>
            </TableHead>
            <TableBody align="center">
              {internshipDetails &&
                internshipDetails.map((interns) => (
                  <TableRow
                    className="tabelrow"
                    key={interns.student_id}
                    sx={{ border: 1, borderColor: "#f5f5ef" }}
                  >
                    <TableCell component="th" scope="row">
                      {interns.student_id}
                    </TableCell>
                    <TableCell>{interns.name}</TableCell>
                    <TableCell>{interns.email}</TableCell>
                    <TableCell>{interns.contact_number}</TableCell>
                    <TableCell>{interns.place}</TableCell>
                    <TableCell>{interns.course}</TableCell>
                    <TableCell>{interns.year_of_passing}</TableCell>
                    <TableCell>{interns.about_yourself}</TableCell>
                    <TableCell>{interns.resume}</TableCell>
                    <TableCell>
                      <select
                        className="student-status"
                        // onChange={(e) => submit(e, detail.student_id)}
                      >
                        <option value="">yet to call</option>
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
                      {new Date(interns.created_date).toLocaleString("lookup")}
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
                        onClick={() => setOpenModal(true)}
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

export default InternspDetails;
