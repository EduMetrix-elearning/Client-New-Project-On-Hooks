import React, { useEffect, useState } from "react";
import "./EmtTracker.css";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import timelinePlugin from "@fullcalendar/timeline";
import AdminDashboard from "./AdminDashboard";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { border, Box } from "@mui/system";

const services = require("../../../services/pages/agentRoute");

const style = {
  fontSize: "20px",
  color: "white",
};

export default function EmtTracker() {
  const [trackdetails, setTrackDetails] = useState([]);
  const [event, setEvent] = useState([]);

  useEffect(() => {
    try {
      const handleTrackDetails = async () => {
        const result = await services.getAllTracks();
        console.log(result);
        setEvent(result.data);
        setTrackDetails(result.data);

        console.log(result);
      };
      handleTrackDetails();
    } catch (error) {
      console.log(error);
    }
  }, []);




  return (
    <div>
      <AdminDashboard />
      <div className="main-tracker">
        <div className="subtracker">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead sx={{ backgroundColor: "grey", border: 0 }}>
                <TableRow>
                  <TableCell sx={style}>Members</TableCell>
                  <TableCell sx={style} align="right">
                    Date
                  </TableCell>
                  <TableCell sx={style} align="right">
                    Category
                  </TableCell>
                  <TableCell sx={style} align="right">
                    Status
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody sx={{ backgroundColor: "#f3f4f6" }}>
                {trackdetails.map((track, index) => {
                  return (
                    <TableRow key={index} sx={{ border: 0 }}>
                      <TableCell align="left" component="th" scope="row">
                        <Box
                          sx={{
                            fontSize: "16px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: "5px",
                            boxShadow:
                              " inset 0px 6px 19px 0px rgba(0,0,0,0.1)",
                          }}
                        >
                          <img
                            style={{ height: "80px", width: "80px" }}
                            src="https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png"
                            alt="sac"
                          />
                          <h4>{track.name}</h4>
                        </Box>
                      </TableCell>
                      <TableCell sx={{ fontSize: "18px" }} align="right">
                        {track.date}
                      </TableCell>
                      <TableCell sx={{ fontSize: "18px" }} align="right">
                        {track.category}
                      </TableCell>
                      <TableCell sx={{ fontSize: "18px" }} align="right">
                        {track.title}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="subtracker">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, timelinePlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            events={event}
            initialView="dayGridMonth"
          />
        </div>
      </div>
    </div>
  );
}
