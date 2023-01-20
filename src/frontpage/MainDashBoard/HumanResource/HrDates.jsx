import React from "react";
import "./HrDates.css";

const HrDates = ({ sortStatus }) => {
  return (
    <>
      <div className="form-content">
        <div className="container">
          <div className="field-input-field">
            <header>Start Date</header>
            <input className="field-input" type="date" />
          </div>
          <div className="field-input-field">
            <header>End Date</header>
            <input className="field-input" type="date" />
          </div>
          <div className="field-input-field">
            <header>Status</header>
            <select
              className="field-option"
              name="cars"
              id="cars"
              onChange={(e) => sortStatus(e)}
            >
              <option className="option-container" value="All">
                All
              </option>
              <option className="option-container" value="Yet To Call">
                Yet To Call
              </option>
              <option className="option-container" value="Waiting To Call">
                Waiting To Call
              </option>
              <option className="option-container" value="No Response">
                No Response
              </option>
              <option className="option-container" value="Decision Pending">
                Decision Pending
              </option>
              <option className="option-container" value="Not Interested">
                Not Interested
              </option>
              <option className="option-container" value="Interested">
                Interested
              </option>
              <option className="option-container" value="Waiting To Join">
                Waiting To Join
              </option>
              <option className="option-container" value="Admission">
                Admission
              </option>
              <option className="option-container" value="Not Allow">
                Not Allow
              </option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default HrDates;
