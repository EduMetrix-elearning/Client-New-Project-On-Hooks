import React, { useState } from 'react'
import './UploadDocuments.scss'

import { userInfo } from '../../../../utils/localStorage_Utils'
import { imageToDB } from '../../../../api'
import { useNavigate } from 'react-router-dom'

import image_dummy_idcard_front from '../../../../asset/images/SignUp/idcard_front.jpg'
import image_dummy_idcard_back from '../../../../asset/images/SignUp/idcard_back.jpg'
import image_dummy_user from '../../../../asset/images/SignUp/user_dummy.png'

export default function UploadDocuments() {

    const navigate = useNavigate()

    const [images, setImages] = useState()

    function inputHandle(e) {
        setImages((state) => ({
            ...state,
            [e.target.name]: e.target.files[0],
            [e.target.name + "_URL"]: URL.createObjectURL(e.target.files[0])
        }))
    }

    async function submitHandle() {
        const formData = new FormData()
        formData.append("student_id", localStorage.getItem("userId"));
        formData.append("student_photo", images.photo);
        formData.append("student_idfront", images.identity_card_front);
        formData.append("student_idback", images.identity_card_back);
        imageToDB(formData).then((res) => {
            console.log(res.data)
            res.status === 200 && navigate('/login')
        })
    }

    console.log(images)

    return (
        <div className='UploadDocuments'>
            <h5>Upload the following documents and complete your registration</h5>
            <div className='items'>
                <div className='row1'>
                    <div className='item'>
                        <label htmlFor="photo">
                            <i className='fa fa-upload' aria-hidden="true"></i>
                        </label>
                        <input type="file" name="photo" id="photo" onChange={inputHandle} hidden />
                        <img src={images?.photo_URL || image_dummy_user} alt="" />
                        <figcaption>Photo</figcaption>
                    </div>
                </div>
                <div className='row2'>
                    <div className='item'>
                        <label htmlFor="identity_card_front">
                            <i className='fa fa-upload' aria-hidden="true"></i>
                        </label>
                        <input type="file" name="identity_card_front" id="identity_card_front"
                            onChange={inputHandle} hidden />
                        <img src={images?.identity_card_front_URL || image_dummy_idcard_front} alt="" />
                        <figcaption>Identity Card - front</figcaption>
                    </div>
                    <div className='item'>
                        <label htmlFor="identity_card_back">
                            <i className='fa fa-upload' aria-hidden="true"></i>
                        </label>
                        <input type="file" name="identity_card_back" id="identity_card_back"
                            onChange={inputHandle} hidden />
                        <img src={images?.identity_card_back_URL || image_dummy_idcard_back} alt="" />
                        <figcaption>Identity Card - back</figcaption>
                    </div>
                </div>
            </div>
            <div className='buttons'>
                <button onClick={submitHandle}>submit</button>
            </div>
        </div>
    )
}