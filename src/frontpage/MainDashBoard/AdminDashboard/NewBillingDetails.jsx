import React, { useEffect, useState } from "react";
import { BillingInformationPage } from "../../../BillingDetails/BillingInformationPage";
import AdminDashboard from "./AdminDashboard";
import { useNavigate } from "react-router-dom";

const NewBillingDetails = () => {
  //--Protecting Router-starts---///
  const navigate = useNavigate();
  const [authenticateUser, setAuthenticateUser] = useState(false);
  const position = "Admin";
  const EmployeId = localStorage.getItem("employeeid");
  const EmployeeProfile = localStorage.getItem("employeeProfile");

  useEffect(() => {
    if (!EmployeId) {
      return navigate("/maindashboard");
    }
    if (EmployeId) {
      if (EmployeeProfile === position) {
        return setAuthenticateUser(true);
      } else {
        setAuthenticateUser(false);
        alert("Invalid login credentials, Please try to login again");
        return navigate("/maindashboard");
      }
    }
  }, []);
  //--Protecting Router ends----///
  return <div>{authenticateUser && <BillingInformationPage />}</div>;
};

export default NewBillingDetails;
