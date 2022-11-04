import React, { useState } from 'react'
import './ReferYourFriend.scss'
import Modal from '../../../../components/Modal/Modal'

import image_email from '../../../../asset/images/Earnings/email.png'
import image_facebook from '../../../../asset/images/Earnings/facebook.png'
import image_gmail from '../../../../asset/images/Earnings/gmail.png'
import image_linkedin from '../../../../asset/images/Earnings/linkedin.png'
import image_twitter from '../../../../asset/images/Earnings/twitter.png'
import image_whatsapp from '../../../../asset/images/Earnings/whatsapp.png'
import { useEffect } from 'react'
import { getDetails, getSocialMediaSharingContent } from '../../../../api'

export default function ReferYourFriend() {

    const [modalShow, setModalShow] = useState(false)
    const [userDetails, setUserDetails] = useState({})
    const [socialShareContent, setSocialShareContent] = useState()
    const [copyBtnStatus, setCopyBtnStatus] = useState('Copy')

    useEffect(() => {
        getDetails().then((res) => setUserDetails(res.data.result[0])).catch((err) => console.log(err))
        getSocialMediaSharingContent().then((res) => setSocialShareContent(res.data.data)).catch((err) => console.log(err));
        (function (d, s, id) {
            var js,
                fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = '//connect.facebook.net/en_US/sdk.js';
            fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'facebook-jssdk');
        window.fbAsyncInit = () => {
            window.FB.init({
                appId: '2147281692069859',
                cookie: true, // enable cookies to allow the server to access the session
                xfbml: true, // parse social plugins on this page
                version: 'v7.0', // use version 2.1
            })
        }
    }, [])

    function referHandle(type) {
        type === 'email' && window.open(`sms:?&body=reference-id=${userDetails.reference_id} install the edumetrix app and paste the given reference id while registring yourself \n\n https://play.google.com/store/apps/details?id=com.edumetrix \n\n This is our content you can also share it. \n\n ${socialShareContent[0].video}`)
        type === 'facebook' && window.open(`http://www.facebook.com/sharer.php?u=https://play.google.com/store/apps/details?id=com.edumetrix&quote=reference-id=${userDetails.reference_id} install the edumetrix app and paste the given reference id while registring yourself`)
        type === 'gmail' && window.open("https://mail.google.com/mail/?extsrc=mailto&url=" + encodeURIComponent(`mailto:?subject=Edumetrix Learning Solution&body=reference-id=${userDetails.reference_id} install the edumetrix app and paste the given reference id while registring yourself \n\n https://play.google.com/store/apps/details?id=com.edumetrix \n\n This is our content you can also share it. \n\n ${socialShareContent[0].video}`))
        type === 'linkedin' && window.open(`https://www.linkedin.com/shareArticle?mini=true&url=http://edumetrix.io/&title=download the edumetrix app Webpages&summary=chillyfacts.com&source=https://play.google.com/store/apps/details?id=com.edumetrix \n\n This is our content you can also share it. \n\n ${socialShareContent[0].video}`)
        type === 'twitter' && window.open(`https://twitter.com/intent/tweet?via=edumetrix.io&text=reference-id=${userDetails.reference_id} install the edumetrix app and paste the given reference id while registring yourself \n\n https://play.google.com/store/apps/details?id=com.edumetrix This is our content you can also share it. \n\n ${socialShareContent[0].video}`)
        type === 'whatsapp' && window.open(`https://web.whatsapp.com/send?text=reference-id=${userDetails.reference_id} install the edumetrix app and paste the given reference id while registring yourself \n\n https://play.google.com/store/apps/details?id=com.edumetrix \n\n This is our content you can also share it. \n\n ${socialShareContent[0].video}`)
    }

    function facebookShareHandle() {
        window.FB.login((res) => console.log(res))
    }

    function copyBtnHandle() {
        navigator.clipboard.writeText(userDetails.reference_id)
        setCopyBtnStatus('Copied')
        setTimeout(() => {
            setCopyBtnStatus('Copy')
        }, 2000)
    }

    // console.log(userDetails)
    // console.log(socialShareContent)

    return (
        <div className='ReferYourFriend'>
            <div className="title">
                <h6>Refer your friend and earn more coins!</h6>
            </div>
            <div className="referal">
                <p>{userDetails.reference_id}</p>
                <div className="buttons">
                    <button onClick={() => copyBtnHandle()}
                        title="Copy reference id">{copyBtnStatus}</button>
                    <button onClick={() => setModalShow(true)} title="Share your referal">Share</button>
                </div>
            </div>
            <div className="socialMedia">
                <div onClick={() => facebookShareHandle()}>
                    <img src={image_facebook} alt="" />
                    Share on Facebook</div>
                <div>
                    <img src={image_twitter} alt="" />
                    Share on Twitter</div>
                <div>
                    <img src={image_linkedin} alt="" />
                    Share on LinkedIn</div>
            </div>
            <Modal show={modalShow} setShow={setModalShow}>
                <img name='email' src={image_email} alt="" onClick={(e) => referHandle(e.target.name)} />
                <img name='facebook' src={image_facebook} alt="" onClick={(e) => referHandle(e.target.name)} />
                <img name='gmail' src={image_gmail} alt="" onClick={(e) => referHandle(e.target.name)} />
                <img name='linkedin' src={image_linkedin} alt="" onClick={(e) => referHandle(e.target.name)} />
                <img name='twitter' src={image_twitter} alt="" onClick={(e) => referHandle(e.target.name)} />
                <img name='whatsapp' src={image_whatsapp} alt="" onClick={(e) => referHandle(e.target.name)} />
            </Modal>
        </div>
    )
}