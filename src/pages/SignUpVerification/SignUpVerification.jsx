import React, { useState } from 'react'
import './SignUpVerification.scss'

import image_coin from '../../asset/images/coin.png'
import UploadDocuments from '../../components/_pages/Login/UploadDocuments/UploadDocuments'
import SignUpDetailsForm from '../../components/_pages/Login/SignUpDetailsForm/SignUpDetailsForm'

export default function SignUpVerification() {

    const [page, setPage] = useState("fillUpForm")

    return (
        <div className='SignUpVerification'>
            <div className="content">
                {
                    page === "fillUpForm" ? <SignUpDetailsForm setPage={setPage} />
                        : page === 'uploadDocuments' && <UploadDocuments />
                }
                <div className='company'>
                    <img src={image_coin} alt="" />
                    <h3>EduMetrix.io</h3>
                    <hr />
                </div>
                {page === "fillUpForm" &&
                    <div className="refer">
                        <input type="text" placeholder='Referal code (optional)' />
                    </div>
                }
            </div>
        </div>
    )
}