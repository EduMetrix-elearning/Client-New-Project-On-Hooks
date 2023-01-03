import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./EmployeeProfiles.css";

import AdminDashboard from "./AdminDashboard";
const EmployeeProfiles = () => {
  return (
    <>
      <AdminDashboard />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          height: "100vh",
        }}
      >
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
              image="https://th.bing.com/th/id/OIP.y-nGyqT5AwES8oqp344z4gHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7"
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
                Jamsheer B R
              </Typography>
              <Typography sx={{ fontWeight: "bold" }} variant="h6">
                Software Engineer
              </Typography>
              <Typography sx={{ fontWeight: "bold" }}>
                ID No:EM02222019
              </Typography>
              <Typography sx={{ fontWeight: "bold" }}>
                D.O.B:22/01/1998
              </Typography>
              <Typography sx={{ fontWeight: "bold" }}>
                Blood Group: O +ve
              </Typography>
              <Typography sx={{ fontWeight: "bold" }}>
                Contact:+91 9880686768
              </Typography>
              <Typography sx={{ fontWeight: "bold" }}>
                Email:jamsheerjamshi1998@gmail.com
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
                  Branch Name:+91 9880686768
                </Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                  Account Holder Name:+91 9880686768
                </Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                  Account Number:+91 9880686768
                </Typography>
                <Typography sx={{ fontWeight: "bold" }}>IFSC:12345</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{ fontWeight: "bold" }}>Documents</Typography>
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
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeYAWo19XH2Z_ow2WVzhIKxQ--8pDGtWnI9Q&usqp=CAU"
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
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrL9UKZ3r3lcX8uQW_0ErRKikH3ZZI4xUdVyEz2Sxqf-am-SU22xqKfOiIiel0Bs4zfk4&usqp=CAU"
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
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiynov2NK7TZhPQAjAfyup8EO4efuRqJH8Jw&usqp=CAU"
                  alt="green iguana"
                />
              </AccordionDetails>
            </Accordion>
          </div>
        </Card>

        <Card sx={{ maxWidth: 330, margin: 2 }}>
          <CardActionArea>
            <CardMedia
              sx={{
                borderRadius: "40px",
                padding: "10px",
                objectFit: "contain",
              }}
              component="img"
              height="200"
              image="https://th.bing.com/th/id/OIP.y-nGyqT5AwES8oqp344z4gHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7"
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
                Jamsheer B R
              </Typography>
              <Typography sx={{ fontWeight: "bold" }} variant="h6">
                Software Engineer
              </Typography>
              <Typography sx={{ fontWeight: "bold" }}>
                ID No:EM02222019
              </Typography>
              <Typography sx={{ fontWeight: "bold" }}>
                D.O.B:22/01/1998
              </Typography>
              <Typography sx={{ fontWeight: "bold" }}>
                Blood Group: O +ve
              </Typography>
              <Typography sx={{ fontWeight: "bold" }}>
                Contact:+91 9880686768
              </Typography>
              <Typography sx={{ fontWeight: "bold" }}>
                Email:jamsheerjamshi1998@gmail.com
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
                  Branch Name:+91 9880686768
                </Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                  Account Holder Name:+91 9880686768
                </Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                  Account Number:+91 9880686768
                </Typography>
                <Typography sx={{ fontWeight: "bold" }}>IFSC:12345</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{ fontWeight: "bold" }}>Documents</Typography>
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
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeYAWo19XH2Z_ow2WVzhIKxQ--8pDGtWnI9Q&usqp=CAU"
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
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrL9UKZ3r3lcX8uQW_0ErRKikH3ZZI4xUdVyEz2Sxqf-am-SU22xqKfOiIiel0Bs4zfk4&usqp=CAU"
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
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiynov2NK7TZhPQAjAfyup8EO4efuRqJH8Jw&usqp=CAU"
                  alt="green iguana"
                />
              </AccordionDetails>
            </Accordion>
          </div>
        </Card>
      </div>
    </>
  );
};

export default EmployeeProfiles;
