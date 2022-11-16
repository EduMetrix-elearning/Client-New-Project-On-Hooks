import React from 'react'
import './address.scss'

export const Address = () => {
    return (
        <div className='address-main-div'>
            <column className='contact'>
                <div className='address'>
                    <h5><i className='fa fa-building' /> CORPORATE OFFICE</h5>
                    <div className='city-heading'>
                        <h4>Bangalore</h4>
                        <p>
                            #5, 3rd floor, Dr, Sir M. Visvesvaraya Rd, off Bannerghatta Main Road, Bengaluru, Karnataka 560076
                        </p>
                    </div>
                    <div className='city-heading'>
                        <h4>Kerala(Nilambur)</h4>
                        <p>EduMetrix Learning Solutions Pvt Ltd <br />
                            2nd Floor, Near Rajadhani Furniture
                            Janathapadi, Nilambur,
                            Malappuram (District)
                            Kerala-679329</p>
                    </div>
                </div>
                <div className='email'>
                    <h5 className='email-header'><i className='fa fa-envelope' /> Email Us</h5>
                    <h6 className='general-queries'>For General Queries :
                        <a class="email-anchor" href="mailto:contact@edumetrix.io">contact@edumetrix.io</a>
                    </h6>

                    <h6 className='bussiness-queries'>For Business Queries & Collaboration :</h6>
                    <a class="email-anchor" href="mailto:partner@edumetrix.io">partner@edumetrix.io</a>
                </div>
            </column>
            <column className='location'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.3909637181173!2d77.6007894146605!3d12.88256329091437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae152f8ce529fd%3A0xc01b258b080f1218!2sEdumetrix%20Learning%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1591788428770!5m2!1sen!2sin"
                    width="100%" height="50%"
                    className='google-map-iframe'
                    aria-hidden="false" title="address"
                ></iframe>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.749183314636!2d76.22949231475356!3d11.279838791981124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba63b3551c39fdf%3A0xe044d4cdadf5f357!2sEduMetrix%20Learning%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1668417754107!5m2!1sen!2sin" 
                width="100%" height="50%" 
                className='google-map-iframe'
                aria-hidden="false" title="address"
                ></iframe>
                
            </column>
        </div>
    )
}

