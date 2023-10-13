import React from "react";
import logo from "./Section2Images/edumetrixlogo.png";
import round from "./Section2Images/round.png";
import smallround from "./Section2Images/smallroundred.png";
import groupwork from "./Section2Images/groupwork.jpg";
import '../SectionTwo/Sectiontwo.css'
import '../SectionTwo/Section2media.css'

const SectionTwo = () => {
  return (
    <div>
      <div className="section2maincontainer">
        {/* ==========================leftpart====================================  */}
        {/* ========================================================================  */}

        <div className="section2leftsidepart">
          {/* <div className="section2logowithtext">
            <img className="section2logo" src={logo} alt="" />
            <p className="sectiontwoedumetrix">EDUMETRIX </p>
          </div> */}
          {/* <div className="sectiontwocompanyandtext"> */}
            {/* <div className="section2aboutcompany"> */}
              <p className="Section2About">About the Company </p>
            {/* </div> */}
          {/* </div> */}
          <p className="sectiontwofountedparagraph">
            Founded in 2017, Edumetrix Learning Solutions Pvt Ltd has emerged as
            a leading IT firm in the education technology sector. With a focus
            on website and mobile application development, we deliver
            high-quality solutions that empower businesses and institutions to
            excel in the digital era.
          </p>
        </div>

        {/* ==========================centerimagepart==================================== */}
        {/* ======================================================================== */}

        <div className="section2centerpart">
          <img className="section2round" src={round} alt="" />
          <img className="section2smallround" src={smallround} alt="" />
        </div>

        {/* ==========================rightpart==================================== */}
        {/* ======================================================================== */}

        <div className="section2rightpart">
          <img className="section2reviewimg" src={groupwork} alt="" />
          <img
            className="section2triangleimg"
            src="https://media-public.canva.com/ae7hw/MAEiwWae7hw/1/t.png"
            alt=""
          />
          <div className="section2lastquotes">
            Our expertise lies in utilizing a range of cutting-edge technologies
            including HTML, CSS, JavaScript, React.js, React Native, MySQL,
            Node.js, and Azure
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
