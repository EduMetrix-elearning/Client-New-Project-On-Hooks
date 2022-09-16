import React from 'react'
import './post.scss'

import image_cat from '../../../images/Wall/cat.jpg'
import image_user from '../../../images/Wall/profilepic.jpeg'

export default function post() {
    return (
        <div className='post'>
            <div className="post_inner_div">
                <div className="account">
                    <img src={image_user} alt="" />
                    <div className='title'>
                        <h6>Muhammed Faisal</h6>
                        <p>6h ago</p>
                    </div>
                </div>
                <div className="content">
                    <p>അരണയുടെ ഇംഗ്ലീഷ് വാക്ക് google
                        ചെയ്യാതെ പറയുന്നവന് കുതിരപ്പവൻ!😁
                        ©Dwayne Paterson</p>
                    <img src={image_cat} alt="" />
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