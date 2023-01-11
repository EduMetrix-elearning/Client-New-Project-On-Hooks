import React, { useState, useEffect } from "react";
import MarketingNavbar from "./MarketingNavbar";
import HrDates from "../HumanResource/HrDates";
import HrTable from "../HumanResource/HrTable";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import "./QuickData.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import QucikdataModal from "./QuickdataModel";

const services = require("../../../services/pages/agentRoute");

const QuickData = () => {
  const [enqiryData, setEnquiryData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [updateId, setUpdateId] = useState();
  const [content, setContent] = useState(false);
  const [comments, setComments] = useState([]);
  // const [contentCourse, setContentCourse] = useState(false);
  // const [contentYear, setContentYear] = useState(false);

  const handleEnquiryData = async () => {
    const result = await services.getEnquiry();
    setEnquiryData(result.data);
  };

  useEffect(() => {
    handleEnquiryData();
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
        await services.updateStudentEnquiryStatus(status, id);
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
        <QucikdataModal
          setOpenModal={setOpenModal}
          id={updateId}
          content={content}
          notes={comments}
          // contentCourse={contentCourse}
          // contentYear={contentYear}
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
            <TableHead sx={{ backgroundColor: "#f5f5ef" }} align="center">
              <TableRow>
                <TableCell>No.</TableCell>
                <TableCell>NAME</TableCell>
                <TableCell>EMAIL</TableCell>
                <TableCell>PHONE</TableCell>
                <TableCell>STATUS</TableCell>
                <TableCell>MESSAGE</TableCell>
                <TableCell>SUBMISSION DATE</TableCell>
                <TableCell>UPDATE</TableCell>
              </TableRow>
            </TableHead>
            <TableBody align="center">
              {enqiryData &&
                enqiryData.map((enquiry) => (
                  <TableRow
                    className="tabelrow"
                    key={enquiry.enquiry_id}
                    sx={{ border: 1, borderColor: "#f5f5ef" }}
                  >
                    <TableCell component="th" scope="row">
                      {enquiry.enquiry_id}
                    </TableCell>
                    <TableCell>{enquiry.name}</TableCell>
                    <TableCell>{enquiry.email}</TableCell>

                    <TableCell>{enquiry.contact_number}</TableCell>

                    <TableCell>
                      <select
                        className="student-status"
                        onChange={(e) => submit(e, enquiry.enquiry_id)}
                      >
                        <option value="">{enquiry.status}</option>
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
                    <TableCell>{enquiry.message}</TableCell>

                    <TableCell>
                      {new Date(enquiry.created_date).toLocaleString("lookup")}
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
                          if (enquiry.location !== null) {
                            setContent(true);
                          } else {
                            setContent(false);
                          }
                          setComments(enquiry.comments);
                          setUpdateId(enquiry.enquiry_id);
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

export default QuickData;
