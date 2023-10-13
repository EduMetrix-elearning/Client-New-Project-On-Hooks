import React from "react";
import logo from "./section7img/section7.webp";
import "./Section7.css";

const Section7 = () => {
  return (
    <div className="section7main1">
      <div className="section7main">
        <div className="Section7left">
          <div className="list">
              <p className="Section7Text">
                - Accelerate results with our streamlined processes and
                efficient team.
              </p>
              
              <p className="Section7Text">
                - Leverage our extensive pool of skilled developers for rapid
                project completion.
              </p>
              <p className="Section7Text">
                - Collaborative problem-solving and transparent communication
                ensure technical excellence.
              </p>
              <p className="Section7Text">- Experience efficient, top-tier delivery with us.</p>
          </div>
          <div className="Section7img">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="Section7right">
          <div className="section7TextRight">
            <h1>Projects</h1>
            <h3 >You Name IT We Make IT</h3>
          </div>
          <div className="Section7button">
            <div className="section7button1"><span className="section7spantag">CRM</span></div>
            <div className="section7button2"> <span className="section7spantag">OTT</span></div>
            <div className="section7button3"> <span className="section7spantag">E-Commerce</span></div>
            <div className="section7button4"> <span className="section7spantag">Social Media</span></div>
            <div className="section7button5"> <span className="section7spantag">Delivery</span></div>
            <div className="section7button6"> <span className="section7spantag">EduTech</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
