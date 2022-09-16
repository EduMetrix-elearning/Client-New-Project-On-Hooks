import React from 'react'
import './createPost.scss'

import image_user from '../../../images/Wall/profilepic.jpeg'
import image_photo from '../../../images/Wall/image.png'
import image_video from '../../../images/Wall/video-camera.png'
import image_doc from '../../../images/Wall/files.png'

export default function createPost() {
    return (
        <div className='CreatePost'>
            <div className='createPost_inner_div'>
                <header>
                    <p>Create Post</p>
                </header>
                <body>
                    <img src={image_user} alt="" />
                    <input type="text" placeholder='write something here...' autoFocus/>
                </body>
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
                    <button>Post</button>
                </footer>
            </div>
        </div>
    )
}