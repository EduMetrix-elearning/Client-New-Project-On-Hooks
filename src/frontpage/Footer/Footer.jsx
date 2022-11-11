import React from 'react'
import "./footer.scss"
import Qrcode from "../../asset/images/scan-Qr.jpeg"
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>company</h4>
                        <ul>
                            <li><Link to="/homepage">Home</Link></li>
                            <li><Link to="/AboutUs">about us</Link></li>
                            <li><Link to="/TermOfservices">our services</Link></li>
                            <li><Link to="/PrivacyPolicy">privacy policy</Link></li>
                            <li><a href="#">affiliate program</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>get help</h4>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">shiping</a></li>
                            <li><a href="#">returns</a></li>
                            <li><a href="#">order status</a></li>
                            <li><a href="#">payment options</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>online shop</h4>
                        <ul>
                            <li><a href="#">watch</a></li>
                            <li><a href="#">bag</a></li>
                            <li><a href="#">shoes</a></li>
                            <li><a href="#">dress</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>follow us</h4>
                        <div className='social-links'>
                            <a href="https://www.facebook.com/edumetrix.io/">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://twitter.com/Edumetrix_io">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.instagram.com/edumetrix.io/">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.linkedin.com/company/edumetrix-io/">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#">
                                <i class="fab fa-whatsapp"></i>
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
