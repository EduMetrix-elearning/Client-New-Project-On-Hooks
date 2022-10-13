import React, { useState } from 'react'
import './CreatePost.scss'
import { useDispatch } from 'react-redux'
import { popUp } from '../../../slices/popUpSlice'

import image_photo from '../../../asset/images/Wall/image.png'
import image_video from '../../../asset/images/Wall/video-camera.png'
import image_doc from '../../../asset/images/Wall/files.png'

import { getNowDate } from '../../../utils/date_Utils'
import { userInfo } from '../../../utils/localStorage_Utils'
import { createPost } from '../../../api'

import Modal from '../../Modal/Modal'

export default function CreatePost() {

    const dispatch = useDispatch()

    const [post, setPost] = useState({})
    const [error, setError] = useState()
    const [modalShow, setModalShow] = useState(true)

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

    return (
        <div className='CreatePost'>
            <div className='createPost_inner_div'>
                <header>
                    <p>Create Post</p>
                </header>
                <div className='body'>
                    <img src={userInfo?.photo} alt="" />
                    <input type="text" placeholder='write something here...'
                        onChange={(e) => setPost((state) => ({ ...state, text: e.target.value }))}
                        autoFocus />
                </div >
                <footer>
                    <div className="icons">
                        <div className='icon'>
                            <img src={image_photo} alt="" />
                            <p>Images</p>
                        </div>
                        <div className='icon'>
                            <img src={image_video} alt="" />
                            <p>Videos</p>
                        </div>
                        <div className='icon'>
                            <img src={image_doc} alt="" />
                            <p>Documents</p>
                        </div>
                    </div>
                    <button onClick={submitPost}>Post</button>
                </footer>
            </div>
            <Modal show={modalShow} setShow={setModalShow}>
                <p>hai hellow</p>
            </Modal>
        </div>
    )
}