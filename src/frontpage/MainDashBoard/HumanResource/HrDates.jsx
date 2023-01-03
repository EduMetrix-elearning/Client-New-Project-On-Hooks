import React from "react";
import './HrDates.css';

const HrDates = () => {
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
            <select className="field-option" name="cars" id="cars">
              <option className="option-container">Yet To call</option>
              <option className="option-container">No Response</option>
              <option className="option-container">Not Interested</option>
              <option className="option-container">Interested</option>
              <option className="option-container">Waiting</option>
              <option className="option-container">Admission</option>
              <option className="option-container">Not Allow</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default HrDates;
