import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AdminDashboard from "./AdminDashboard";

import "./EmployeeProfiles.css";
const services = require("../../../services/pages/agentRoute");

const EmployeeProfiles = () => {
  const [employeeCard, setEmployeeCard] = useState([]);

  const HandleEmployeeCard = async () => {
    const result = await services.getWorkingEmployee();
    // console.log(result);
    setEmployeeCard(result.data);
  };

  useEffect(() => {
    HandleEmployeeCard();
  }, []);

  return (
    <>
      <AdminDashboard />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {employeeCard.map((employee) => {
          return (
            <div key={employee.registeration_id}>
              <Card
                sx={{
                  maxWidth: 330,
                  margin: 2,
                }}
              >
                <CardActionArea>
                  <CardMedia
                    sx={{
                      borderRadius: "40px",
                      padding: "10px",
                      objectFit: "contain",
                      zIndex: "1",
                    }}
                    component="img"
                    height="200"
                    image={employee.employee_photo}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      sx={{
                        textAlign: "center",
                        backgroundColor: "#000",
                        color: "#fff",
                        borderRadius: "10px",
                      }}
                      variant="h5"
                    >
                      {employee.employee_name}
                    </Typography>
                    <Typography sx={{ fontWeight: "bold" }} variant="h6">
                      {employee.position}
                    </Typography>
                    <Typography sx={{ fontWeight: "bold" }}>
                      {employee.employee_id}
                    </Typography>
                    <Typography sx={{ fontWeight: "bold" }}>
                      D.O.B:{employee.agent_dob}
                    </Typography>
                    <Typography sx={{ fontWeight: "bold" }}>
                      Blood Group:{employee.blood_group}
                    </Typography>
                    <Typography sx={{ fontWeight: "bold" }}>
                      Contact:+91{employee.employee_phone}
                    </Typography>
                    <Typography sx={{ fontWeight: "bold" }}>
                      Email:{employee.employee_email}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <div>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography sx={{ fontWeight: "bold" }}>
                        Bank Details
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography sx={{ fontWeight: "bold" }}>
                        Branch Name:{employee.bank_branch}
                      </Typography>
                      <Typography sx={{ fontWeight: "bold" }}>
                        Account Holder Name:{employee.bank_account_name}
                      </Typography>
                      <Typography sx={{ fontWeight: "bold" }}>
                        Account Number:{employee.bank_account_number}
                      </Typography>
                      <Typography sx={{ fontWeight: "bold" }}>
                        IFSC:{employee.bank_ifsc}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography sx={{ fontWeight: "bold" }}>
                        Documents
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <CardMedia
                        sx={{
                          borderRadius: "10px",
                          padding: "10px",
                          objectFit: "cover",
                          padding: 2,
                        }}
                        component="img"
                        height="200"
                        image={employee.employee_pan}
                        alt="green iguana"
                      />
                      <CardMedia
                        sx={{
                          borderRadius: "10px",
                          padding: "10px",
                          objectFit: "cover",
                          width: "100%",
                          padding: 2,
                        }}
                        component="img"
                        height="200"
                        image={employee.employee_aadharfront}
                        alt="green iguana"
                      />
                      <CardMedia
                        sx={{
                          borderRadius: "10px",
                          padding: "10px",
                          objectFit: "cover",
                          width: "100%",
                          padding: 2,
                        }}
                        component="img"
                        height="200"
                        image={employee.employee_aadharback}
                        alt="green iguana"
                      />
                    </AccordionDetails>
                  </Accordion>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default EmployeeProfiles;
