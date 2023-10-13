import React from "react";
// import "../../Components/SectionEight/Section8.jsx";
// import "../../Components/SectionEight/Section8.css";
// import "../../Components/SectionEight/Section8Responsive.css"
import writeimg from "./section8-imgs/section-8-write-img.webp";
import giftimg from "./section8-imgs/gift-img.png";
import "./Section8.css"
import "./Section8Responsive.css"


const Section8 = () => {
  return (
    <div>
      <div className="section8-container">
        <div className="section8-sub1-cntr">
          <div className="section8-services-main-div">
            <h1 className="section8-services-h1">Our Services</h1>
            <p className="section8-fastest-p">
              Fastest results assured with our efficient team and streamlined
              processes.
            </p>
          </div>

          <div className="section8-prjects-main-div">
            <div className="section8-website-box">
              <h1 className="section8-website-p">Website</h1>
            </div>
            <div className="section8-mobile-box">
              <h1 className="section8-website-p">Mobile App</h1>
            </div>
          </div>

          <div className="section8-prjects2-main-div">
            <div className="section8-mobile-box">
              <h1 className="section8-website-p">CRM Software</h1>
            </div>
            <div className="section8-website-box">
              <h1 className="section8-website-p">Idea to Product</h1>
            </div>
          </div>
          <div className="section8-gift-main-div">
            <div className="section8-gift-box-div">
              <img src={giftimg} className="section8-gift-img" alt="" />
            </div>
            <div className="section8-Partnership-container">
              <div className="section8-Partnership-box">
                <h1 className="section8-website-p">
                  Project Incubation Partnership
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="section8-section8-sub2-cntr">
          <img src={writeimg} alt="" className="section8-write-img" />
        </div>
      </div>
    </div>
  );
};

export default Section8;
