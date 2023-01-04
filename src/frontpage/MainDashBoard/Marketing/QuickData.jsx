import React, { useState, useEffect } from "react";
import MarketingNavbar from "./MarketingNavbar";
import HrDates from "../HumanResource/HrDates";
import HrTable from "../HumanResource/HrTable";
import "./QuickData.css";
const services = require("../../../services/pages/agentRoute");

const QuickData = () => {
  const [enqiryData, setEnquiryData] = useState([]);

  const handleEnquiryData = async () => {
    const result = await services.getEnquiry();
    console.log(result);
    setEnquiryData(result.data);
  };

  useEffect(() => {
    handleEnquiryData();
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
        <table style={{ textAlign: "center" }}>
          <thead>
            <tr>
              <th>No.</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>PHONE</th>
              <th>STATUS</th>
              <th>Message</th>
              <th>SUBMISSION DATE</th>
            </tr>
          </thead>

          <tbody>
            {enqiryData.map((enquiry) => {
              return (
                <tr key={enquiry.enquiry_id}>
                  <td>{enquiry.enquiry_id}</td>
                  <td>{enquiry.name}</td>
                  <td>{enquiry.email}</td>
                  <td>{enquiry.contact_number}</td>

                  <td>
                    <select className="student-status">
                      <option value="">{enquiry.status}</option>
                      <option value="Completed">No Response</option>
                      <option value="no response">Not Intrested</option>
                      <option value="waiting to call">Decison Pending </option>
                      <option value="not intrested">Intrested</option>
                      <option value="interest">Waiting To Join</option>
                      <option value="interest">Admission</option>
                    </select>
                  </td>
                  <td>{enquiry.message}</td>
                  <td>{enquiry.created_date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default QuickData;
