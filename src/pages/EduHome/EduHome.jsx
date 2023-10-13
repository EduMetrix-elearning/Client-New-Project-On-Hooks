import React from "react";
import "./EduHome.css";
import SectionOne from "../../Edu-home/SectionOne/SectionOne";
import SectionTwo from "../../Edu-home/SectionTwo/SectionTwo";
import Section4 from "../../Edu-home/SectionFour/Section4";
import SectionFive from "../../Edu-home/SectionFive/SectionFive";
import Section7 from "../../Edu-home/SectionSeven/Section7";
import Section8 from "../../Edu-home/SectionEight/Section8";
import Section9 from "../../Edu-home/SectionNine/Section9";
import Footer from "../../frontpage/Footer/Footer"
import EduHomeNavbar from "../../Edu-home/EduHomeNavbar/EduHomeNavbar";
import { Navbarpage } from "../../frontpage/Navbar/Navbarpage";



function EduHome() {
  
  return (
    <div className="eduhome">
     {/* <EduHomeNavbar/> */}
     <Navbarpage/>
      <SectionOne />
      <SectionTwo />
      <Section4 />
      <SectionFive />
      <Section7 />
      <Section8 />
      <Section9 />
      <Footer/>
    </div>
  );
}

export default EduHome;
