import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import HumanResource from "./HumanResource";
import HrDates from "./HrDates";
import CorporateModel from "./CorporateModal";
const services = require("../../../services/pages/agentRoute");

const HrCorporate = () => {
  const [careerdetails, setCareerDetails] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [corporateId, setCorporateId] = useState();

  const Corporatedata = async () => {
    const result = await services.getCollaborators();
    // console.log(result);
    setCareerDetails(result.data.reverse());
  };

  useEffect(() => {
    Corporatedata();
  }, []);
  return (
    <>
      <HumanResource />
      {openModal && (
        <CorporateModel id={corporateId} setOpenModal={setOpenModal} />
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
        <TableContainer
          component={Paper}
          className="website-dashboard-status-check"
        >
          <Table
            sx={{ width: "100%", overflowX: "auto" }}
            aria-label="simple table"
          >
            <TableHead sx={{ backgroundColor: "#f5f5ef" }} align="center">
              <TableRow>
                <TableCell>No.</TableCell>
                <TableCell>Name</TableCell>

                <TableCell>EMAIL</TableCell>
                <TableCell>PHONE</TableCell>
                <TableCell>LOCATION</TableCell>
                <TableCell>HIRING DOMAIN</TableCell>
                <TableCell>SKILLS</TableCell>
                <TableCell>EXPERIENCE</TableCell>
                <TableCell>PACKAGE(LPA)</TableCell>
                <TableCell>NAME OF COMPANY</TableCell>
                <TableCell>WEBSITE</TableCell>
                <TableCell>STATUS</TableCell>
                <TableCell>SUBMISSION DATE</TableCell>
                <TableCell>message</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {careerdetails &&
                careerdetails.map((corporate) => (
                  <TableRow key={corporate.collaborator_id}>
                    <TableCell>{corporate.collaborator_id}</TableCell>
                    <TableCell>{corporate.name}</TableCell>
                    <TableCell>{corporate.email}</TableCell>
                    <TableCell>{corporate.contact_number}</TableCell>
                    <TableCell>{corporate.location}</TableCell>
                    <TableCell>{corporate.requirement}</TableCell>
                    <TableCell>{corporate.skill}</TableCell>
                    <TableCell>{corporate.experience}</TableCell>
                    <TableCell>{corporate.salary}</TableCell>
                    <TableCell>{corporate.company}</TableCell>
                    <TableCell>{corporate.website}</TableCell>
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
                    <TableCell>{corporate.created_date}</TableCell>
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
                          setCorporateId(corporate.collaborator_id);
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

export default HrCorporate;
