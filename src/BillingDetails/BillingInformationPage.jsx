import React, { useState, useRef } from 'react'
import "./BillingInformation.scss";
import edumetriximage from "../asset/images/Login/coin.png";
import EditIcon from '@mui/icons-material/Edit';
import { Table } from "react-bootstrap"
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@material-ui/core';
import ClearIcon from '@mui/icons-material/Clear';
import qrscan from "../asset/images/scan-qr-payment.jpeg"
import { InvoiceNumber } from 'invoice-number'
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import { WbIncandescentTwoTone } from '@mui/icons-material';
import converter from 'number-to-words';
import seal from "../asset/images/sealLogo.png"
import emailjs from '@emailjs/browser';


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

export const BillingInformationPage = () => {
    const componentRef = useRef();
    const invoicenumber = InvoiceNumber.next('A00001')
    const date = new Date()
    let day = date.getDate()
    let month = date.getMonth() + 1;
    let year = date.getFullYear()
    const [name, setName] = useState("Shafan")
    const [address, setAddress] = useState("Bangalore")
    const [email, setEmail] = useState("Shafan@gmail.com")
    const [phone, setPhone] = useState("9482445699")
    const [open, setOpen] = React.useState(false);
    const [coursefees, setCoursefees] = useState("45000")
    const [mode, setMode] = useState("cash")
    const [status, setstatus] = useState("complete")
    const [sgst, setSgst] = useState("4050")
    const [cgst, setCgst] = useState("4050")
    const [billingData, setBillingData] = useState([])
    const [amountPaid, setAmountpaid] = useState(0)
    const form = useRef();


    const total = ((parseInt(coursefees) * (18 / 100)) + parseInt(coursefees))
    console.log(total)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleinvoiceForm = () => {
        if (name != "" || address != "" || email != "" || phone != "" || mode != "" || status != "" || coursefees != "") {
            alert("Billing Successfully")
            setOpen(false)
            
        }
        else {
            alert("Fill all the details")
        }
    }
    const printmethod = () => {
        window.print()
    }


    return (
        <div className='billing-pages-main-div'>
            <div className="print-button">

                <LocalPrintshopIcon onClick={printmethod} />
            </div>
            <div className='edumetrix-heading'>
                <img src={edumetriximage} width="100px" alt="" />
                <div>

                    <h1 style={{ color: "" }}>EduMetrix Learning Solutions Pvt Ltd</h1>
                    <p style={{ textAlign: "center" }}>CIN NO:U80900KA2019PTC126649</p>
                </div>
            </div>


            {/* billig-by-to-div */}
            <div className='billed-by-to-div'>
                <div className='billed-by'>
                    <h5>Billed By</h5>
                    <p>EduMetrix Learning Solutions Pvt Ltd</p>
                    <p>
                        #5, 3rd floor, Dr, Sir M. Visvesvaraya Rd, off Bannarghatta Main <br /> Road, Bangalore,  <br /> Karnataka,India-560076
                    </p>
                    <p><span style={{ fontWeight: "bold" }}>GSTIN</span>:29AAFCE5813R1ZZ</p>
                    <p><span style={{ fontWeight: "bold" }}>PAN</span>:AAFCE5813R</p>
                </div>

                <div className='billed-to'>
                    <div className='heading-edit-icon'>

                        <h5>Billed To</h5>
                        <div className="edit-icon" onClick={handleOpen}>Edit<EditIcon /></div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                        <p>Invoice No # <span style={{ fontWeight: "bold" }}>{invoicenumber}</span></p>
                        <p>Invoice Date # <span style={{ fontWeight: "bold" }}>{`${day}-${month}-${year}`}</span></p>
                    </div>
                    <div>
                        <label htmlFor="name">Name: <span style={{ fontWeight: "bold" }}>{name}</span></label> <br />

                        <label htmlFor="Address">Address:<span style={{ fontWeight: "bold" }}>{address}</span></label> <br />

                        <label htmlFor="email">Email:<span style={{ fontWeight: "bold" }}>{email}</span></label> <br />

                        <label htmlFor="Phone">Phone No:<span style={{ fontWeight: "bold" }}>{phone}</span></label>

                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Box className="inner-model">
                                    <Typography id="modal-modal-title" variant="h6" component="h4">
                                        Billing Form
                                    </Typography>
                                    <Button onClick={handleClose}>
                                        <ClearIcon />
                                    </Button>
                                </Box>
                                <hr />
                                <TextField fullWidth sx={{ m: 1 }} type="text" id="standard-basic" label="Name *" variant="standard" onChange={(e) => { setName(e.target.value) }} />
                                <TextField fullWidth sx={{ m: 1 }} type="number" id="standard-basic" label="Phone *" variant="standard" onChange={(e) => { setPhone(e.target.value) }} />
                                <TextField fullWidth sx={{ m: 1 }} type="email" id="standard-basic" label="Email *" variant="standard" onChange={(e) => { setEmail(e.target.value) }} />
                                <TextField fullWidth sx={{ m: 1 }} type="email" id="standard-basic" label="Amount Paid *" variant="standard" onChange={(e) => { setAmountpaid(e.target.value) }} />
                                <TextField fullWidth sx={{ m: 1 }} type="text" id="standard-basic" label="Address *" variant="standard" onChange={(e) => { setAddress(e.target.value) }} style={{ marginBottom: "10px" }} />
                                <div style={{ display: "flex", justifyContent: "space-between" }}>

                                    <select name="" id="" value={mode} onChange={(e) => { setMode(e.target.value) }} style={{ marginBottom: "10px" }}>
                                        <option value="">MODE</option>
                                        <option value="cash">cash</option>
                                        <option value="A/c">A/c</option>
                                    </select> <br />
                                    <select name="" id="" value={coursefees} onChange={(e) => { setCoursefees(e.target.value) }}>
                                        <option value="">Courses</option>
                                        <option value="45000">One Time Payment</option>
                                        <option value="85000">Aggrement</option>
                                        <option value="85000">Online Course</option>
                                    </select>
                                </div>

                                <select name="" id="" value={status} onChange={(e) => { setstatus(e.target.value) }}>
                                    <option value="">Status</option>
                                    <option value="complete">Complete</option>
                                    <option value="pending">Pending</option>
                                </select> <br />


                                <Button fullwidth sx={{ marginTop: "20px" }} variant="contained" className='student-form-filling-btn' onClick={handleinvoiceForm} >Submit</Button>

                            </Box>
                        </Modal>
                    </div>
                </div>
            </div>


            {/* amount-table */}
            <div className="amount-table">
                <Table bordered hover>
                    <thead className='amount-table-thead'>
                        <tr style={{ textAlign: "center" }}>
                            <th>Item</th>
                            <th>Amount</th>
                            <th>GST</th>
                            <th>CGST</th>
                            <th>SGST</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1. FullStack Javascript Course (HSN/SAC:99831) </td>
                            <td>₹{coursefees}</td>
                            <td>18%</td>
                            <td>₹{cgst}</td>
                            <td>₹{sgst}</td>

                        </tr>

                    </tbody>
                </Table>
                <div className='total-amount-details-main-div'>

                    <div>
                        <p style={{ fontWeight: "bold" }}>Total(In Words):{converter.toWords(parseInt(total) - parseInt(amountPaid))} only</p>
                        <div className='course-details-seal-logo'>
                            <div>
                                <h6 style={{ fontWeight: 'bold', textDecoration: "underline" }}>COURSE DETAILS</h6>
                                <div className="billing-course-details">
                                    <p className='billing-course-details-p-tag'>a. Name of the Course : Full Stack JavaScript Development (Web & Mobile) </p>
                                    <p className='billing-course-details-p-tag'>  b. Duration : 6 Months</p>
                                    <p className='billing-course-details-p-tag'> c. Commencement Date: {`${day}/${month}/${year}`}</p>
                                    <p className='billing-course-details-p-tag'> d. Syllabus: HTML, CSS, JavaScript , React Native, React js, Node, MySQL, GitHub & Azure.</p>
                                    <p className='billing-course-details-p-tag'> e. Program Details: The above said course is a 6 Months training program which is conducted offline at our training centres or the facilities arranged by EduMetrix Learning Solutions Pvt Ltd.</p>
                                </div>
                            </div>
                            <div>
                                {/* <img src={seal} width="150px" className='seal' alt="" /> */}
                            </div>
                        </div>
                    </div>
                    <div className='total-amount-div'>
                        <div style={{ display: "flex", gap: "35px", justifyContent: "space-between" }}>
                            <p style={{ fontWeight: "bold" }}>Total</p>
                            <p>₹{total}</p>

                        </div>
                        <div style={{ display: "flex", gap: "35px", justifyContent: "space-between" }}>
                            <p style={{ fontWeight: "bold" }}>Paid</p>
                            <p>₹{amountPaid}</p>
                        </div>

                        <hr style={{ fontWeight: "bold", justifyContent: "space-between" }} />
                        <div style={{ display: "flex", gap: "35px" }}>
                            <p style={{ fontWeight: "bold" }}>Balance</p>
                            <p>₹{parseInt(total) - parseInt(amountPaid)}</p>
                        </div>

                        <div style={{ padding: "20px 45px", backgroundColor: "rgb(232, 236, 239)", textAlign: "center" }}>
                            {/* signature */}
                        </div>
                    </div>
                </div>
            </div>

            {/* received-amount-status */}
            <div className='received-amount-status'>
                <Table bordered hover>
                    <thead >
                        <tr style={{ textAlign: "center" }}>
                            <th>Date</th>
                            <th>Mode</th>
                            <th>Status</th>
                            <th>Received</th>
                            <th>Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{`${day}-${month}-${year}`}</td>
                            <td>{mode}</td>
                            <td>{status}</td>
                            <td>₹{amountPaid}</td>
                            <td>₹{parseInt(total) - parseInt(amountPaid)}</td>

                        </tr>

                    </tbody>
                </Table>
                {coursefees == 85000 ?
                    <><p>Balance Amount <span style={{ fontWeight: "bold" }}>₹{parseInt(total) - parseInt(amountPaid)}</span> should be paid as 12 EMI.</p>
                        <p>EMI Amount of <span style={{ fontWeight: "bold" }}>₹{Math.floor((parseInt(total) - parseInt(amountPaid)) / 12)}  </span>should be paid every month after Placement. </p></> : ""}

            </div>


            {/* Terms of services and bank details */}
            <div className='Terms-of-condition-full-main-div'>
                <div className='terms-of-service-bank-acc-main-div'>


                    <div className='terms-of-condition-div'>
                        <h6 style={{ fontWeight: 'bold' }}>Terms and Conditions</h6>
                        <p>1.Pay after placement mode students should submit all the required documents within 15 days of commencement  date. </p>
                        <p>2.Pay after placement mode students  should start paying EMI from first month after the placement. </p>
                        <p>3.Pay after placement mode students , all EMI es should be paid on or before 7th of every-month.</p>
                    </div>
                    <div className='bank-details-div'>
                        <h6 style={{ fontWeight: 'bold' }}>Bank and Payment Details</h6>
                        <div className='account-qr-code'>
                            <div className='account-details'>
                                <div style={{ display: "flex", gap: "20px", justifyContent: "space-between" }}>
                                    <p >Customer Name</p>
                                    <p style={{ fontWeight: 'bold', textAlign: "right" }}>Edumetrix Learning Solutions Pvt Ltd</p>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <p>Bank Name</p>
                                    <p style={{ fontWeight: 'bold' }}>Equitas bank</p>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <p>Account Number</p>
                                    <p style={{ fontWeight: 'bold' }}>200001430045</p>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <p>IFSC Code</p>
                                    <p style={{ fontWeight: 'bold' }}>ESFB0003003</p>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <p>Branch Name</p>
                                    <p style={{ fontWeight: 'bold', textAlign: 'right' }}>HSR Layout, Bangalore</p>
                                </div>

                            </div>
                            <div>
                                <p>Scan QR Code</p>
                                <img src={qrscan} width="150px" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-email-number">
                    For any enquiry,reach out via email at <a href="">edumetrixlearningsolutions@gmail.com</a> call on <a href="tel:+919074851744">9074851744</a>

                </div>
                <div className="thanks-tag">
                    Thank You for Choosing EduMetrix Learning Solutions Pvt Ltd As Your Learning Partner

                </div>
            </div>


        </div>
    )
}




