import React from "react";
import { BillingInformationPage } from "../../../BillingDetails/BillingInformationPage";
import AdminDashboard from "./AdminDashboard";



const NewBillingDetails = () => {
  return (
    <div>
      <AdminDashboard />
      <BillingInformationPage />
    </div>
  );
};

export default NewBillingDetails;
