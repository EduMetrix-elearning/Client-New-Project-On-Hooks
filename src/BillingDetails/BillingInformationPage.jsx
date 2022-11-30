import React, { useState,useRef } from 'react'
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
    const [name, setName] = useState("jayasmita")
    const [address, setAddress] = useState("Balasore")
    const [email, setEmail] = useState("jaya@gmail.com")
    const [phone, setPhone] = useState("9438833152")
    const [open, setOpen] = React.useState(false);
    const [coursefees, setCoursefees] = useState("45,000")
    const [mode,setMode]=useState("cash")
    const [status,setstatus]=useState("complete")



    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleinvoiceForm=()=>{
        console.log(name,address,email,phone)
    }
    const print=()=>{
        window.print()
    }

    return (
        <div className='billing-pages-main-div'>
            <div className="print-button">
           
            <LocalPrintshopIcon  onClick={print}/>
            </div>
            <div className='edumetrix-heading'>
                <img src={edumetriximage} width="100px" alt="" />
                <div>

                    <h1 style={{ color: "" }}>EduMetrix Learning Solutions Pvt Ltd</h1>
                    <p style={{textAlign:"center"}}>CIN NO:U80900KA2019PTC126649</p>
                </div>
            </div>

            {/* <div className='img-invoice'>
                <div>
                    <p>Invoice No # <span style={{ fontWeight: "bold" }}>{invoicenumber}</span></p>
                    <p>Invoice Date # <span style={{ fontWeight: "bold" }}>{`${day + 1}-${month}-${year}`}</span></p>
                </div>
            </div> */}


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
                    <div style={{textAlign:"right"}}>
                        <p>Invoice No # <span style={{ fontWeight: "bold" }}>{invoicenumber}</span></p>
                        <p>Invoice Date # <span style={{ fontWeight: "bold" }}>{`${day+1}-${month}-${year}`}</span></p>
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
                                <TextField fullWidth sx={{ m: 1 }} type="text" id="standard-basic" label="Name *" variant="standard" onChange={(e)=>{setName(e.target.value)}}/>
                                <TextField fullWidth sx={{ m: 1 }} type="number" id="standard-basic" label="Phone *" variant="standard" onChange={(e)=>{setPhone(e.target.value)}} />
                                <TextField fullWidth sx={{ m: 1 }} type="email" id="standard-basic" label="Email *" variant="standard" onChange={(e)=>{setEmail(e.target.value)}}/>
                                <TextField fullWidth sx={{ m: 1 }} type="text" id="standard-basic" label="Address *" variant="standard" onChange={(e)=>{setAddress(e.target.value)}} style={{ marginBottom: "10px" }} />
                                <div style={{ display: "flex", justifyContent: "space-between" }}>

                                    <select name="" id="" value={mode} onChange={(e) => { setMode(e.target.value) }} style={{ marginBottom: "10px" }}>
                                        <option value="">MODE</option>
                                        <option value="cash">cash</option>
                                        <option value="A/c">A/c</option>
                                    </select> <br />
                                    <select name="" id="" value={coursefees} onChange={(e) => {setCoursefees(e.target.value) }}>
                                        <option value="">Courses</option>
                                        <option value="45,000">One Time Payment</option>
                                        <option value="85,000">Aggrement</option>
                                        <option value="85,000">Online Course</option>
                                    </select>
                                </div>

                                <select name="" id="" value={status} onChange={(e)=>{setstatus(e.target.value)}}>
                                    <option value="">Status</option>
                                    <option value="complete">Complete</option>
                                    <option value="pending">Pending</option>
                                </select> <br />


                                <Button fullwidth sx={{ marginTop: "20px" }} variant="contained" className='student-form-filling-btn' onClick={handleinvoiceForm}>Submit</Button>

                            </Box>
                        </Modal>
                    </div>
                </div>
            </div>


            {/* amount-table */}
            <div className="amount-table">
                <Table bordered hover>
                    <thead  className='amount-table-thead'>
                        <tr >
                            <th>Item</th>
                            <th>Amount</th>
                            <th>GST Rate</th>
                            <th>CGST</th>
                            <th>SGST</th>
                            <th>Total</th>
                            <th>Amount Paid</th>
                            <th>Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1. FullStack Javascript Course (HSN/SAC:99831) </td>
                            <td>₹{coursefees}</td>
                            <td>18%</td>
                            <td>₹4,050</td>
                            <td>₹4,050</td>
                            <td>₹53,100</td>
                            <td>₹10,000</td>
                            <td>₹43,100</td>
                        </tr>

                    </tbody>
                </Table>
                <div className='total-amount-details-main-div'>
                    <p style={{ fontWeight: "bold" }}>Total(In Words):FIFTY THREE THOUSAND ONE HUNDRED RUPEES ONLY</p>
                    <div className='total-amount-div'>
                        <div style={{ display: "flex", gap: "35px", justifyContent: "space-between" }}>
                            <p style={{ fontWeight: "bold" }}>Amount</p>
                            <p>₹{coursefees}</p>
                           
                        </div>
                        <div style={{ display: "flex", gap: "35px", justifyContent: "space-between" }}>
                            <p style={{ fontWeight: "bold" }}>SGST</p>
                            <p>₹4,050</p>
                        </div>
                        <div style={{ display: "flex", gap: "35px", justifyContent: "space-between" }}>
                            <p style={{ fontWeight: "bold" }}>CGST</p>
                            <p>₹4,050</p>
                        </div>
                        <hr style={{ fontWeight: "bold", justifyContent: "space-between" }} />
                        <div style={{ display: "flex", gap: "35px" }}>
                            <p style={{ fontWeight: "bold" }}>Total(INR)</p>
                            <p>₹53,100</p>
                        </div>

                        <div style={{ padding: "20px 40px", backgroundColor: "rgb(232, 236, 239)", textAlign: "center" }}>
                            signature
                        </div>
                    </div>
                </div>
            </div>

            {/* received-amount-status */}
            <div className='received-amount-status'>
                <Table bordered hover>
                    <thead >
                        <tr >
                            <th>Date</th>
                            <th>Mode</th>
                            <th>Status</th>
                            <th>Received</th>
                            <th>Balanced</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>May 20 2020</td>
                            <td>{mode}</td>
                            <td>{status}</td>
                            <td>₹40,100</td>
                            <td>₹53,100</td>

                        </tr>

                    </tbody>
                </Table>
            </div>


            {/* Terms of services and bank details */}
            <div className='Terms-of-condition-full-main-div'>
                <div className='terms-of-service-bank-acc-main-div'>


                    <div className='terms-of-condition-div'>
                        <h6 style={{ fontWeight: 'bold' }}>Terms and Conditions</h6>
                        <p>1.Lorem, ipsum dolor sit amet consectetur aam totam aliquid aliquam sunt soluta nihil.</p>
                        <p>2.Lorem, ipsum dolor sit amet consectetur aam totam aliquid aliquam sunt soluta nihil.</p>
                        
                    </div>
                    <div className='bank-details-div'>
                        <h6 style={{ fontWeight: 'bold' }}>Bank and Payment Details</h6>
                        <div className='account-qr-code'>
                            <div className='account-details'>
                                <div style={{ display: "flex",gap:"20px", justifyContent: "space-between" }}>
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
                                    <p style={{ fontWeight: 'bold',textAlign:'right' }}>HSR Layout, Bangalore</p>
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
            </div>


        </div>
    )
}
