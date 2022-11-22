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
import React, { useState } from "react";
import TabList from "@mui/lab/TabList";
import  { DashBoardInputs } from "./Inputs";
import { DashBoardDetails } from "./Details";
import  { DashBoardStatus } from "./Status";
import dayjs from "dayjs";
import {data} from "./internship.js"

const isSameOrAfter = require('dayjs/plugin/isSameOrAfter')
dayjs.extend(isSameOrAfter)
const isSameOrBefore = require('dayjs/plugin/isSameOrBefore')
dayjs.extend(isSameOrBefore)

export const DashBoardNavbar = () => {
  const [value, setValues] = useState("1")
  const handleChange = (e, val) => {
    setValues(val)
  }


  const [internshipdata,setInsternshipData] = useState(data)
  const handleFilterDate =(date,field)=>{
    const filterdata = data.filter((item)=>{
      if(field==="from" && dayjs(item.submission_date).isSameOrAfter(dayjs(date))){
        return item;
      }
      else  if(field==="to" && dayjs(item.submission_date).isSameOrBefore(dayjs(date))){
        return item;
      }
    })
    setInsternshipData(filterdata)
  }

  // const [filterStatus,setFilterStatus] = useState("")
  // const handleFilterStatus = internshipdata.filter((e)=>{
  //   if(filterStatus === "Active"){
  //     return e.isAvailable === true;
  //   }
  //   else if(filterStatus === "Inactive"){
  //     return e.isAvailable === false;
  //   }
  //   else{
  //     return e;
  //   }
  // })
  const onFilterValueSelected =(filterstatusvalue)=>{
    console.log(filterstatusvalue)
  }


  return (
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
            <Tab label="InternShips" value="1"></Tab>
            <Tab label="Career" value="2"></Tab>
            <Tab label="Hiring" value="3"></Tab>
          </TabList>
        </Box>
        <TabPanel value="1">
          Internship
          <DashBoardInputs onDateFilter={handleFilterDate} onStatusFilter={onFilterValueSelected} />
          <DashBoardDetails/>
          <DashBoardStatus data={internshipdata}/>
        </TabPanel>
        <TabPanel value="2">
          Career
          {/* <DashBoardInputs/>
          <DashBoardDetails/>
          <DashBoardStatus/> */}
        </TabPanel>
        <TabPanel value="3">
          Hiring
          {/* <DashBoardInputs/>
          <DashBoardDetails/>
          <DashBoardStatus/> */}
          </TabPanel>
      </TabContext>
    </Box>
  );
};
