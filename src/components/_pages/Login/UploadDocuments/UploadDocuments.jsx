import React, { useState } from 'react'
import './UploadDocuments.scss'

import { userInfo } from '../../../../utils/localStorageUtils'
import { imageToDB } from '../../../../api'
import { useNavigate } from 'react-router-dom'

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
        formData.append("student_id", userInfo.id);
        formData.append("student_photo", images.photo);
        formData.append("student_idfront", images.identity_card_front);
        formData.append("student_idback", images.identity_card_back);
        const res = imageToDB(formData)
        console.log(res)
        res.status === 200 && navigate('/login')
    }

    return (
        <div className='UploadDocuments'>
            <h5>Upload the following documents and complete your registration</h5>
            <div>
                <div className='item'>
                    <p>Photo</p>
                    <label htmlFor="photo">
                        <i className='fa fa-upload' aria-hidden="true"></i>
                    </label>
                    <input type="file" name="photo" id="photo" onChange={inputHandle} hidden />
                    {images?.photo_URL && <img src={images.photo_URL} alt="" />}
                </div>
                <div className='item'>
                    <p>Identity Card - front</p>
                    <label htmlFor="identity_card_front">
                        <i className='fa fa-upload' aria-hidden="true"></i>
                    </label>
                    <input type="file" name="identity_card_front" id="identity_card_front"
                        onChange={inputHandle} hidden />
                    {images?.identity_card_front_URL &&
                        <img src={images?.identity_card_front_URL} alt="" />}
                </div>
                <div className='item'>
                    <p>Identity Card - back</p>
                    <label htmlFor="identity_card_back">
                        <i className='fa fa-upload' aria-hidden="true"></i>
                    </label>
                    <input type="file" name="identity_card_back" id="identity_card_back"
                        onChange={inputHandle} hidden />
                    {images?.identity_card_back_URL &&
                        <img src={images?.identity_card_back_URL} alt="" />}
                </div>
            </div>
            <div>
                <button onClick={submitHandle}>submit</button>
            </div>
        </div>
    )
}