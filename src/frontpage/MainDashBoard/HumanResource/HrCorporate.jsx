import React from "react";
import HumanResource from "./HumanResource";
import HrDates from "./HrDates";

const HrCorporate = () => {
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
        <table style={{overflowX:"auto"}}>
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
          <tr>
            <td>Peter</td>
            <td>Griffin</td>
            <td>$100</td>
            <td>Peter</td>
            <td>Griffin</td>
            <td>$100</td>
            <td>Peter</td>
            <td>Griffin</td>
            <td>$100</td>
            <td>$100</td>
            <td>Peter</td>
            <td>Griffin</td>
            <td>$100</td>
            <td>$100</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default HrCorporate;
