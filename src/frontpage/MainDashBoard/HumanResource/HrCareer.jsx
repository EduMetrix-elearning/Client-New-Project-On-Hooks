import React, { useEffect, useState } from "react";
import HrDates from "./HrDates";
import HumanResource from "./HumanResource";
import "./HrCareer.css";
import HrTable from "./HrTable";


const HrCareer = () => {
 


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
          </table>
        </div>
      </div>
    </>
  );
};

export default HrCareer;
