import React, { useState, useEffect } from 'react'
import './Post.scss'

import { getAgoDate, getNowDate } from '../../../utils/dateUtils'
import { userInfo } from '../../../utils/localStorageUtils'
import { CommentsCount, getAllComments, getAllLikes, getLikeStatus, postComment, postLike } from '../../../api'
import { useDispatch } from 'react-redux'
import { popUp } from '../../../slices/popUpSlice'

export default function Post({ details }) {

    const dispatch = useDispatch()

    const [likeStatus, setLikeStatus] = useState(false)
    const [likeCount, setLikeCount] = useState(0)
    const [commentsCount, setCommentsCount] = useState(0)
    const [showComments, setShowComments] = useState(false)
    const [comments, setComments] = useState([])
    const [commentInput, setCommentInput] = useState('')
    const [showPostSettings, setShowPostSettings] = useState(false)

    useEffect(() => {
        (async function () {
            // const res = await getLikeStatus({ post_id: details.post_id, student_id: userInfo.id })
            // setLikeStatus(res.data.result[0].count > 0)

            const res1 = await getAllLikes({ post_id: details.post_id })
            setLikeCount(res1.data.result[0].count)
        })()

        getCommentsCount()
    }, [])

    console.log(showPostSettings)

    async function getCommentsCount() {
        const res1 = await CommentsCount({ post_id: details.post_id })
        setCommentsCount(res1.data.result[0].count)
    }

    async function getComments() {
        const res = await getAllComments({ post_id: details.post_id })
        setComments(res.data.result)
    }

    async function commentPostHandle() {
        if (!commentInput) { dispatch(popUp("Comment box is empty, please write down your comments")); return }
        const res = await postComment({
            post_id: details.post_id,
            student_id: userInfo.id,
            comments: commentInput,
            creation_date: getNowDate()
        })
        getCommentsCount()
        setCommentInput('')
    }

    async function likeHandle() {
        setLikeStatus(!likeStatus)
        likeStatus ? setLikeCount(c => c - 1) : setLikeCount(c => c + 1)
        const res = await postLike({
            post_id: details.post_id,
            student_id: userInfo.id,
            like_status: likeStatus,
        })
    }

    return (
        <div className='Post'>
            <div className="post_inner_div">
                <div className="account">
                    {details.student_photo &&
                        <img src={details.student_photo} alt="" />
                    }
                    <div className='title'>
                        <h6>{details.student_fname && details.student_lname ? details.student_fname + ' ' + details.student_lname : null} {details.post_id}</h6>
                        <p>{getAgoDate(details.posted_date)}</p>
                    </div>
                    <div className="post_settings">
                        <i className='fa fa-ellipsis-h fa-lg' onClick={() => setShowPostSettings(!showPostSettings)} />
                        <div className={'popUp ' + (showPostSettings ? 'show' : 'hide')}
                            onBlur={() => setShowPostSettings(false)} tabIndex='0' >
                            <ul>
                                <li>Report</li>
                            </ul>
                        </div>
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
                        <i className={(likeStatus ? 'fa' : 'far') + ' fa-thumbs-up'} >{likeCount} </i>
                    </button>
                    <button onClick={() => (setShowComments(!showComments), getComments())}>
                        <i className='fas fa-comment'>{commentsCount}Comment</i>
                    </button>
                </div>
                <div className="commentInput">
                    <img src={userInfo.photo} alt="" />
                    <input type="text" placeholder='write your comments here...' value={commentInput}
                        onChange={(e) => setCommentInput(e.target.value)} />
                    <i className='fa fa-paper-plane' onClick={commentPostHandle}></i>
                </div>
                {showComments &&
                    <div className='comments'>
                        {comments &&
                            comments.map((comment, index) => {
                                return (
                                    <div className='person' key={index}>
                                        <div className='person_details'>
                                            <img src={comment.student_photo} alt="" />
                                            <p className='student_name'>{comment.student_fname + " " + comment.student_lname}</p>
                                        </div>
                                        <div className="comment">
                                            <p className='comment_text'>{comment.comments}</p>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                }
            </div>
        </div >
    )
}