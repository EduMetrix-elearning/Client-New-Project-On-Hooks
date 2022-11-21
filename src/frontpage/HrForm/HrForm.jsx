import React from 'react'
import { Navbarpage } from "../Navbar/Navbarpage.jsx"
import { Footer } from "../Footer/Footer.jsx"
import image1 from "../../asset/images/HrpageImage/hrpage1.jpeg"
import image2 from "../../asset/images/HrpageImage/hrpage2.jpeg"
import image3 from "../../asset/images/HrpageImage/hrpage3.jpeg"
import image4 from "../../asset/images/HrpageImage/hrpage4.jpeg"
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@material-ui/core';
import ClearIcon from '@mui/icons-material/Clear';
import "./HrForm.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Carousel from 'react-bootstrap/Carousel';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const Hrform = () => {
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="full-hr-page">
      <Navbarpage />

      <Carousel  activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item  className="carousel-item" >
        <img
          className="d-block w-100"
          src={image2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 >Collaborate With Us</h1>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item" >
        <img
          className="d-block w-100"
          src={image1}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1 >Collaborate With Us</h1>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  className="carousel-item" >
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1 >Collaborate With Us</h1>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  className="carousel-item" >
        <img
          className="d-block w-100"
          src={image4}
          alt="fourth slide"
        />

        <Carousel.Caption>
          <h1 >Collaborate With Us</h1>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>




      <div className='collaborates-div'>
        <div>
          <div>
            <h1>Contact us <br />
              to Collaborates</h1></div>
          <div><button className='collaborate-btn' onClick={handleOpen}>Collaborate with us</button></div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-modal-title"
            aria-describedby="responsive-modal-title"
          >
            <Box sx={style}  className="modal-size" > 
              <Box className="inner-model">
                <Typography id="modal-modal-title" variant="h6" component="h4">
                  Contact Us
                </Typography>
                <Button onClick={handleClose}>
                  <ClearIcon />
                </Button>
              </Box>
              <hr />
              <TextField  sx={{ m: 1 }} id="standard-basic" label="Name *" variant="standard" style={{ marginBottom: "10px" }} />

              <div className='flex-modal-inner-div'>
                <TextField className="text-field"  sx={{ m: 1 }} id="standard-basic" label="Mobile No *" variant="standard" style={{ marginBottom: "10px" }} />
                <TextField className="text-field"  sx={{ m: 1 }} id="standard-basic" label="Email *" variant="standard" style={{ marginBottom: "10px" }} />
              </div>

              <TextField sx={{ m: 1 }} id="standard-basic" label="Requirement of *" variant="standard" style={{ marginBottom: "10px" }} />

              <div>
                <TextField sx={{ m: 1 }} id="standard-basic" label="Skills Required *" variant="standard" style={{ marginBottom: "10px" }} />
                <TextField sx={{ m: 1 }} id="standard-basic" label="Experience *" variant="standard" style={{ marginBottom: "10px" }} />
              </div>
              <TextField sx={{ m: 1 }} id="standard-basic" label="Location *" variant="standard" style={{ marginBottom: "10px" }} />

              <div >
                <TextField sx={{ m: 1 }} id="standard-basic" label="Salary (Lac/A) *" variant="standard" style={{ marginBottom: "10px" }} />
                <TextField sx={{ m: 1 }} id="standard-basic" label="Name of the Company *" variant="standard" style={{ marginBottom: "10px" }} />

              </div>
              <TextField sx={{ m: 1 }} id="standard-basic" label="Website *" variant="standard" style={{ marginBottom: "10px" }} />
              <TextField sx={{ m: 1 }} id="standard-basic" label="Message *" variant="standard" style={{ marginBottom: "10px" }} />
              <Button sx={{ marginTop: "20px" }} variant="contained" className='student-form-filling-btn'>Submit</Button>

            </Box>
          </Modal>
        </div>
      </div>



      <div className="Hr-information">
        <div className='hr-info-title'>Who we are!</div>
        <div className="hr-info-paragraph">EduMetrix Learning Solutions Pvt Ltd is a Edu-Tech and dynamic human resource consulting firm catering to
          recruitment needs of the corporate world.
          We, at EduMetrix, screen candidates based on their degree and skill set, and conduct lively classes on Full stack
          JavaScript Developer, which helps to simplify your hiring process. We also provide superior hands on practice
          with the ability to deliver desired results that has always helped them to stay focused.
          We have a team of dedicated and professional HR consultants who will guide you through the hiring process from
          the scratch. Whether it is an MNC, a Startup or a Medium-sized organization, we have tailor-made packages
          catering to all your requirements.</div>


        <div className='hr-info-title'>What we do!</div>
        <div className='hr-short-title'>RPO Services:</div>
        <div className="hr-info-paragraph">Recruitment Process Outsourcing (RPO) is a form of business process outsourcing (BPO) where an employer
          transfers all or part of its recruitment processes to an external service provider</div>

        <div className='hr-short-title'>Career Coaching:</div>
        <div className="hr-info-paragraph">We provide career tutorship to the professionals who are lagging in any particular skills.
          IT industry is booming. So is the demand for experienced IT professionals who have the right technical skills to
          work with global giants worldwide. We help professionals to shape their career graph and ensure them in building
          a promising career in there IT industry. We also help them to gain knowledge on career clarity, career growth and
          career transition</div>
        <div className='hr-short-title'>Training & skills development:</div>
        <div className="hr-info-paragraph">We don't teach candidates as a student, in-fact we are taking them as our interns and make them work on real
          project guiding candidates in front end, backend, server technologies and train them as a full stack developer
          which a hiring company look for in their ideal candidate. We provide them a real project tasks and our FullStack
          Engineers Assist candidates to finish their tasks and make them grab more knowledge in real projects and help
          them grow in their problem solving skills.
        </div>
        <div className='hr-short-title'>Disciplinary issues:</div>
        <div className="hr-info-paragraph">We will handle all your disciplinary concerns and represent the company at labor for peace work culture.</div>
        <div className='hr-short-title'>Regulatory Compliance:</div>
        <div className="hr-info-paragraph">We work with management to ensure your company is fully compliant with all relevant regulations such as,
          Employment Act, Employment policies, Workers’ Compensation Act etc…</div>


        <div className='hr-info-title'>Why Us!</div>
        <div className="hr-info-paragraph">“The art of HR Solution is to blend our experience, database, knowledge, people, culture, and market trend to
          provide the best candidate who fit in the organization.” <br />
          WE ARE NOT A TRAINING INSTITUTE TO START BATCH-WISE, WE ARE AN IT FIRM, we make them work on
          real projects guiding them in front end, back end, server technologies and train them as a full stack developer and
          also help them in making own projects. <br />
          Candidates who gets trained in our firm will be expertise on coding related to Front end (HTML, CSS, JavaScript,
          React and React Native), Back end (Node, JavaScript and My SQL/MongoDB), Server end (Azure/Github). <br />
          We will be with you from the beginning until the end of the hiring process. <br />
          We provide easy-to-understand yet professional communication. <br />
          Our emotive effort is to bridge the gap between job seekers and job providers .</div>
      </div>


      
      <Footer />
    </div>
  )
}
