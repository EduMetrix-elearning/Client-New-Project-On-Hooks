import {
  Box,
  Typography,
  Grid,
  AppBar,
  Toolbar,
  Tabs,
  Tab,
} from "@mui/material";
import "./EduMetrixDashboard.scss"
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import React, { useState } from "react";
import TabList from "@mui/lab/TabList";
import  { DashBoardInputs } from "./Inputs";
import { DashBoardDetails } from "./Details";
import  { DashBoardStatus } from "./Status";
import dayjs from "dayjs";
import { useEffect } from "react";
import axios from "axios"
import { AppPagination } from "./AppPagination";
import { CareerStatus } from "./CareerStatus";
import { HiringStatus } from "./HiringStatus";

const isSameOrAfter = require('dayjs/plugin/isSameOrAfter')
dayjs.extend(isSameOrAfter)
const isSameOrBefore = require('dayjs/plugin/isSameOrBefore')
dayjs.extend(isSameOrBefore)
const isBetween = require('dayjs/plugin/isBetween')
dayjs.extend(isBetween)

export const DashBoardNavbar = () => {
  const [value, setValues] = useState("1")
  const handleChange = (e, val) => {
    setValues(val)
  }


  const [internshipdata,setInsternshipData] = useState([])
  const [filterData,setFilterdata]=useState([])
  const [filterstatus,setFilterStatus]=useState([])
  const [pageCount,setPageCount]=useState(0)
  let limit = 5;

  const handleFilterDate =(date,field)=>{
    const filterdata = filterData.filter((item)=>{
      if((field==="from" && dayjs(item.submission_date).isSameOrAfter(dayjs(date))) || (field==="to" && dayjs(item.submission_date).isSameOrBefore(dayjs(date))) ){
        return item;
      } 
    })
    setInsternshipData(filterdata)
  }


  const onFilterValueSelected =(filterstatusvalue)=>{
    console.log(filterstatusvalue)
    const filteringStatus = filterstatus.filter((e)=>{
      if(e.status==="Inactive"){
        return e
      }
    })
    setInsternshipData(filteringStatus)
  }

 
  useEffect(()=>{
    const getInternshipData=async()=>{
      const res = await fetch(`http://localhost:8080/data?_page=1&_limit=${limit}`)
      const data = await res.json()
      const total = res.headers.get("x-total-count")
      setPageCount(Math.ceil(total/limit))
      setFilterStatus(data)
      setFilterdata(data)
      setInsternshipData(data)
    };
    getInternshipData()
   },[])

   const fetchSinglePageData=async(currentpage)=>{
    const res = await fetch(`http://localhost:8080/data?_page=${currentpage}&_limit=${limit}`)
    const data = await res.json()
    return data
   }

   const handlePageClick= async(data)=>{
     let currentpage = data.selected + 1
     console.log(currentpage)
    let pageFromfetchSinglepage = await fetchSinglePageData(currentpage)
    setInsternshipData(pageFromfetchSinglepage)
}



  return (
    <Box sx={{ width: "100%", typography: "body1" }} >
      <TabContext value={value}>
        <Box sx={{
          borderBottom: 1,
          borderColor: "divider"    
        }}
        >
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
          <AppPagination handlePageClick={handlePageClick} pageCount={pageCount} />
        </TabPanel>
        <TabPanel value="2">
          Career
          <DashBoardInputs/>
          <DashBoardDetails/>
          <CareerStatus data={internshipdata}/>
        </TabPanel>
        <TabPanel value="3">
          Hiring
          <DashBoardInputs/>
          <DashBoardDetails/>
         <HiringStatus data={internshipdata}/>
          </TabPanel>
      </TabContext>
    </Box>
  );
};
