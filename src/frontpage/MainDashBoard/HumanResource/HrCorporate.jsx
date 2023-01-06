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
const services = require("../../../services/pages/agentRoute");

const HrCorporate = () => {
  const [careerdetails, setCareerDetails] = useState([]);

  const Corporatedata = async () => {
    const result = await services.getCollaborators();
    // console.log(result);
    setCareerDetails(result.data);
  };

  useEffect(() => {
    Corporatedata();
  }, []);
  return (
    <>
      <HumanResource />
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
        {/* <table style={{ overflowX: "auto" }}>
          <thead>
            <tr>
              <th>No.</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>PHONE</th>
              <th>LOCATION</th>
              <th>HIRING DOMAIN</th>
              <th>SKILLS</th>
              <th>EXPERIENCE</th>
              <th>PACKAGE(LPA)</th>
              <th>NAME OF COMPANY</th>
              <th>WEBSITE</th>
              <th>MESSAGE</th>
              <th>STATUS</th>
              <th>SUBMISSION DATE</th>
            </tr>
          </thead>
          <tbody>
            {careerdetails.map((corporate) => {
              return (
                <tr key={corporate.collaborator_id}>
                  <td>{corporate.collaborator_id}</td>
                  <td>{corporate.name}</td>
                  <td>{corporate.email}</td>
                  <td>{corporate.contact_number}</td>
                  <td>{corporate.location}</td>
                  <td>{corporate.requirement}</td>
                  <td>{corporate.skill}</td>
                  <td>{corporate.experience}</td>
                  <td>{corporate.salary}</td>
                  <td>{corporate.company}</td>
                  <td>{corporate.website}</td>
                  <td>{corporate.message}</td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>{corporate.created_date}</td>
                </tr>
              );
            })}
          </tbody>
        </table> */}
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
                {/* <TableCell padding="checkbox"></TableCell> */}
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
                    <TableCell>{corporate.message}</TableCell>
                    <TableCell>{corporate.created_date}</TableCell>
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
