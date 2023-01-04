import React, { useState, useEffect } from "react";
import HumanResource from "./HumanResource";
import HrDates from "./HrDates";
const services = require("../../../services/pages/agentRoute");

const HrCorporate = () => {
  const [careerdetails, setCareerDetails] = useState([]);

  const Corporatedata = async () => {
    const result = await services.getCollaborators();
    // console.log(result);
    setCareerDetails(result.data);
  };

  useEffect(() => {
    Corporatedata();
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
      </div>
      <div>
        <table style={{ overflowX: "auto" }}>
          <thead>
            <tr>
              <th>No.</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>PHONE</th>
              <th>LOCATION</th>
              <th>HIRING DOMAIN</th>
              <th>SKILLS</th>
              <th>EXPERIENCE</th>
              <th>PACKAGE(LPA)</th>
              <th>NAME OF COMPANY</th>
              <th>WEBSITE</th>
              <th>MESSAGE</th>
              <th>STATUS</th>
              <th>SUBMISSION DATE</th>
            </tr>
          </thead>
          <tbody>
            {careerdetails.map((corporate) => {
              return (
                <tr key={corporate.collaborator_id}>
                  <td>{corporate.collaborator_id}</td>
                  <td>{corporate.name}</td>
                  <td>{corporate.email}</td>
                  <td>{corporate.contact_number}</td>
                  <td>{corporate.location}</td>
                  <td>{corporate.requirement}</td>
                  <td>{corporate.skill}</td>
                  <td>{corporate.experience}</td>
                  <td>{corporate.salary}</td>
                  <td>{corporate.company}</td>
                  <td>{corporate.website}</td>
                  <td>{corporate.message}</td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>{corporate.created_date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default HrCorporate;
