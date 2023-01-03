import React from "react";
import HumanResource from "./HumanResource";
import { DashBoardInputs } from "../../../WebsiteDashboard/Inputs";
import { DashBoardDetails } from "../../../WebsiteDashboard/Details";
import { DashBoardStatus } from "../../../WebsiteDashboard/Status";

const CareerDetails = () => {
  return (
    <div>
      <HumanResource />
      <DashBoardInputs />
      <DashBoardDetails />
      <DashBoardStatus />
    </div>
  );
};

export default CareerDetails;
