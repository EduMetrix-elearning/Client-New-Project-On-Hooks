import React from 'react'
import "./Footer.scss"
import { Link } from 'react-router-dom'
import { ChatboxManager } from '../ChatboxManage/ChatboxManager';
import Button from '@mui/material/Button';
import Qrcode from "../../asset/images/scan-Qr.jpeg"
import facebook from "../../asset/images/SocialImages/facebook.png"
import instagram from "../../asset/images/SocialImages/instagram.png"
import twitter from "../../asset/images/SocialImages/twitter.png"
import linkedin from "../../asset/images/SocialImages/linkedin.png"
import whatsapp from "../../asset/images/SocialImages/whatsapp.png"
import ClearIcon from '@mui/icons-material/Clear';
import { Card, CardContent, TextField, Box, FormControl, InputLabel, Input, FormHelperText, Typography, Grid ,Modal } from '@material-ui/core'

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

export const Footer = () => {
    const [FAQopen, setFAQopen] = React.useState(false)

    const handleFAQopen = () => {
        setFAQopen(true)
    }
    const handleFAQclose = () => setFAQopen(false)

 

    return (
        <footer className='footer'>
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>company</h4>
                        <ul>
                            <li><Link to="/homepage">Home</Link></li>
                            <li><Link to="/AboutUs">About us</Link></li>
                            <li><Link to="/TermOfservices">Terms of services</Link></li>
                            <li><Link to="/PrivacyPolicy">Privacy policy</Link></li>
                            <li><a href="#">Affiliate program</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>FAQs</h4>
                        <ul>
                            <li className='faq-link' onClick={handleFAQopen}>FAQ</li>
                            <Modal open={FAQopen}
                                onClose={handleFAQclose}
                            >
                                <ChatboxManager />
                            </Modal>
                            <li><a href="/whitePaper">White Paper</a></li>
                            <li><a href="/address">Address</a></li>
                            
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Courses</h4>
                        <ul>
                            <li><a href="/fullstack">Full Stack </a></li>
                            <li><a href="/frontend">Frontend</a></li>
                            <li><a href="/backend">Backend</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>follow us</h4>
                        <div className='social-links'>
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
                            <a href="https://wa.me/message/SWBLGFPFK6SYP1">
                                <img src={whatsapp} width="40px" alt="" />
                            </a>
                        </div>
                        <div className="scancode-div">
                            <img src={Qrcode} width="70%" height="175px" alt="" />
                        </div>

                    </div>

                </div>
            </div>
        </footer>
    )
}
