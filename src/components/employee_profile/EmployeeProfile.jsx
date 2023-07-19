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
import "../../frontpage/EmployeeLogin/EmployeLogin.css";
import { useNavigate } from "react-router-dom";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import ChangePassword from "../change_password/ChangePassword";

export default function EmployeeProfile() {
  const [employeeId, setEmployeeId] = useState("");
  const [employee, setEmployee] = useState();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  console.log("employee---", employee);
  const services = require("../../services/pages/agentRoute");
  console.log("employeeId---1", employeeId);

  useEffect(() => {
    setEmployeeId(localStorage.getItem("employeeid"));
    handleLogin();
  }, [employeeId]);

  const handleLogin = async (e) => {
    try {
      if (employeeId) {
        let obj = { employeeId };
        const result = await services.workingEmployeeDetail(obj);
        console.log("resultOF singleEmployee", result.employeeDetails);
        setEmployee(result.employeeDetails);
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data) {
        // Displaying error message on the page
        console.log("Invalid login credentials");
      } else {
        console.log(error.message);
      }
    }
  };
  // const onHandleSubmit = async (e) => {
  //   setError(false);
  //   if (
  //     currentPassword === "" ||
  //     newPassword === "" ||
  //     confirmPassword === ""
  //   ) {
  //     setError("All fields are mandatory");
  //   } else if (newPassword !== confirmPassword) {
  //     setError("New Password and Confirm Password should be same");
  //   } else if (newPassword.match(/\s/)) {
  //     setError("*No whitespace allowed");
  //   } else if (!newPassword.match(/[A-Z]/)) {
  //     setError("*Password should contain atleast one Uppercase");
  //   } else if (!newPassword.match(/[a-z]/)) {
  //     setError("*Password should contain atleast one smallcase");
  //   } else if (!newPassword.match(/[0-9]/)) {
  //     setError("*Password should contain atleast one Number");
  //   } else if (!newPassword.match(/[!@#%&]/)) {
  //     setError(
  //       "Password should contain atleast one of this special characters: ! @ # % & ) "
  //     );
  //   } else if (currentPassword === newPassword) {
  //     setError("Current Password and New Password cannot be same");
  //   }

  //   if (newPassword.length > 10) {
  //     setError("*Password cannot have more than 10 characters");
  //   }
  //   if (error === false) {
  //     let obj = { employeeId, currentPassword, newPassword };
  //     const result = await services.changePasswordOfWorkingEmployee(obj);
  //     alert(result);
  //     if (result === "Password changed successfully") {
  //       alert(
  //         "Redirecting you to the login page, please try to login with the new password"
  //       );
  //       setTimeout(() => {
  //         navigate("/maindashboard", { replace: true });
  //       }, 1000);
  //     }
  //   }

  // };

  return (
    <>
      {/* <AdminDashboard /> */}
      {employee && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
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
                  // image={employee.employee_photo}
                  image="https://scontent.fblr11-1.fna.fbcdn.net/v/t39.30808-6/305516922_2197134900491052_9182915811321455187_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8k2GREBNDzQAX_1Klrm&_nc_ht=scontent.fblr11-1.fna&oh=00_AfBJN7tg8qn4PyV4cD67qAcTJg2c9zutR6KNyQnUw66BgA&oe=64BACAF9"
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
              <div onClick={onOpenModal} style={{ cursor: "pointer" }}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    marginLeft: "15px",
                    color: "dodgerblue",
                  }}
                >
                  Change Password
                </Typography>
              </div>
            </Card>
          </div>
        </div>
      )}
      {/*----------------------------Change Password --------------------------------------------------  */}
      <Modal open={open} onClose={onCloseModal} center>
        <ChangePassword />
      </Modal>
    </>
  );
}
