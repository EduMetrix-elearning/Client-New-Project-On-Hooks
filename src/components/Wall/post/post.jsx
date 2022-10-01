import React, { useState, useEffect } from 'react'
import './Post.scss'

import { getAgoDate } from '../../../utils/dateUtils'
import { userInfo } from '../../../utils/localStorageUtils'
import { CommentsCount, getLikeStatus, postLike } from '../../../api'

export default function Post({ details }) {

    const [likeStatus, setLikeStatus] = useState(false)
    const [likeCount, setLikeCount] = useState(details.like_count)
    const [commentsShow, setCommentsShow] = useState(false)
    const [commentsCount, setCommentsCount] = useState()

    useEffect(() => {
        (async function () {
            // console.log(details.post_id, userInfo.id)
            const res = await getLikeStatus({ post_id: details.post_id, student_id: userInfo.id })
            // setLikeStatus(res.data.status)
            const res1 = await CommentsCount({ post_id: details.post_id })
            // setCommentsCount(res1.data.count)
            // console.log(res.data)
        })()
    }, [])

    async function likeHandle() {
        setLikeStatus(!likeStatus)
        likeStatus ? setLikeCount(c => c + 1) : setLikeCount(c => c - 1)
        const res = await postLike({
            post_id: details.post_id,
            student_id: userInfo.id,
            like_status: likeStatus,
        })
        console.log(res.data)
    }

    return (
        <div className='Post'>
            <div className="post_inner_div">
                <div className="account">
                    {details.student_photo &&
                        <img src={details.student_photo} alt="" />
                    }
                    <div className='title'>
                        <h6>{details.student_fname && details.student_lname ? details.student_fname + ' ' + details.student_lname : null}</h6>
                        <p>{getAgoDate(details.posted_date)}</p>
                    </div>
                    <div className="post_settings">
                        <i className='fa fa-ellipsis-h fa-lg'></i>
                    </div>
                </div>
                <div className="content">
                    <p>{details.post_content}</p>
                    {details.post_photo &&
                        <img src={details.post_photo} alt="" /> ||
                        details.post_video &&
                        <video src={details.post_video} controls controlsList='nodownload'></video> ||
                        details.post_document &&
                        <object data={details.post_document + "?#zoom=80&scrollbar=0&toolbar=0&navpanes=1&statusbar=1&view=fit"} type="application/pdf"></object>
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
                    <button onClick={likeHandle}>
                        <i className='fa fa-thumbs-up' >{likeCount} Liked  {likeStatus} </i>
                    </button>
                    {/* <button><i className="fa">&#xf087;</i> like</button> */}
                    <button><i className='fas fa-comment'></i>Comment</button>
                </div>
                <div className="comments">
                    <img src={userInfo.photo} alt="" />
                    <input type="text" placeholder='write your comments here...' />
                    <i></i>
                </div>
            </div>
        </div>
    )
}