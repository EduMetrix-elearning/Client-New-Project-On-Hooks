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
                    <h6>For General Quieres :</h6>
                    <p>contact@edumetrix.io</p>
                    <h6>For Business Quieres & Collaboration :</h6>
                    <p>partner@edumetrix.io</p>
                </div>
            </column>
            <column className='location'>

            </column>
        </div>
    )
}