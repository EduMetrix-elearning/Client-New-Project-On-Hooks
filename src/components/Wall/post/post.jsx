import React from 'react'
import './post.scss'

import image_cat from '../../../asset/images/Wall/cat.jpg'
import image_user from '../../../asset/images/Wall/profilepic.jpeg'

export default function post({ details }) {
    return (
        <div className='post'>
            <div className="post_inner_div">
                <div className="account">
                    {details.student_photo &&
                        <img src={details.student_photo} alt="" />
                    }
                    <div className='title'>
                        <h6>{details.student_fname && details.student_lname ? details.student_fname + ' ' + details.student_lname : null}</h6>
                        <p>6h ago</p>
                    </div>
                </div>
                <div className="content">
                    <p>{details.post_content}</p>
                    {details.post_photo &&
                        <img src={details.post_photo} alt="" />
                    }
                </div>
                <div className="reactions">
                    <div className='emojies'>
                        <span>&#x1F600;</span>
                        <span>&#x1F490;</span>
                        <span>&#x1F4A5;</span>
                        <span>&#x1F44C;</span>
                        <span>&#x1F44D;</span>
                    </div>
                    <div className='actions_count'>
                        <p>comments 123 share 506</p>
                    </div>
                </div>
                <div className='buttons'>
                    <button><i className='fa fa-thumbs-up' /> Liked</button>
                    {/* <button><i className="fa">&#xf087;</i> like</button> */}
                    <button><i className='fas fa-comment'></i>Comment</button>
                </div>
                <div className="comments">
                    <img src={image_user} alt="" />
                    <input type="text" placeholder='write your comments here...' />
                    <i></i>
                </div>
            </div>
        </div>
    )
}