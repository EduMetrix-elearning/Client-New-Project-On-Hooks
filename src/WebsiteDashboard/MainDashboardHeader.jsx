import React,{useState} from 'react';
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import {
    Box,
    Tab,} from "@mui/material";
import { DashBoardNavbar } from './Navbar';
import { AgentStatus } from './AgentStudent/AgentStatus';
import { StudentStatusShow } from './StudentStatus/StudentStatusShow';

export const MainDashboardHeader = () => {
    const [value, setValues] = useState("1")
  const handleChange = (e, val) => {
    setValues(val)
  }
  const [showagent,setShow] = useState(false)

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
            <Tab label="Course" value="1"></Tab>
            <Tab label="Agent" value="2"></Tab>
            <Tab label="Billing" value="3"></Tab>
            <Tab label="Team" value="4"></Tab>
          </TabList>
        </Box>
        <TabPanel value="1">
           <DashBoardNavbar/>    
        </TabPanel>
        <TabPanel value="2">  
          {!showagent ? <AgentStatus setShow={setShow}/> : <StudentStatusShow />}

        </TabPanel>
        <TabPanel value="3">
          Billing
          </TabPanel>
          <TabPanel value="4">
          Team
          </TabPanel>
      </TabContext>
    </Box>
    </div>
  )
}
