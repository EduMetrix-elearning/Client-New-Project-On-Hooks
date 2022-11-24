import { React, useState } from "react"
import { Container, Nav, Navbar, Form, Button, Table, Accordion, Carousel, CarouselItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AgentNavbar } from "../AgentNavbar/AgentNavbar";
// import { AgentNavbar } from "../Navbar/Navbar";
import "./AgentsDashboard.scss"


export const AgentsDashboard = () => {
  const [image, setImage] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBRdmz3LadjgP_7giopi8RU6TJQgE-9IZaYXSJYWHuFv3ty1vbrgMiiU6XqdhxXyFqJqU&usqp=CAU")
  const [name, setname] = useState("Jayasmita")
  const [place, setplace] = useState("Balasore")
  const [mobileno, setmobile] = useState("9438833152")
  const [email, setemail] = useState("jaya@gmail.com")
  const [bank, setbank] = useState("")
  const [accountno, setAccountno] = useState("12345678901234")
  const [accountname, setAccountname] = useState("Jayasmita Sahu")
  const [brachname, setBranchName] = useState("SBI branch")
  const [Ifsc, setIfsc] = useState("26001234AS")
  const [adharcardback,setAdharCardBack]=useState("https://5.imimg.com/data5/SELLER/Default/2021/6/YB/NS/ZE/127226125/pre-printed-pvc-aadhar-cards-500x500.jpg")
  const [adharcardfront,setAdharCardFront]=useState("https://images.tv9hindi.com/wp-content/uploads/2022/04/aadhar4-1.jpg?width=1280&enlarge=true")
  const [pancard, setpancard] = useState("https://w7.pngwing.com/pngs/309/240/png-transparent-identity-document-identification-driving-license-text-business-multimedia.png")
  const [valid, setvalid] = useState(false)

  const uploadImage = (e) => {
    if (e.target.files.length !== 0) {
      setImage(URL.createObjectURL(e.target.files[0]))
    }
  }
  const uploadPANCard = (e) => {
    if (e.target.files.length !== 0) {
      setpancard(URL.createObjectURL(e.target.files[0]))
    }
  }
  const uploadAdharFront=(e)=>{
    if (e.target.files.length !== 0) {
      setAdharCardFront(URL.createObjectURL(e.target.files[0]))
    }
  }
  const uploadAdharBack=(e)=>{
    if (e.target.files.length !== 0) {
      setAdharCardBack(URL.createObjectURL(e.target.files[0]))
    }
  }

  const handleAgentsubmit = () => {
    setname(name)
    setvalid(true)
  }

  return (
    <div className='agents-dashboard'>


      <AgentNavbar />


      <div className='agent-profile-main-div'>
        <div className='agent-profile-form-div'>
          <h1 style={{ marginBottom: "20px", color: "white", backgroundColor: "#193942", padding: "15px" }}>Agent KYC Form</h1>
          <Form className="agent-profile-form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name *</Form.Label>
              <Form.Control type="text" onChange={(e) => { setname(e.target.value) }} placeholder="Enter name" style={{ marginBottom: "15px" }} />
              <Form.Label>Place *</Form.Label>
              <Form.Control type="text" onChange={(e) => { setplace(e.target.value) }} placeholder="Enter place" style={{ marginBottom: "15px" }} />
              <Form.Label>Mobile Number *</Form.Label>
              <Form.Control type="number" onChange={(e) => { setmobile(e.target.value) }} placeholder="Enter mobile number" style={{ marginBottom: "15px" }} />
              <Form.Label>Email *</Form.Label>
              <Form.Control type="email" onChange={(e) => { setemail(e.target.value) }} placeholder="Enter email" style={{ marginBottom: "15px" }} />

              <Accordion style={{ marginBottom: "20px" }}>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Bank Account Details</Accordion.Header>
                  <Accordion.Body>
                    <Form.Label>Branch Name *</Form.Label>
                    <Form.Control type="text" onChange={(e) => { setbank(e.target.value) }} placeholder="Enter branch name" style={{ marginBottom: "15px" }} />
                    <Form.Label>Account Holder Name *</Form.Label>
                    <Form.Control type="text" onChange={(e) => { setbank(e.target.value) }} placeholder="Enter Account holder name" style={{ marginBottom: "15px" }} />
                    <Form.Label>Account Number *</Form.Label>
                    <Form.Control type="text" onChange={(e) => { setbank(e.target.value) }} placeholder="Enter Account Number" style={{ marginBottom: "15px" }} />
                    <Form.Label>IFSC Code *</Form.Label>
                    <Form.Control type="text" onChange={(e) => { setbank(e.target.value) }} placeholder="Enter IFSC code" style={{ marginBottom: "15px" }} />

                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <div className="profile-pan" >
                <div>
                  <label htmlFor="">Profile Image</label> <br />
                  <input type="file" onChange={uploadImage} className='edit-image' /> <br />
                </div>
                <div>
                  <label htmlFor="">PAN Card Image</label> <br />
                  <input type="file" onChange={uploadPANCard}  className='edit-image' /> <br />
                </div>
              </div>

              <div className="adhar-front-back">
                <div>
                  <label htmlFor="">Adhar Card Front</label> <br />
                  <input type="file" onChange={uploadAdharFront}className='edit-image' />
                </div>
                <div>
                  <label htmlFor="">Adhar Card Back</label> <br />
                  <input type="file" onChange={uploadAdharBack} className='edit-image' />
                </div>
              </div>
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button className="agent-profile-form-btn" variant="primary" onClick={handleAgentsubmit} type="submit">
              <Link style={{ textDecoration: "none", color: "white" }} to="/agents-dashboard">Submit</Link>
            </Button>
          </Form>
        </div>
        <div className='agent-data-show'>
          <div className="agent-card">
            <div className="upper-container">
              <div className="image-container">
                <img src={image} alt="" height="150px" width="150px" />
              </div>
            </div>
            <div className="lower-container">
              <h3>{name}</h3>
              <h4>{email}</h4>
              <p>{mobileno}</p>

              <div className="bank-details">
                <div className="account-div-1">
                  <div>
                    <h6>Account Holder Name</h6>
                    <p>{accountname}</p>
                  </div>
                  <div>
                    <h6>Account Number</h6>
                    <p>{accountno}</p>
                  </div>
                </div>
                <div className="account-div-2">
                  <div>
                    <h6>Branch Name</h6>
                    <p>{brachname}</p>
                  </div>
                  <div>
                    <h6>IFSC Code</h6>
                    <p>{Ifsc}</p>
                  </div>
                </div>
              </div>

              <div className="id-card">
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-60"
                      src={pancard}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      {/* <h3>PAN Card</h3> */}
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={adharcardfront}
                      alt="Second slide"
                    />

                    <Carousel.Caption>
                      {/* <h3>Adhar Card Front</h3> */}
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={adharcardback}
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      {/* <h3>Adhar Card Back</h3> */}
                     
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>



            </div>
          </div>

        </div>

      </div>
    </div>
  );
}


