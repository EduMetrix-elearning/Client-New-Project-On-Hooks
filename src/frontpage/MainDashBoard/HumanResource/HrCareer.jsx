import React, { useEffect, useState } from "react";
import HrDates from "./HrDates";
import HumanResource from "./HumanResource";
import "./HrCareer.css";
import HrTable from "./HrTable";
const services = require("../../../services/pages/agentRoute");

const HrCareer = () => {
  const [hiringdetails, setHiringDetails] = useState([]);

  const HandleHiringDetails = async () => {
    const result = await services.getEmployee();
    console.log(result);
    setHiringDetails(result.data);
  };

  useEffect(() => {
    HandleHiringDetails();
  }, []);

  return (
    <>
      <HumanResource />
      <div style={{ width: "100%", marginTop: "1%" }}>
        <div>
          <HrDates />
          <section className="main">
            <div className="profile-card">
              <div>Total</div>
              <h3 style={{ marginLeft: "auto" }}>67</h3>
            </div>

            <div className="profile-card2">
              <div>Verified</div>
              <h3 style={{ marginLeft: "auto" }}>67</h3>
            </div>
            <div className="profile-card3">
              Not Verified
              <h3 style={{ marginLeft: "auto" }}>67</h3>
            </div>
            <div className="profile-card4">
              Fake
              <h3 style={{ marginLeft: "auto" }}>67</h3>
            </div>
          </section>
        </div>
        <div>
          <table style={{ overflowX: "auto" }}>
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone No</th>
                <th>Job Domain</th>
                <th>Message</th>
                <th>CV</th>
                <th>Submission Date</th>
              </tr>
            </thead>
            <tbody>
              {hiringdetails &&
                hiringdetails.map((employee) => {
                  return (
                    <tr key={employee.employee_id}>
                      <td>{employee.employee_id}</td>
                      <td>{employee.name}</td>
                      <td>{employee.email}</td>
                      <td>{employee.contact_number}</td>
                      <td>{employee.job}</td>
                      <td>{employee.message}</td>
                      <td>{employee.image}</td>
                      <td>{employee.created_date}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default HrCareer;
