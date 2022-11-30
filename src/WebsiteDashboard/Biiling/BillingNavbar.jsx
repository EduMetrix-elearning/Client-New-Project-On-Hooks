import React from 'react'
import {
    Box,
    Typography,
    Grid,
    AppBar,
    Toolbar,
    Tabs,
    Tab,
  } from "@mui/material";
  import TabPanel from "@mui/lab/TabPanel";
  import TabContext from "@mui/lab/TabContext";
  import { useState } from "react";
  import TabList from "@mui/lab/TabList";

export const BillingNavbar = () => {
    const [value, setValues] = useState("1")
    const handleChange = (e, val) => {
      setValues(val)
    }
  return (
    <div>
        <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{
          borderBottom: 1,
          borderColor: "divider"
        }}>
          <TabList 
          onChange={handleChange}
          aria-label="lab API tabs example"
          >
            <Tab label="New Billing" value="1"></Tab>
            <Tab label="Billing" value="2"></Tab>
          </TabList>
        </Box>
        <TabPanel value="1">
          New Billing
        </TabPanel>
        <TabPanel value="2">
            Billing
        </TabPanel>
        
      </TabContext>
    </Box>
    </div>
  )
}
