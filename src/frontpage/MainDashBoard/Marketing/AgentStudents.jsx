import React, { useState, useEffect } from "react";
import MarketingNavbar from "./MarketingNavbar";
import HrDates from "../HumanResource/HrDates";


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
import InfiniteScroll from "react-infinite-scroll-component";

const services = require("../../../services/pages/agentRoute");

const AgentStudents = () => {
  const [referrals, setReferrals] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [studentid, setStudentId] = useState();
  const [comments, setComments] = useState();
  const [pageNumber, setPageNumber] = useState(0);
  const [totalReferrals, setTotalReferrals] = useState(0);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("");
  const [interested, setIntrested] = useState(0);
  const [notIntrested, setNotIntrested] = useState(0);
  const [decision, setDecision] = useState(0);

  const [hrNames, setHrNames] = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    try {
      const getReferrals = async () => {
        const students = await services.agentAllReferrals(pageNumber + 1);
        setPageNumber(pageNumber + 1);
        setTotalReferrals(students.referralsCount.totalReferrals);
        setReferrals(students.data);
        setIntrested(students.referralsCount.interested);
        setNotIntrested(students.referralsCount.notInterested);
        setDecision(students.referralsCount.decisionPending);
      };
      getReferrals();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const fetchReferrals = () => {
    try {
      setLoading(true);
      const page = Math.ceil(totalReferrals / 10);

      if (pageNumber >= page) return setLoading(false);

      const getReferrals = async () => {
        const students = await services.agentAllReferrals(pageNumber + 1);
        setPageNumber(pageNumber + 1);
        setReferrals([...referrals, ...students.data]);
      };
      getReferrals();
    } catch (error) {
      console.log(error);
    }
  };

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

  const submitName = (e, id) => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => handleNameChange(e, id),
        },
        {
          label: "No",
          onClick: () => window.location.reload(true),
        },
      ],
    });
  };

  const handleNameChange = async (e, id) => {
    const status = { called_by: e.target.value };

    try {
      const updateStatus = async () => {
        await services.updateReferralStatus(status, id);
      };
      updateStatus();
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const handleSortStatus = (e) => {
    const status = e.target.value;

    return status !== "All" ? setStatus(status) : setStatus("");
  };

  const handleSortName = (e) => {
    const hrNames = e.target.value;

    return hrNames !== "All" ? setHrNames(hrNames) : setHrNames("");
  };

  console.log(hrNames);

  return (
    <>
      <MarketingNavbar />
      {open && (
        <AgentModel
          setOpen={setOpen}
          open={open}
          handleClose={handleClose}
          id={studentid}
          setOpenModal={setOpenModal}
          notes={comments}
        />
      )}
      <div style={{ width: "100%", marginTop: "1%" }}>
        <div>
          <HrDates sortStatus={handleSortStatus} sortNames={handleSortName} />

          <section className="main">
            <div className="profile-card">
              <div>Total</div>
              <h3 style={{ marginLeft: "auto" }}>{totalReferrals}</h3>
            </div>

            <div className="profile-card2">
              <div>Intrested</div>
              <h3 style={{ marginLeft: "auto" }}>{interested}</h3>
            </div>
            <div className="profile-card3">
              Decision Pending
              <h3 style={{ marginLeft: "auto" }}>{decision}</h3>
            </div>
            <div className="profile-card4">
              Not Intrested
              <h3 style={{ marginLeft: "auto" }}>{notIntrested}</h3>
            </div>
          </section>
        </div>
      </div>
      <div>
        <TableContainer component={Paper}>
          <InfiniteScroll
            dataLength={referrals.length}
            next={fetchReferrals}
            hasMore={loading}
            // loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
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
                  <TableCell>Called By</TableCell>
                  <TableCell>Called Date</TableCell>
                </TableRow>
              </TableHead>

              <TableBody align="center">
                {referrals &&
                  referrals
                    .filter((ref) =>
                      status !== "" ? ref.status === status : ref
                    )
                    .filter((ref) =>
                      hrNames !== "" ? ref.hrNames === hrNames : ref
                    )
                    .map((detail, index) => (
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

                        <TableCell>
                          {new Date(detail.created_date).toLocaleString(
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
                              setComments(detail.comments);
                              setStudentId(detail.student_id);
                              setOpen(true);
                            }}
                          >
                            Update
                          </button>
                        </TableCell>
                        <TableCell>
                          <select
                            className="student-status"
                            onChange={(e) => submitName(e, detail.student_id)}
                          >
                            <option value="">{detail.called_by}</option>
                            {/* <option value="">Choose Name</option> */}

                            <option value="Hr-1">Hr-1</option>
                            <option value="Hr-2">Hr-2</option>
                            <option value="Hr-3">Hr-3</option>
                            <option value="Hr-4">Hr-4</option>
                          </select>
                        </TableCell>
                      </TableRow>
                    ))}
              </TableBody>
            </Table>
          </InfiniteScroll>
        </TableContainer>
      </div>
    </>
  );
};

export default AgentStudents;
