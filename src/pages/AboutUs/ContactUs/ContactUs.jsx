import React from 'react'
import './ContactUs.scss'

export default function ContactUs() {
    return (
        <div className='ContactUs'>
            <column className='contact'>
                <div className='address'>
                    <h5><i className='fa fa-building' /> CORPORATE OFFICE</h5>
                    <div>
                        <h6>India</h6>
                        <p>
                            Sir M. Visvesvaraya Rd <br />
                            Nyanappana Halli, Hulimavu <br />
                            Bengaluru, Karnataka 560076
                        </p>
                    </div>
                    <div>
                        <h6>Estonia</h6>
                        <p>
                            13, Harju 2, Tatari 8, Tallinn, <br />
                            Estonia 10111
                        </p>
                    </div>
                </div>
                <div className='email'>
                    <h5><i className='fa fa-envelope' /> Email Us</h5>
                    <h6>For General Queries :</h6>
                    <a href="mailto:contact@edumetrix.io">contact@edumetrix.io</a>
                    <h6>For Business Queries & Collaboration :</h6>
                    <a href="mailto:partner@edumetrix.io">partner@edumetrix.io</a>
                </div>
            </column>
            <column className='location'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.3909637181173!2d77.6007894146605!3d12.88256329091437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae152f8ce529fd%3A0xc01b258b080f1218!2sEdumetrix%20Learning%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1591788428770!5m2!1sen!2sin"
                    width="100%" height="100%"
                    frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0" title="address"
                ></iframe>
            </column>
        </div>
    )
}