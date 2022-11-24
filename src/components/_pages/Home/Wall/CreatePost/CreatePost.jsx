import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './CreatePost.scss'
import Resizer from 'react-image-file-resizer';

import { popUp } from '../../../../../slices/popUpSlice'

import image_photo from '../../../../../asset/images/Wall/image.png'
import image_video from '../../../../../asset/images/Wall/video-camera.png'
import image_doc from '../../../../../asset/images/Wall/files.png'

import { getFormattedDate, getNowDate } from '../../../../../utils/date_Utils'
import { GeneratePostId, toBase64 } from '../../../../../utils/home_Utils'
// import { userInfo } from '../../../../../utils/localStorage_Utils'
import { createPost, postDocPost, postImagePost, postVideoPost } from '../../../../../api'

import Modal from '../../../../Modal/Modal'
import { useEffect } from 'react';

export default function CreatePost({ setRefresh }) {

    const dispatch = useDispatch()
    const userInfo = useSelector((s) => s.Authentication.user)

    const [post, setPost] = useState({})
    const [error, setError] = useState()
    const [modalShow, setModalShow] = useState(false)
    const [fileInput, setFileInput] = useState({ type: "" })

    async function submitPost() {
        if (!post.text) dispatch(popUp("Cannot post with empty field ..."))
        else {
            let obj = {
                post_content: post.text,
                student_id: userInfo.id,
                posted_date: getNowDate()
            }
            console.log(obj)
            const response = await createPost(obj)
            console.log(response)
        }
    }

    async function fileInputHandle(e) {
        setFileInput((s) => ({ ...s, file: e.target.files[0] }))
    }

    const resizeFile = (file) =>
        new Promise((resolve) => {
            Resizer.imageFileResizer(
                file,
                600,
                600,
                "JPEG",
                50,
                0,
                (uri) => {
                    resolve(uri);
                },
                "base64"
            );
        });


    async function submitFilePost() {
        if (fileInput.type === "image") {
            let obj = {
                "student_id": userInfo?.id,
                "post_photo": await resizeFile(fileInput.file),
                "post_content": fileInput.text || "",
                "posted_date": getFormattedDate(),
                "post_id": GeneratePostId()
            }
            // console.log(obj)
            postImagePost(obj)
                .then((res) => console.log(res.data), setModalShow(false), window.location.reload())
                .catch((err) => console.log(err))
        }
        if (fileInput.type === "video") {
            let postVideo = new FormData();
            postVideo.append("student_id", userInfo.id)
            postVideo.append("post_video", fileInput.file)
            postVideo.append("post_content", fileInput.text || "")
            postVideo.append("posted_date", getFormattedDate())
            postVideo.append("post_id", GeneratePostId())
            console.log(postVideo)
            postVideoPost(postVideo)
                .then((res) => console.log(res.data), setModalShow(false))
                .catch((err) => console.log(err))
        }
        if (fileInput.type === "document") {
            var postDoc = new FormData();
            postDoc.append("student_id", userInfo.id)
            postDoc.append("post_document", fileInput.file)
            postDoc.append("post_content", fileInput.text || "")
            postDoc.append("posted_date", getFormattedDate())
            postDoc.append("post_id", GeneratePostId())

            console.log(postDoc)
            postDocPost(postDoc)
                .then((res) => console.log(res.data), setModalShow(false))
                .catch((err) => console.log(err))
        }
    }

    // console.log(post)
    // console.log(fileInput)
    // console.log(userInfo)

    return (
        <div className='CreatePost'>
            <div className='createPost_inner_div'>
                <div className='header'>
                    <p>Create Post</p>
                </div>
                <div className='body'>
                    <img src={userInfo?.photo} alt="" />
                    <input type="text" placeholder='write something here...'
                        onChange={(e) => setPost((state) => ({ ...state, text: e.target.value }))}
                        autoFocus />
                </div >
                <footer>
                    <div className="icons">
                        <div className='icon' onClick={() => (setModalShow(true), setFileInput({ type: 'image' }))}>
                            <img src={image_photo} alt="" />
                            <p>Images</p>
                        </div>
                        <div className='icon' onClick={() => (setModalShow(true), setFileInput({ type: 'video' }))}>
                            <img src={image_video} alt="" />
                            <p>Videos</p>
                        </div>
                        <div className='icon' onClick={() => (setModalShow(true), setFileInput({ type: 'document' }))}>
                            <img src={image_doc} alt="" />
                            <p>Documents</p>
                        </div>
                    </div >
                    <button onClick={submitPost}>Post</button>
                </footer >
            </div >
            <Modal show={modalShow} setShow={setModalShow}>
                <h5>Create Post</h5>
                {fileInput.file && <i className='fa fa-edit' onClick={() => setFileInput(({ file, ...rest }) => rest)} />}
                {!fileInput.file &&
                    <div className='fileUploadInterface'>
                        <h6>Drop your file here</h6>
                        <p>OR</p>
                        <label htmlFor={fileInput.type + "InputUpload"} >Upload file</label>
                    </div>
                }
                {fileInput.type === "image" &&
                    <div className='fileUploadButton'>
                        <input id='imageInputUpload' type="file" name={fileInput.type} accept="image/*" onChange={fileInputHandle} />
                        {fileInput.file && <img src={URL.createObjectURL(fileInput.file)} alt="" />}
                    </div>
                }
                {fileInput.type === "video" &&
                    <div className='fileUploadButton'>
                        <input id='videoInputUpload' type="file" name={fileInput.type} accept="video/*" onChange={(e) => fileInputHandle(e)} />
                        {fileInput.file && <video src={URL.createObjectURL(fileInput.file)} controls={true}></video>}
                    </div>
                }
                {fileInput.type === "document" &&
                    <div className='fileUploadButton'>
                        <input id='documentInputUpload' type="file" name={fileInput.type} accept=".pdf" onChange={fileInputHandle} />
                        {fileInput.file && <object data={URL.createObjectURL(fileInput.file)} type="application/pdf"></object>}
                    </div>
                }
                <div className='fileUploadText'>
                    <input type="text" onChange={(e) => setFileInput((s) => ({ ...s, text: e.target.value }))}
                        placeholder="Write something about your post here ..." />
                    <button onClick={submitFilePost}>Post</button>
                </div>
            </Modal>
        </div >
    )
}