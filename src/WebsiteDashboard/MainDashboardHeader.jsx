import React, { useState } from "react";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { Box, Button, Tab } from "@mui/material";
import { DashBoardNavbar } from "./Navbar";
import { AgentStatus } from "./AgentStudent/AgentStatus";
import { StudentStatusShow } from "./StudentStatus/StudentStatusShow";
import { BillingNavbar } from "./Biiling/BillingNavbar";
import "./EduMetrixDashboard.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";

export const MainDashboardHeader = () => {
  const navigate = useNavigate();
  const [value, setValues] = useState("1");
  const handleChange = (e, val) => {
    setValues(val);
  };
  const [showagent, setShow] = useState(false);

  return (
    <div className="main-dashboard-navbar">
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <div className="Dashboard-navbar">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                borderBottom: 1,
                borderColor: "divider",
              }}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                sx={{ display: "flex", flexGrow: 1 }}
              >
                <Tab label="Course" value="1"></Tab>
                <Tab label="Agent" value="2"></Tab>
                <Tab label="Billing" value="3"></Tab>
                <Tab label="Team" value="4"></Tab>
              </TabList>
              <Button
                style={{
                  textDecoration: "none",
                  display: "flex",
                  color: "GrayText",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  marginRight: "25px",
                }}
                onClick={() => navigate("/", { replac: true })}
              >
                Log out
              </Button>
            </Box>
          </div>
          <TabPanel value="1">
            <DashBoardNavbar />
          </TabPanel>
          <TabPanel value="2">
            <AgentStatus />
          </TabPanel>
          <TabPanel value="3">
            <BillingNavbar />
          </TabPanel>
          <TabPanel value="4">Team</TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};
