import React, { useEffect, useState } from "react";
import MarketingNavbar from "./MarketingNavbar";
import HrDates from "../HumanResource/HrDates";
import "./internsDetails";
const services = require("../../../services/pages/agentRoute");

const InternspDetails = () => {
  const [internshipDetails, setInternshipDetails] = useState([]);

  const handleInternshipDetails = async () => {
    const result = await services.getInternship();
    console.log(result);
    setInternshipDetails(result.data);
  };

  useEffect(() => {
    handleInternshipDetails();
  }, []);
  return (
    <>
      <MarketingNavbar />
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
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>PHONE</th>
              <th>LOCATION</th>
              <th>PAST COURSE</th>

              <th> YEAR OF PASSING</th>
              <th>Self Intro</th>
              <th>CV</th>
              <th>SUBMISSION DATE</th>
            </tr>
          </thead>

          <tbody>
            {internshipDetails.map((interns) => {
              return (
                <tr key={interns.student_id}>
                  <td>{interns.student_id}</td>
                  <td>{interns.name}</td>
                  <td>{interns.email}</td>
                  <td>{interns.contact_number}</td>
                  <td>{interns.place}</td>
                  <td>{interns.course}</td>
                  <td>{interns.year_of_passing}</td>
                  <td>{interns.about_yourself}</td>

                  <td>
                    <button
                      style={{
                        padding: "5px",
                      }}
                    >
                      {interns.resume}
                    </button>
                  </td>
                  <td>{interns.created_date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default InternspDetails;
