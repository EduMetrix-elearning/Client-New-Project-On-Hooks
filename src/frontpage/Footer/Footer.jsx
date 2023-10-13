import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { ChatboxManager } from "../ChatboxManage/ChatboxManager";
import Button from "@mui/material/Button";
import Qrcode from "../../asset/images/scan-Qr.png";
import facebook from "../../asset/images/SocialImages/facebook.png";
import instagram from "../../asset/images/SocialImages/instagram.png";
import twitter from "../../asset/images/SocialImages/twitter.png";
import linkedin from "../../asset/images/SocialImages/linkedin.png";
import whatsapp from "../../asset/images/SocialImages/whatsapp.png";
import ClearIcon from "@mui/icons-material/Clear";
import { useContext, } from "react";
import {
  Card,
  CardContent,
  TextField,
  Box,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Typography,
  Grid,
  Modal,
} from "@material-ui/core";
import { InternshipContext } from "../../context/InternshipContext";
import { CareerContext } from "../../context/careerContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const Footer = () => {
  const [FAQopen, setFAQopen] = React.useState(false);

  const handleFAQopen = () => {
    setFAQopen(true);
  };
  const handleFAQclose = () => setFAQopen(false);
  // const {handleinternship}=useContext()
  const {handleinternship,}=useContext(InternshipContext)
  const { handleCarrier, carrierOpen, handleCarrierClose } = useContext(
    CareerContext
  );
  return (
    <div className="footer-main-div">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li>
                <Link to="/homepage">Home</Link>
              </li>
              <li>
                <Link to="/AboutUs">About us</Link>
              </li>
              <li>
                <Link to="/TermOfservices">Terms of services</Link>
              </li>
              <li>
                <Link to="/SubscriptionTerms">Subscription Terms</Link>
              </li>
              <li>
                <Link to="/PricingPaymentsAndRefunds">
                  Pricing, Payments and Refunds
                </Link>
              </li>

              <li>
                <Link to="/PrivacyPolicy">Privacy policy</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>FAQs</h4>
            <ul>
              <li className="faq-link" onClick={handleFAQopen}>
                FAQ
              </li>
              <Modal open={FAQopen} onClose={handleFAQclose}>
                <ChatboxManager />
              </Modal>
              {/* <Link to="/employelogin" className="employe-login-link">
                Employee Login
              </Link> */}
              <Link to="/maindashboard" className="employe-login-link">
                Employee Login
              </Link>
              <li>
                <a href="/whitePaper">White Paper</a>
              </li>
              <li>
                <a href="/address">Address</a>
              </li>
              <li>
                <a href="/agentssignup">Affiliate program </a>
              </li>
              <li>
                <a href="/employeeVerification">Employee Verification</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Courses</h4>
            <ul>
              <li>
                <a href="/fullstack">Full Stack </a>
              </li>
              <li>
                <a href="/frontend">Frontend</a>
              </li>
              <li>
                <a href="/backend">Backend</a>
              </li>
              <li>
              <a style={{cursor:"pointer"}} onClick={handleCarrier} >Internsip</a>
              
              </li>
              <li>
              <a style={{cursor:"pointer"}} onClick={handleinternship} >Career</a>
              </li>
            </ul>
            {/* <div className="career" style={{marginTop:10}}>
              <div style={{width:70}}>
              <h4>Career</h4>
             <span  style={{color:"white"}}>Internship</span> 
              </div>
            </div> */}
          </div>

          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/edumetrix.io/">
                <img src={facebook} width="40px" alt="" />
              </a>
              <a href="https://twitter.com/Edumetrix_io">
                <img src={twitter} width="40px" alt="" />
              </a>
              <a href="https://www.instagram.com/edumetrix.io/">
                <img src={instagram} width="40px" alt="" />
              </a>
              <a href="https://www.linkedin.com/company/edumetrix-io/">
                <img src={linkedin} width="40px" alt="" />
              </a>
              <a href="https://wa.me/message/CATELY64PUGJC1">
                <img src={whatsapp} width="40px" alt="" />
              </a>
            </div>
            <div className="scancode-div">
              <img src={Qrcode} width="70%" height="175px" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer