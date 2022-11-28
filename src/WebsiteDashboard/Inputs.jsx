import TextField from "@mui/material/TextField";
import { Card, CardContent, Grid, InputLabel } from "@mui/material";
import React from "react";
import "./EduMetrixDashboard.scss"
import { useState } from "react";

export const DashBoardInputs = ({ onDateFilter, onStatusFilter }) => {
  const [filters, setFilters] = useState({
    from: "",
    to: "",
  })

 

  const handleInputChange = (field) => (event) => {
    const { value } = event.target;
    setFilters({
      ...filters,
      [field]: value
    })

    switch (field) {
      case "from":
        onDateFilter(value, "from")
        break;
      case "to":
        onDateFilter(value, "to")
        break;
      default:
        break;
    }
  }

  const handleStatusChange=(e)=>{
    onStatusFilter(e.target.value)
  }

  return (
    <Card className="website-dashboard-input-status">
      <CardContent sx={{ backgroundColor: "#f2f2f2" }}>
        <Grid container spacing={3} sx={{ placeItems: "center" }}>
          <Grid item xs={2}>
            <InputLabel>Start Date</InputLabel>

            <TextField
              margin="normal"
              type={"date"}
              variant="outlined"
              placeholder="dd/mm/yyyy"
              size="small"
              value={filters.from}
              onChange={handleInputChange("from")}
              fullWidth
            />
          </Grid>
          <Grid item xs={2}>
            <InputLabel>End Date</InputLabel>
            <TextField
              margin="normal"
              type={"date"}
              variant="outlined"
              placeholder="dd/mm/yyyy"
              size="small"
              value={filters.to}
              onChange={handleInputChange("to")}
              fullWidth
            />
          </Grid>
          <Grid item xs={2}>
            <InputLabel>Status</InputLabel>

            <select className="inputs-status" onChange={handleStatusChange}>
              <option value="">Select Status</option>
              <option value="Active">Completed</option>
              <option value="Inactive">Not Completed</option>
            </select>
          </Grid>
          
        </Grid>
      </CardContent>
    </Card>
  );
};


