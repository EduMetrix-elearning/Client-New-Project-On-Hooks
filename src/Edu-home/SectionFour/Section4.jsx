import React from "react";
import gurl from "./Section4imgs/Section4gurl.png";
import guy from "./Section4imgs/glassestopguy.png";
import ball from "./Section4imgs/pinkball.png";
import tail from "./Section4imgs/cattail.png";
import "./Section4media.css";
import "./Section4.css";
const Section4 = () => {
  return (
    <div className="section4-main">
      <div className="section4-gurl-img">
        <img width={400} height={590} src={gurl} alt="No Pic" />
      </div>

      <div className="section4-paramain">
        <div className="section4-heading1">
          <h1 className="section4-h1">Build With US</h1>
        </div>

        <div className="section4wholepara">
          <div className="section-4handp">
            <div className="section4-heading2">
              <h2 className="section4-h2">Transforming Ideas into</h2>
              <h2 className="section4-h2-child">Reality</h2>
            </div>
            <div className="section4-paragraphs">
              <p className="section4-heangin2para">
                From conceptualization to development, implementation, and
                support, we offer comprehensive endto-end IT solutions,
                streamlining your processes and enhancing efficiency
              </p>
            </div>
          </div>

          <div className="section4-handp2">
            <div className="section4-heading3">
              <h2 className="section4-h3">Creating Tomorrow's </h2>
              <h2 className="section4-h3-child">Solutions Today</h2>
            </div>
            <div className="formediadiv">
              <p className="section4-headin3">
                In a rapidly evolving digital landscape, we pride ourselves on
                our agility and ability to quickly adapt to changes, ensuring
                that you stay ahead of the competition.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="section4catandtaildiv">
        <img className="section4tailimg" src={tail} alt="" />
        <img className="section4ballimg" src={ball} alt="" />
      </div> */}

      <div className="kidimgandsquaresdiv">
        <div className="setion4kidimgdiv">
          <img className="setion4kidimg" src={guy} alt="" />
        </div>
        <div className="squaremaindiv">
          <div className="section4-square1">
            <h2 className="section4-square1-child">Website</h2>
          </div>
          <div className="section4-square2">
            <h2 className="section4-square2-child">MobileApp</h2>
          </div>
          <div className="section4-square3">
            <h2 className="section4-square3-child">Custom Software</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
