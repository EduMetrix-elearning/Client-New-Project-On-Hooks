import React, { useState, useEffect } from "react";
import "./EmployeeVerification.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography, Card, Button } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import * as services from "../../services/pages/agentRoute";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { CardActionArea } from "@mui/material";

const EmployeeVerification = () => {
  const [search, setSearch] = useState();

  const [employeeId, setEmployeeId] = useState(false);
  console.log(employeeId);

  const handleSubmit = () => {
    try {
      const HandleEmployeeCard = async (id) => {
        const result = await services.getWorkingEmployeeById(id);
        console.log(result);
        setEmployeeId(result.data);
      };
      HandleEmployeeCard(search);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          backgroundColor: "#fcfcf8",
        }}
      >
        <Card
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "20px",
            width: "100%",
            backgroundColor: "#fcfcf8",

            boxShadow: "rgba(0, 0, 0, 0.35) 0px 0px 8px",
          }}
        >
          <Typography
            sx={{
              marginBottom: "10px",
              fontWeight: "500",
            }}
            variant="h4"
          >
            Employee Verification
          </Typography>
          <Box
            sx={{
              display: "flex",

              flexDirection: "row",
              justifyContent: "space-between",
              padding: "20px",
              width: "70%",
            }}
          >
            <TextField
              label="Please Enter Employee Id"
              size="small"
              onChange={(e) => setSearch(e.target.value)}
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton onClick={handleSubmit}>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {/* <TextField
              sx={{ borderRadius: "50px" }}
              fullWidth
              label="Please Enter Employee Id"
              size="small"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            /> */}

            {/* <input className="searchField" type="text" />
            <SearchIcon /> */}
            {/* <Button variant="outlined" color="info">
              Search
            </Button> */}
          </Box>
        </Card>
        {employeeId && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // backgroundColor: "#fcfcf8",
              height: "70vh",
              overflow: "hidden",
            }}
          >
            <Card
              sx={{
                margin: 5,
                border: "1px solid #fff",
                background: "#EEF0F4",
                borderRadius: "20px",

                boxShadow:
                  "inset 9.91px 9.91px 15px #D9DADE, inset -9.91px -9.91px 15px #FFFFFF",
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
                  image={employeeId.employee_photo}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    sx={{
                      textAlign: "center",

                      color: "#fff",
                      borderRadius: "3px",
                      padding: "2px 0px",
                      margin: 1,
                      background: "#4d4d4d",
                      boxShadow:
                        "9.91px 9.91px 15px #D9DADE, -9.91px -9.91px 15px #FFFFFF",
                    }}
                    variant="h5"
                  >
                    {employeeId.employee_name}
                  </Typography>
                  <Typography
                    sx={{ fontWeight: "bold", margin: 1 }}
                    variant="h6"
                  >
                    {employeeId.position}
                  </Typography>
                  <Typography sx={{ fontWeight: "bold", margin: 1 }}>
                    {employeeId.employee_id}
                  </Typography>
                  <Typography sx={{ fontWeight: "bold", margin: 1 }}>
                    D.O.B:{employeeId.agent_dob}
                  </Typography>
                  <Typography sx={{ fontWeight: "bold", margin: 1 }}>
                    Blood Group:{employeeId.blood_group}
                  </Typography>
                  <Typography sx={{ fontWeight: "bold", margin: 1 }}>
                    Contact:+91{employeeId.employee_phone}
                  </Typography>
                  <Typography sx={{ fontWeight: "bold", margin: 1 }}>
                    Email:{employeeId.employee_email}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        )}
      </Box>
    </>
  );
};

export default EmployeeVerification;
