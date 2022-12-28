import React from "react";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./Earning.css";
import { AgentNavbar } from "../AgentNavbar/AgentNavbar";

function createData(id, name, location, status) {
  return { id, name, location, status };
}

const rows = [
  createData(1, "Jamsheer", "Mysore", "joined"),
  createData(2, "Jamsheer", "Mysore", "joined"),
  createData(3, "Jamsheer", "Mysore", "joined"),
  createData(4, "Jamsheer", "Mysore", "joined"),
  createData(5, "Jamsheer", "Mysore", "joined"),
];

const AgentEarning = () => {
  const [agentAmount, setAgentAmount] = useState();

  useEffect(() => {
    if (agentAmount === rows.lastIndexOf(1)) {
      setAgentAmount(2500);
    }
  }, []);
  return (
    <div className="agent-earning">
      <AgentNavbar />
      <div className="agent-earning-table">
        <Card className="agent-earning-deatils">
          <Card
            sx={{
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              marginRight: 2,
            }}
          >
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Agent Total Earnings
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  textAlign="center"
                  fontWeight={600}
                >
                  {agentAmount}/-
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Card>
        <div className="agent-earning-status">
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead
                sx={{ backgroundColor: "#f5f5ef", border: 1 }}
                align="center"
              >
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Loction</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody align="center">
                {rows.map((row, index) => (
                  <TableRow
                    className="tabelrow"
                    key={index}
                    sx={{ border: 1, borderColor: "#f5f5ef" }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell>{row.name} </TableCell>
                    <TableCell>{row.location} </TableCell>
                    <TableCell>{row.status} </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default AgentEarning;
