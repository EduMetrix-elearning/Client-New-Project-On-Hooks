import React from "react";
import MarketingNavbar from "./MarketingNavbar";
import HrDates from "../HumanResource/HrDates";
import HrTable from "../HumanResource/HrTable";
import "./QuickData.css";

const QuickData = () => {
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
          <tr>
            <th>No.</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
            <th>LOCATION</th>
            <th>PAST COURSE</th>

            <th> YEAR OF PASSING</th>
            <th>STATUS</th>
            <th>Message</th>
            <th>SUBMISSION DATE</th>
          </tr>
          <tr>
            <td>Peter</td>
            <td>Griffin</td>
            <td>$100</td>
            <td>Peter</td>
            <td>
              <input type="text" />
            </td>
            <td>
              <input type="text" />
            </td>
            <td>
              <input type="text" />
            </td>
            <td>
              <select className="student-status">
                <option value="">Yet To Call</option>
                <option value="Completed">No Response</option>
                <option value="no response">Not Intrested</option>
                <option value="waiting to call">Decison Pending </option>
                <option value="not intrested">Intrested</option>
                <option value="interest">Waiting To Join</option>
                <option value="interest">Admission</option>
              </select>
            </td>
            <td>$100</td>
            <td>$100</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default QuickData;
