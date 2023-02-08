import React, { useEffect, useState } from "react";

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
import "./internsDetails";
import InternshipModel from "./InternshipModel";
import InfiniteScroll from "react-infinite-scroll-component";

const services = require("../../../services/pages/agentRoute");

const InternspDetails = () => {
  const [internshipDetails, setInternshipDetails] = useState([]);

  const [internsId, setInternsId] = useState();
  const [comments, setComments] = useState();
  const [pageNumber, setPageNumber] = useState(0);
  const [totalInterns, setTotalInterns] = useState(0);
  const [loading, setLoading] = useState(true);
  const [interested, setIntrested] = useState(0);
  const [noResponse, setNoResponse] = useState(0);
  const [decision, setDecision] = useState(0);

  const [status, setStatus] = useState("All");
  const [hrNames, setHrNames] = useState("All");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    try {
      const handleInternshipDetails = async () => {
        const result = await services.getInternship(pageNumber + 1);
        setPageNumber(pageNumber + 1);

        setInternshipDetails(result.data);
        setTotalInterns(result.studentCount.totalInterns);
        setIntrested(result.studentCount.interested);

        setDecision(result.studentCount.decisionPending);
        setNoResponse(result.studentCount.noResponse);
        console.log(result);
      };
      handleInternshipDetails();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const fetchInterns = () => {
    try {
      setLoading(true);
      const page = Math.ceil(totalInterns / 10);

      if (pageNumber >= page) return setLoading(false);

      const getInterns = async () => {
        const students = await services.getInternship(pageNumber + 1);
        setPageNumber(pageNumber + 1);
        setInternshipDetails([...internshipDetails, ...students.data]);
      };
      getInterns();
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
        await services.updateIntersStatus(status, id);
      };
      updateStatus();
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const submitInternsName = (e, id) => {
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
    const hr = { called_by: e.target.value };

    try {
      const updateStatus = async () => {
        const res = await services.updateIntersStatus(hr, id);
        if (res) return window.location.reload(true);
      };
      updateStatus();
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const handleSortStatus = (e) => {
    const sortStatus = e.target.value;
    console.log(sortStatus);

    if (sortStatus !== "All") {
      setStatus(sortStatus);
      setHrNames(hrNames);
      console.log("status", status);

      return;
    } else {
      setStatus("All");
      setHrNames(hrNames);
      return;
    }
  };

  const handleSortName = (e) => {
    const hrName = e.target.value;
    if (hrName !== "All") {
      setStatus(status);
      setHrNames(hrName);
      return;
    } else {
      setStatus(status);
      setHrNames("All");
      return;
    }
  };

  // const handleSortStatus = (e) => {
  //   try {
  //     const status =
  //       e.target.value !== "All" ? { status: e.target.value } : null;

  //     const handleInternshipDetails = async (obj) => {
  //       const result = await services.getInternship(obj);
  //       console.log(result);
  //       setInternshipDetails(result.data.reverse());
  //     };
  //     handleInternshipDetails(status);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      <MarketingNavbar />\
      {open && (
        <InternshipModel
          setOpen={setOpen}
          open={open}
          handleClose={handleClose}
          id={internsId}
          notes={comments}
        />
      )}
      <div style={{ width: "100%", marginTop: "1%" }}>
        <div>
          <HrDates sortStatus={handleSortStatus} sortNames={handleSortName} />
          <section className="main">
            <div className="profile-card">
              <div>Total</div>
              <h3 style={{ marginLeft: "auto" }}>{totalInterns}</h3>
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
              No Response
              <h3 style={{ marginLeft: "auto" }}>{noResponse}</h3>
            </div>
          </section>
        </div>
      </div>
      <div>
        <TableContainer component={Paper}>
          <InfiniteScroll
            dataLength={internshipDetails.length}
            next={fetchInterns}
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
                  <TableCell>SELF INTRO</TableCell>
                  <TableCell>CV</TableCell>
                  <TableCell>STATUS</TableCell>
                  <TableCell>SUBMISSION DATE</TableCell>
                  <TableCell>Message</TableCell>
                  <TableCell>Called By</TableCell>
                  <TableCell>Called Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody align="center">
                {internshipDetails &&
                  internshipDetails
                    .filter((ref) =>
                      status !== "All" ? ref.status === status : ref
                    )
                    .filter((ref) =>
                      hrNames !== "All" ? ref.called_by === hrNames : ref
                    )
                    .map((interns, index) => (
                      <TableRow
                        className="tabelrow"
                        key={interns.student_id}
                        sx={{ border: 1, borderColor: "#f5f5ef" }}
                      >
                        <TableCell component="th" scope="row">
                          {index + 1}
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
                            onChange={(e) => submit(e, interns.student_id)}
                          >
                            <option value="">{interns.status}</option>
                            <option value="Yet to Call">Yet to Call</option>
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
                          {new Date(interns.created_date).toLocaleString(
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
                              setComments(interns.comments);
                              setInternsId(interns.student_id);
                              setOpen(true);
                            }}
                          >
                            Update
                          </button>
                        </TableCell>
                        <TableCell>
                          <select
                            className="student-status"
                            onChange={(e) =>
                              submitInternsName(e, interns.student_id)
                            }
                          >
                            <option value="">{interns.called_by}</option>
                            <option value="Nadia">Nadia</option>
                            <option value="Nurir">Nurir</option>
                            <option value="Priyanka">Priyanka</option>
                            <option value="Rakhi">Rakhi</option>
                            <option value="Shahana">Shahana</option>
                            <option value="Shrujana">Shrujana</option>
                          </select>
                        </TableCell>
                        <TableCell>{interns.called_date}</TableCell>
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

export default InternspDetails;
