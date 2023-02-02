import React, { useEffect, useState } from "react";
import HrDates from "./HrDates";
import HumanResource from "./HumanResource";
import "./HrCareer.css";
import { confirmAlert } from "react-confirm-alert";
import HrCareerModal from "./HrCareerModal";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const services = require("../../../services/pages/agentRoute");

const HrCareer = () => {
  const [hiringdetails, setHiringDetails] = useState([]);
  const [comments, setComments] = useState();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    try {
      const HandleHiringDetails = async () => {
        const result = await services.getEmployee();
        setHiringDetails(result.data.reverse());
      };
      HandleHiringDetails();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const [employeeId, setEmployeeId] = useState();

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
        await services.updateEmployeeStatus(status, id);
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

      const HandleHiringDetails = async (obj) => {
        const result = await services.getEmployee(obj);
        setHiringDetails(result.data.reverse());
      };
      HandleHiringDetails(status);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <HumanResource />
      {open && (
        <HrCareerModal
          setOpen={setOpen}
          open={open}
          handleClose={handleClose}
          id={employeeId}
          // setOpenModal={setOpenModal}
          notes={comments}
        />
      )}
      <div style={{ width: "100%", marginTop: "1%" }}>
        <div>
          <HrDates sortStatus={handleSortStatus} />
          <section className="main">
            <div className="profile-card">
              <div>Total</div>
              <h3 style={{ marginLeft: "auto" }}>{hiringdetails.length}</h3>
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
        <div>
          <TableContainer component={Paper}>
            <Table sx={{ width: "100%" }} aria-label="simple table">
              <TableHead
                sx={{
                  backgroundColor: "#f5f5ef",
                }}
              >
                <TableRow sx={{ width: "100%" }}>
                  <TableCell>No.</TableCell>
                  <TableCell>NAME</TableCell>
                  <TableCell>EMAIL</TableCell>
                  <TableCell>PHONE</TableCell>
                  <TableCell>JOB DOMAIN</TableCell>
                  <TableCell>SELF INTRO</TableCell>
                  <TableCell>CV</TableCell>
                  <TableCell>STATUS</TableCell>
                  <TableCell>SUBMISSION DATE</TableCell>
                  <TableCell>Message</TableCell>
                </TableRow>
              </TableHead>
              <TableBody align="center">
                {hiringdetails &&
                  hiringdetails.map((employee) => (
                    <TableRow
                      className="tabelrow"
                      key={employee.employee_id}
                      sx={{ border: 1, borderColor: "#f5f5ef" }}
                    >
                      <TableCell>{employee.employee_id}</TableCell>
                      <TableCell>{employee.name}</TableCell>
                      <TableCell>{employee.email}</TableCell>
                      <TableCell>{employee.contact_number}</TableCell>
                      <TableCell>{employee.job}</TableCell>
                      <TableCell>{employee.message}</TableCell>
                      <TableCell>{employee.image}</TableCell>

                      <TableCell>
                        <select
                          className="student-status"
                          onChange={(e) => submit(e, employee.employee_id)}
                        >
                          <option value="">{employee.status}</option>
                          <option value="Yet to call">yet to call</option>
                          <option value="Waiting To Call">
                            Waiting To Call
                          </option>
                          <option value="No Response">No Response</option>
                          <option value="Decision Pending">
                            Decision Pending
                          </option>
                          <option value="Not Interested">Not Interested</option>
                          <option value="Interested">Interested </option>
                          <option value="Waiting to Join">
                            Waiting to Join
                          </option>
                          <option value="Admission">Admission</option>
                        </select>
                      </TableCell>

                      <TableCell>
                        {new Date(employee.created_date).toLocaleString(
                          "lookup"
                        )}
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
                            setComments(employee.comments);
                            setEmployeeId(employee.employee_id);
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
      </div>
    </>
  );
};

export default HrCareer;
