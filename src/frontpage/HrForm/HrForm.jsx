import React, { useState } from "react";
import { Navbarpage } from "../Navbar/Navbarpage.jsx";
import { Footer } from "../Footer/Footer.jsx";
import image1 from "../../asset/images/HrpageImage/hrpage1.jpeg";
import image2 from "../../asset/images/HrpageImage/hrpage2.jpeg";
import image3 from "../../asset/images/HrpageImage/hrpage3.jpeg";
import image4 from "../../asset/images/HrpageImage/hrpage4.jpeg";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@material-ui/core";
import ClearIcon from "@mui/icons-material/Clear";
import "./HrForm.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-bootstrap/Carousel";
import * as services from "../../services/pages/agentRoute";
import HrFunctions from "./HrFunctions.jsx";

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

export const Hrform = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact_number, setContact] = useState("");
  const [requirement, setRequirement] = useState("");
  const [skill, setSkill] = useState("");
  const [experience, setExperience] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");

  const [errorname, setErrorName] = useState("");
  const [errorphone, setErrorPhone] = useState("");
  const [erroremail, setErrorEmail] = useState("");
  const [errorrequirement, setErrorRequirement] = useState("");
  const [errorskills, setErrorSkill] = useState("");
  const [errorexperience, setErrorExperience] = useState("");
  const [errorlocation, setErrorLocation] = useState("");
  const [errorsalary, setErrorSalary] = useState("");
  const [errorcompany, setErrorCompany] = useState("");
  const [errorwebsite, setErrorWebsite] = useState("");
  const [errormessage, setErrorMessage] = useState("");

  const handleClick = (e) => {
    setErrorName("");
    setErrorPhone("");
    setErrorLocation("");
    setErrorEmail("");
    setErrorRequirement("");
    setErrorSkill("");
    setErrorExperience("");
    setErrorSalary("");
    setErrorCompany("");
    setErrorWebsite("");
    setErrorMessage("");

    e.preventDefault();

    const regax = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let flag = false;
    if (name === "") {
      flag = true;
      setErrorName("Name field cannot be empty *");
    } else if (contact_number === "") {
      flag = true;
      setErrorPhone("phone number cannot be empty *");
    } else if (contact_number.length !== 10) {
      flag = true;
      setErrorPhone("Phone number is Invalid *");
    } else if (email === "") {
      flag = true;
      setErrorEmail("Email cannot be empty *");
    } else if (!email.match(regax)) {
      flag = true;
      setErrorEmail("Email not valid *");
    } else if (email.split(" ").length - 1 > 0) {
      flag = true;
      setErrorEmail("space not allowed *");
    } else if (requirement === "") {
      flag = true;
      setErrorRequirement("Requirement cannot be empty *");
    } else if (skill === "") {
      flag = true;
      setErrorSkill("Skill cannot be empty *");
    } else if (experience === "") {
      flag = true;
      setErrorExperience("Experience cannot be empty *");
    } else if (location === "") {
      flag = true;
      setErrorLocation("Location cannot be empty *");
    } else if (salary === "") {
      flag = true;
      setErrorSalary("Salary cannot be empty *");
    } else if (company === "") {
      flag = true;
      setErrorCompany("Company cannot be empty *");
    } else if (website === "") {
      flag = true;
      setErrorWebsite("Website cannot be empty *");
    } else if (message === "") {
      flag = true;
      setErrorMessage("Message cannot be empty *");
    }

    if (!flag) {
      const collaborator = {
        name,
        email,
        contact_number: "+91" + contact_number,
        location,
        requirement,
        skill,
        salary,
        experience,
        company,
        website,
        message,
      };

      try {
        const registerInternship = async (obj) => {
          const result = await services.submitCollaborators(obj);
          if (result.success) {
            alert("Successfully registered");
            return handleClose();
          }
        };
        registerInternship(collaborator);
      } catch (error) {
        console.log(error);
        alert(error);
      }
    }
  };
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="full-hr-page">
      <Navbarpage />

      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className="carousel-item">
          <img className="d-block w-100" src={image2} alt="First slide" />
          {/* <Carousel.Caption>
            <h1>Collaborate With Us</h1>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img className="d-block w-100" src={image1} alt="Second slide" />
          {/* 
          <Carousel.Caption>
            <h1>Collaborate With Us</h1>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img className="d-block w-100" src={image3} alt="Third slide" />

          {/* <Carousel.Caption>
            <h1>Collaborate With Us</h1>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img className="d-block w-100" src={image4} alt="fourth slide" />

          {/* <Carousel.Caption>
            <h1>Collaborate With Us</h1>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>

      <div className="collaborates-div">
        <div>
          <div>
            <h1>Contact us to Collaborates</h1>
          </div>
          <div>
            <button className="collaborate-btn" onClick={handleOpen}>
              Collaborate with us
            </button>
          </div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-modal-title"
            aria-describedby="responsive-modal-title"
          >
            <Box sx={style} className="modal-size">
              <Box className="inner-model">
                <Typography id="modal-modal-title" variant="h6" component="h4">
                  Contact Us
                </Typography>
                <Button onClick={handleClose}>
                  <ClearIcon />
                </Button>
              </Box>
              <hr />
              <TextField
                sx={{ m: 1 }}
                id="standard-basic"
                label="Name *"
                variant="standard"
                style={{ marginBottom: "10px" }}
                onChange={(e) => setName(e.target.value)}
              />
              {errorname ? (
                <div style={{ color: "red" }}>{errorname}</div>
              ) : null}
              <div className="flex-modal-inner-div">
                <TextField
                  className="text-field"
                  sx={{ m: 1 }}
                  id="standard-basic"
                  label="Mobile No *"
                  variant="standard"
                  style={{ marginBottom: "10px" }}
                  onChange={(e) => setContact(e.target.value)}
                />
                {errorphone ? (
                  <div style={{ color: "red" }}>{errorphone}</div>
                ) : null}
                <TextField
                  className="text-field"
                  sx={{ m: 1 }}
                  id="standard-basic"
                  label="Email *"
                  variant="standard"
                  style={{ marginBottom: "10px" }}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {erroremail ? (
                  <div style={{ color: "red" }}>{erroremail}</div>
                ) : null}
              </div>

              <TextField
                sx={{ m: 1 }}
                id="standard-basic"
                label="Requirement of *"
                variant="standard"
                style={{ marginBottom: "10px" }}
                onChange={(e) => setRequirement(e.target.value)}
              />
              {errorrequirement ? (
                <div style={{ color: "red" }}>{errorrequirement}</div>
              ) : null}
              <div>
                <TextField
                  sx={{ m: 1 }}
                  id="standard-basic"
                  label="Skills Required *"
                  variant="standard"
                  style={{ marginBottom: "10px" }}
                  onChange={(e) => setSkill(e.target.value)}
                />
                {errorskills ? (
                  <div style={{ color: "red" }}>{errorskills}</div>
                ) : null}
                <TextField
                  sx={{ m: 1 }}
                  id="standard-basic"
                  label="Experience *"
                  variant="standard"
                  style={{ marginBottom: "10px" }}
                  onChange={(e) => setExperience(e.target.value)}
                />
                {errorexperience ? (
                  <div style={{ color: "red" }}>{errorexperience}</div>
                ) : null}
              </div>
              <TextField
                sx={{ m: 1 }}
                id="standard-basic"
                label="Location *"
                variant="standard"
                style={{ marginBottom: "10px" }}
                onChange={(e) => setLocation(e.target.value)}
              />
              {errorlocation ? (
                <div style={{ color: "red" }}>{errorlocation}</div>
              ) : null}
              <div>
                <TextField
                  sx={{ m: 1 }}
                  id="standard-basic"
                  label="Salary (Lac/A) *"
                  variant="standard"
                  style={{ marginBottom: "10px" }}
                  onChange={(e) => setSalary(e.target.value)}
                />
                {errorsalary ? (
                  <div style={{ color: "red" }}>{errorsalary}</div>
                ) : null}
                <TextField
                  sx={{ m: 1 }}
                  id="standard-basic"
                  label="Name of the Company *"
                  variant="standard"
                  style={{ marginBottom: "10px" }}
                  onChange={(e) => setCompany(e.target.value)}
                />
                {errorcompany ? (
                  <div style={{ color: "red" }}>{errorcompany}</div>
                ) : null}
              </div>
              <TextField
                sx={{ m: 1 }}
                id="standard-basic"
                label="Website *"
                variant="standard"
                style={{ marginBottom: "10px" }}
                onChange={(e) => setWebsite(e.target.value)}
              />
              {errorwebsite ? (
                <div style={{ color: "red" }}>{errorwebsite}</div>
              ) : null}
              <TextField
                sx={{ m: 1 }}
                id="standard-basic"
                label="Message *"
                variant="standard"
                style={{ marginBottom: "10px" }}
                onChange={(e) => setMessage(e.target.value)}
              />
              {errormessage ? (
                <div style={{ color: "red" }}>{errormessage}</div>
              ) : null}
              <Button
                sx={{ marginTop: "2px", marginRight: "20px" }}
                variant="contained"
                className="student-form-filling-btn"
                onClick={handleClick}
              >
                Submit
              </Button>
            </Box>
          </Modal>
        </div>
      </div>

      {/* <div className="Hr-information">
        <div className="hr-info-title">Who we are!</div>
        <div className="hr-info-paragraph">
          EduMetrix Learning Solutions Pvt Ltd is a Edu-Tech and dynamic human
          resource consulting firm catering to recruitment needs of the
          corporate world. We, at EduMetrix, screen candidates based on their
          degree and skill set, and conduct lively classes on Full stack
          JavaScript Developer, which helps to simplify your hiring process. We
          also provide superior hands on practice with the ability to deliver
          desired results that has always helped them to stay focused. We have a
          team of dedicated and professional HR consultants who will guide you
          through the hiring process from the scratch. Whether it is an MNC, a
          Startup or a Medium-sized organization, we have tailor-made packages
          catering to all your requirements.
        </div>

        <div className="hr-info-title">What we do!</div>
        <div className="hr-short-title">RPO Services:</div>
        <div className="hr-info-paragraph">
          Recruitment Process Outsourcing (RPO) is a form of business process
          outsourcing (BPO) where an employer transfers all or part of its
          recruitment processes to an external service provider
        </div>

        <div className="hr-short-title">Career Coaching:</div>
        <div className="hr-info-paragraph">
          We provide career tutorship to the professionals who are lagging in
          any particular skills. IT industry is booming. So is the demand for
          experienced IT professionals who have the right technical skills to
          work with global giants worldwide. We help professionals to shape
          their career graph and ensure them in building a promising career in
          there IT industry. We also help them to gain knowledge on career
          clarity, career growth and career transition
        </div>
        <div className="hr-short-title">Training & skills development:</div>
        <div className="hr-info-paragraph">
          We don't teach candidates as a student, in-fact we are taking them as
          our interns and make them work on real project guiding candidates in
          front end, backend, server technologies and train them as a full stack
          developer which a hiring company look for in their ideal candidate. We
          provide them a real project tasks and our FullStack Engineers Assist
          candidates to finish their tasks and make them grab more knowledge in
          real projects and help them grow in their problem solving skills.
        </div>
        <div className="hr-short-title">Disciplinary issues:</div>
        <div className="hr-info-paragraph">
          We will handle all your disciplinary concerns and represent the
          company at labor for peace work culture.
        </div>
        <div className="hr-short-title">Regulatory Compliance:</div>
        <div className="hr-info-paragraph">
          We work with management to ensure your company is fully compliant with
          all relevant regulations such as, Employment Act, Employment policies,
          Workers’ Compensation Act etc…
        </div>

        <div className="hr-info-title">Why Us!</div>
        <div className="hr-info-paragraph">
          “The art of HR Solution is to blend our experience, database,
          knowledge, people, culture, and market trend to provide the best
          candidate who fit in the organization.” <br />
          WE ARE NOT A TRAINING INSTITUTE TO START BATCH-WISE, WE ARE AN IT
          FIRM, we make them work on real projects guiding them in front end,
          back end, server technologies and train them as a full stack developer
          and also help them in making own projects. <br />
          Candidates who gets trained in our firm will be expertise on coding
          related to Front end (HTML, CSS, JavaScript, React and React Native),
          Back end (Node, JavaScript and My SQL/MongoDB), Server end
          (Azure/Github). <br />
          We will be with you from the beginning until the end of the hiring
          process. <br />
          We provide easy-to-understand yet professional communication. <br />
          Our emotive effort is to bridge the gap between job seekers and job
          providers .
        </div>
      </div> */}
      <HrFunctions />

      <Footer />
    </div>
  );
};
