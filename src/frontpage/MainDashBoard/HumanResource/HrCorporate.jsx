import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import { confirmAlert } from "react-confirm-alert";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import HumanResource from "./HumanResource";
import HrDates from "./HrDates";
import CorporateModel from "./CorporateModal";
import { useNavigate } from "react-router-dom";
const services = require("../../../services/pages/agentRoute");

const HrCorporate = () => {
  //--Protecting Router-starts---///
  const navigate = useNavigate();
  const [authenticateUser, setAuthenticateUser] = useState(false);
  const position1 = "Human Resource";
  const position2 = "Human Resource Intern";
  const EmployeId = localStorage.getItem("employeeid");
  const EmployeeProfile = localStorage.getItem("employeeProfile");

  useEffect(() => {
    if (!EmployeId) {
      return navigate("/maindashboard");
    }
    if (EmployeId) {
      if (EmployeeProfile === position1 || EmployeeProfile === position2) {
        return setAuthenticateUser(true);
      } else {
        setAuthenticateUser(false);
        alert("Invalid login credentials, Please try to login again");
        return navigate("/maindashboard");
      }
    }
  }, []);
  //--Protecting Router ends----///
  const [careerdetails, setCareerDetails] = useState([]);

  const [corporateId, setCorporateId] = useState();
  const [comments, setComments] = useState();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    try {
      const Corporatedata = async () => {
        const result = await services.getCollaborators();
        setCareerDetails(result.data.reverse());
      };
      Corporatedata();
    } catch (error) {
      console.log(error);
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
        await services.updateCorporateStatus(status, id);
      };
      updateStatus();
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const handleSortStatus = (e) => {
    try {
      const status =
        e.target.value !== "All" ? { status: e.target.value } : null;

      const Corporatedata = async (obj) => {
        const result = await services.getCollaborators(obj);
        setCareerDetails(result.data.reverse());
      };
      Corporatedata(status);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {authenticateUser && (
        <>
          <HumanResource />
          {open && (
            <CorporateModel
              setOpen={setOpen}
              open={open}
              handleClose={handleClose}
              id={corporateId}
              notes={comments}
            />
          )}
          <div style={{ width: "100%", marginTop: "1%" }}>
            <div>
              <HrDates sortStatus={handleSortStatus} />
              <section className="main">
                <div className="profile-card">
                  <div>Total</div>
                  <h3 style={{ marginLeft: "auto" }}>{careerdetails.length}</h3>
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
                    careerdetails.map((corporate, index) => (
                      <TableRow key={corporate.collaborator_id}>
                        <TableCell>{index + 1}</TableCell>
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
                            onChange={(e) =>
                              submit(e, corporate.collaborator_id)
                            }
                          >
                            <option value="">{corporate.status}</option>
                            <option value="Yet To Call">Yet To Call</option>
                            <option value="Waiting To Call">
                              Waiting To Call
                            </option>
                            <option value="No Response">No Response</option>
                            <option value="Decision Pending">
                              Decision Pending
                            </option>
                            <option value="Not Interested">
                              Not Interested
                            </option>
                            <option value="Interested">Interested </option>
                            <option value="Waiting to Join">
                              Waiting to Join
                            </option>
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
                              setComments(corporate.comments);
                              setCorporateId(corporate.collaborator_id);
                              setOpen(true);
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
      )}
    </>
  );
};

export default HrCorporate;
