import React from "react";
import "./HrTable.css";
export default function HrTable() {
  return (
    <div>
      <table>
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
        <tr>
          <td>Peter</td>
          <td>Griffin</td>
          <td>$100</td>
          <td>Peter</td>
          <td>Griffin</td>
          <td>ter$100</td>
          <td>
            <button
              style={{
                padding: "5px",
              }}
            >
              Resume
            </button>
          </td>
          <td>1-2-2022</td>
        </tr>
      </table>
    </div>
  );
}
