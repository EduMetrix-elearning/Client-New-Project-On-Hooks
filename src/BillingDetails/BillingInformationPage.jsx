import React, { useState } from 'react'
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
import qrscan from "../asset/images/scan-Qr.jpeg"
import { InvoiceNumber } from 'invoice-number'


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
    const invoicenumber = InvoiceNumber.next('A00001')
    const date = new Date()
    let day = date.getDate()
    let month = date.getMonth()+1;
    let year = date.getFullYear()
    const [name,setName]=useState("jayasmita")
    const [address,setAddress]=useState("Balasore")
    const [email,setEmail]=useState("jaya@gmail.com")
    const [phone,setPhone]=useState("9438833152")
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className='billing-pages-main-div'>
            <div className='edumetrix-heading'>
                <h1 style={{color:""}}>EduMetrix Learning Solutions Pvt Ltd</h1>
                <p>CIN NO:U80900KA2019PTC126649</p>
            </div>

            <div className='img-invoice'>
                <img src={edumetriximage} width="100px" alt="" />
                <div>
                    <p>Invoice No # <span style={{ fontWeight: "bold" }}>{invoicenumber}</span></p>
                    <p>Invoice Date # <span style={{ fontWeight: "bold" }}>{`${day+1}-${month}-${year}`}</span></p>
                </div>
            </div>


            {/* billig-by-to-div */}
            <div className='billed-by-to-div'>
                <div className='billed-by'>
                    <h3>Billed By</h3>
                    <p>EduMetrix Learning Solutions Pvt Ltd</p>
                    <p>
                        #5, 3rd floor, Dr, Sir M. Visvesvaraya Rd, off Bannerghatta Main <br /> Road, Bengalore,  <br /> Karnataka,India-560076
                    </p>
                    <p><span style={{ fontWeight: "bold" }}>GSTIN</span>:29AAFCE5813R1ZZ</p>
                    <p><span style={{ fontWeight: "bold" }}>PAN</span>:AAFCE5813R</p>
                </div>
                <div className='billed-to'>
                    <div className='heading-edit-icon'>

                        <h3>Billed To</h3>
                        <div className="edit-icon" onClick={handleOpen}>Edit<EditIcon /></div>
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
                        <TextField fullWidth sx={{ m: 1 }} type="text" id="standard-basic" label="Name *" variant="standard" />
                        <TextField fullWidth sx={{ m: 1 }} type="number" id="standard-basic" label="Phone *" variant="standard" />
                        <TextField fullWidth sx={{ m: 1 }} type="email" id="standard-basic" label="Email *" variant="standard" />
                        <TextField fullWidth sx={{ m: 1 }} type="text" id="standard-basic" label="Address *" variant="standard" style={{marginBottom:"10px"}}/> 

                        <select name="" id="" style={{marginBottom:"10px"}}>
                            <option value="">MODE</option>
                            <option value="">cash</option>
                            <option value="">A/c</option>
                            <option value="">pending</option>
                        </select> <br /> 

                        <select name="" id="">
                            <option value="">Status</option>
                            <option value="">Complete</option>
                            <option value="">pending</option>
                        </select> <br />

                        <Button fullwidth sx={{ marginTop: "20px" }} variant="contained" className='student-form-filling-btn'>Submit</Button>

                    </Box>
                </Modal>
                    </div>
                </div>
            </div>


            {/* amount-table */}
            <div className="amount-table">
                <Table bordered hover>
                    <thead style={{ backgroundColor: "#164e64", color: "white" }} >
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
                            <td>₹45,000</td>
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
                            <p>₹45,000</p>
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
                    <thead style={{ backgroundColor: "#164e64", color: "white" }} >
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
                            <td>
                              cash
                            </td>
                            <td>
                               complete
                            </td>
                            <td>₹40,100</td>
                            <td>₹53,100</td>

                        </tr>

                    </tbody>
                </Table>
            </div>


            {/* Terms of services and bank details */}
            <div className='terms-of-service-bank-acc-main-div'>
                <div className='terms-of-condition-div'>
                    <h6 style={{ fontWeight: 'bold' }}>Terms and Conditions</h6>
                    <p>1.Lorem, ipsum dolor sit amet consectetur aam totam aliquid aliquam sunt soluta nihil.</p>
                    <p>2.Lorem, ipsum dolor sit amet consectetur aam totam aliquid aliquam sunt soluta nihil.</p>
                    <h6 style={{ fontWeight: 'bold' }}>Additional</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates iure sit incidunt et aliquid repellat. Dolor, aperiam molestiae doloribus aspernatur vitae non iste vel, neque laboriosam minima nesciunt pariatur vero.</p>
                    <h6 style={{ fontWeight: 'bold' }}>Attachment</h6>
                    <p><a href="">Link1</a></p>
                    <p><a href="">Link1</a></p>
                    <p><a href="">Link1</a></p>
                </div>
                <div className='bank-details-div'>
                    <h6 style={{ fontWeight: 'bold' }}>Bank and Payment Details</h6>
                    <div className='account-qr-code'>
                        <div className='account-details'>
                            <div style={{ display: "flex",gap:"21px", justifyContent: "space-between" }}>
                                <p >Account Holder Name</p>
                                <p style={{ fontWeight: 'bold' }}>Jayasmita Sahu</p>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <p>Bank Name</p>
                                <p style={{ fontWeight: 'bold' }}>SBI bank</p>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <p>Account Number</p>
                                <p style={{ fontWeight: 'bold' }}>2466101014567</p>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <p>IFSC Code</p>
                                <p style={{ fontWeight: 'bold' }}>246RECCON</p>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <p>Branch Name</p>
                                <p style={{ fontWeight: 'bold' }}>Bannarghatta Branch</p>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <p>UPI ID</p>
                                <p style={{ fontWeight: 'bold' }}>12345678</p>
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
    )
}
