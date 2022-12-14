import React, { useState, useEffect } from 'react'
import './Post.scss'

import { getAgoDate, getNowDate } from '../../../../../utils/date_Utils'
// import { userInfo } from '../../../../../utils/localStorage_Utils'
import { CommentsCount, deletePost, editPost, getAllComments, getAllLikes, getLikeStatus, postComment, postLike, reportPost } from '../../../../../api'
import { useDispatch, useSelector } from 'react-redux'
import { popUp } from '../../../../../slices/popUpSlice'

import ToolTip from '../../../../ToolTip/ToolTip'
import Modal from '../../../../Modal/Modal'

export default function Post({ details, page }) {

    const dispatch = useDispatch()
    const userInfo = useSelector((s) => s.Authentication.user)

    const [likeStatus, setLikeStatus] = useState(false)
    const [likeCount, setLikeCount] = useState(0)
    const [commentsCount, setCommentsCount] = useState(0)
    const [showComments, setShowComments] = useState(false)
    const [comments, setComments] = useState([])
    const [commentInput, setCommentInput] = useState('')
    const [showToolTip, setShowToolTip] = useState(false)

    const [showModal, setShowModal] = useState(false)
    const [showReportModal, setShowReportModal] = useState(false)

    const [postUpdateText, setPostUpdateText] = useState(details.post_content)
    const [postUpdateFile, setPostUpdateFile] = useState()
    const [reportInput, setReportInput] = useState()
    const [commentLimit, setCommentLimit] = useState(5)

    useEffect(() => {
        (async function () {
            // const res = await getLikeStatus({ post_id: details.post_id, student_id: userInfo.id })
            // setLikeStatus(res.data.result[0].count > 0)

            const res1 = await getAllLikes({ post_id: details.post_id })
            setLikeCount(res1.data.result[0].count)
        })()

        getCommentsCount()
        // setPostUpdateText(details.post_content)
    }, [])

    async function getCommentsCount() {
        const res1 = await CommentsCount({ post_id: details.post_id })
        setCommentsCount(res1.data.result[0].count)
    }

    async function getComments() {
        const res = await getAllComments({ post_id: details.post_id })
        setComments(res.data.result)
    }

    // function sliceComments(){
    //     comments.splice()
    // }

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

    function reportHandle() {
        let obj = {
            reported_by: userInfo.id,
            post_id: details.post_id,
            message: reportInput,
        }
        reportPost(obj).then((res) => console.log(res.data)).catch((err) => console.log(err))
    }

    function deletePostHandle() {
        let obj = {
            post_id: details.post_id,
            delete: true
        }
        deletePost(obj).then((res) => console.log(res.data), window.location.reload()).catch((err) => console.log(err))
    }

    function updatesSaveHandle() {
        const data = new FormData();
        data.append("post_id", details.post_id);
        data.append("post_content", postUpdateText);
        data.append("file", postUpdateFile);
        // console.log(data.get('post_id'), data.get('post_content'), data.get('file'))
        editPost(data).then((res) => console.log(res.data)).catch((err) => console.log(err))
    }

    // console.log(details)
    // console.log(showToolTip)
    // console.log(reportInput)
    // console.log(postUpdateFile?.type)

    return (
        <div className='Post'>
            <div className="post_inner_div">
                <div className="account">
                    <div className='profilePic'>
                        {details.student_photo &&
                            <img src={details.student_photo} alt="" />
                        }
                    </div>
                    <div className='title'>
                        <h6>{details.student_fname && details.student_lname ? details.student_fname + ' ' + details.student_lname : null}</h6>
                        <p>{getAgoDate(details.posted_date)}</p>
                    </div>
                    <div className="post_settings">
                        <i className='fa fa-ellipsis-h fa-lg' id={'ToolTipButton' + details.post_id} onClick={() => setShowToolTip(true)} />
                        <ToolTip show={showToolTip} setShow={setShowToolTip} button={'ToolTipButton' + details.post_id}>
                            {page === 'myProfile' ?
                                <div>
                                    <p onClick={() => setShowModal(true)}><i className='fa fa-edit' /> Edit post</p>
                                    <p onClick={() => deletePostHandle()}><i className='fas fa-trash' /> Delete post</p>
                                </div>
                                :
                                <p onClick={() => setShowReportModal(true)}><i className='fa fa-flag' />Report</p>
                            }
                        </ToolTip>
                        <Modal show={showReportModal} setShow={setShowReportModal}>
                            <div className='report_modal'>
                                <h3>Report post</h3>
                                <div className='report_inputs'>
                                    <label htmlFor=""><input type="radio" name='report' onChange={(e) => setReportInput(e.target.value)} value={'Violent or repulsive content'} />Violent or repulsive content</label>
                                    <label htmlFor=""><input type="radio" name='report' onChange={(e) => setReportInput(e.target.value)} value={'Sexual Content'} />Sexual Content</label>
                                    <label htmlFor=""><input type="radio" name='report' onChange={(e) => setReportInput(e.target.value)} value={'Hateful or abusive content'} />Hateful or abusive content</label>
                                    <label htmlFor=""><input type="radio" name='report' onChange={(e) => setReportInput(e.target.value)} value={'Harmful or dangerous acts'} />Harmful or dangerous acts</label>
                                    <label htmlFor=""><input type="radio" name='report' onChange={(e) => setReportInput(e.target.value)} value={'Spam or misleading'} />Spam or misleading</label>
                                    <label htmlFor=""><input type="radio" name='report' onChange={(e) => setReportInput(e.target.value)} value={'Child abuse'} />Child abuse</label>
                                    <label htmlFor=""><input type="radio" name='report' onChange={(e) => setReportInput(e.target.value)} value={'Other : '} />Other
                                        <input type="text" disabled={(reportInput?.slice(0, 5) === 'Other') ? false : true} placeholder='describe...'
                                            onChange={(e) => setReportInput((s) => ('Other : ' + e.target.value))}
                                            value={(reportInput?.slice(0, 5) !== 'Other') ? "" : reportInput?.slice(8)} /></label>
                                </div>
                                <div className="buttons">
                                    <button onClick={() => setShowReportModal(false)}>Cancel</button>
                                    <button onClick={reportHandle}>Report</button>
                                </div>
                            </div>
                        </Modal>
                        <Modal show={showModal} setShow={setShowModal}>
                            <div className="edit_post_modal">
                                <h3>Update post</h3>
                                <div className='post_file'>
                                    <div className='file_div'>
                                        {
                                            (
                                                (/^image\/().*$/).test(postUpdateFile?.type) &&
                                                <img src={URL.createObjectURL(postUpdateFile)} alt="" /> ||
                                                (/^video\/().*$/).test(postUpdateFile?.type) &&
                                                <video src={URL.createObjectURL(postUpdateFile)} controls controlsList='nodownload'></video> ||
                                                (/^application\/().*$/).test(postUpdateFile?.type) &&
                                                <object data={URL.createObjectURL(postUpdateFile)} type="application/pdf"></object>
                                            )
                                            ||
                                            (
                                                details.post_photo &&
                                                <img src={details.post_photo} alt="" /> ||
                                                details.post_video &&
                                                <video src={details.post_video} controls controlsList='nodownload'></video> ||
                                                details.post_document &&
                                                <object data={details.post_document + "?#zoom=80&scrollbar=0&toolbar=0&navpanes=1&statusbar=1&view=fit"} type="application/pdf"></object>
                                            )
                                        }
                                    </div>
                                    <label className='upload_icon' htmlFor="post_update_file">
                                        <i className='fa fa-upload'></i>
                                        <input type="file" hidden id='post_update_file' onChange={(e) => setPostUpdateFile(e.target.files[0])} />
                                    </label>
                                </div>
                                <div className='footer'>
                                    <input type="text" value={postUpdateText} onChange={(e) => setPostUpdateText(e.target.value)} />
                                    <button onClick={updatesSaveHandle} >Save changes</button>
                                </div>
                            </div>
                        </Modal>
                    </div>
                </div>
                <div className="content">
                    {details.post_content && <p>{details.post_content}</p>}
                    <div className="file">
                        {details.post_photo &&
                            <img src={details.post_photo} alt="" /> ||
                            details.post_video &&
                            <video src={details.post_video} controls controlsList='nodownload'></video> ||
                            details.post_document &&
                            <object data={details.post_document} width="100%" height="100%" type="application/pdf"></object>
                        }
                    </div>
                </div>
                {/* <div className="reactions">
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
                </div> */}
                <div className='buttons'>
                    <button onClick={likeHandle}>
                        <p>
                            <i>{
                                likeStatus ?
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z" /></svg>
                                    : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M96 191.1H32c-17.67 0-32 14.33-32 31.1v223.1c0 17.67 14.33 31.1 32 31.1h64c17.67 0 32-14.33 32-31.1V223.1C128 206.3 113.7 191.1 96 191.1zM512 227c0-36.89-30.05-66.92-66.97-66.92h-99.86C354.7 135.1 360 113.5 360 100.8c0-33.8-26.2-68.78-70.06-68.78c-46.61 0-59.36 32.44-69.61 58.5c-31.66 80.5-60.33 66.39-60.33 93.47c0 12.84 10.36 23.99 24.02 23.99c5.256 0 10.55-1.721 14.97-5.26c76.76-61.37 57.97-122.7 90.95-122.7c16.08 0 22.06 12.75 22.06 20.79c0 7.404-7.594 39.55-25.55 71.59c-2.046 3.646-3.066 7.686-3.066 11.72c0 13.92 11.43 23.1 24 23.1h137.6C455.5 208.1 464 216.6 464 227c0 9.809-7.766 18.03-17.67 18.71c-12.66 .8593-22.36 11.4-22.36 23.94c0 15.47 11.39 15.95 11.39 28.91c0 25.37-35.03 12.34-35.03 42.15c0 11.22 6.392 13.03 6.392 22.25c0 22.66-29.77 13.76-29.77 40.64c0 4.515 1.11 5.961 1.11 9.456c0 10.45-8.516 18.95-18.97 18.95h-52.53c-25.62 0-51.02-8.466-71.5-23.81l-36.66-27.51c-4.315-3.245-9.37-4.811-14.38-4.811c-13.85 0-24.03 11.38-24.03 24.04c0 7.287 3.312 14.42 9.596 19.13l36.67 27.52C235 468.1 270.6 480 306.6 480h52.53c35.33 0 64.36-27.49 66.8-62.2c17.77-12.23 28.83-32.51 28.83-54.83c0-3.046-.2187-6.107-.6406-9.122c17.84-12.15 29.28-32.58 29.28-55.28c0-5.311-.6406-10.54-1.875-15.64C499.9 270.1 512 250.2 512 227z" /></svg>
                            }</i>{likeCount === 0 ? "No Likes" : likeCount === 1 ? likeCount + " like" : likeCount + " likes"}
                        </p>
                    </button>
                    <button onClick={() => (setShowComments(!showComments), getComments(), setCommentLimit(5))}>
                        <p>
                            <i className='fa fa-comment'></i>
                            {commentsCount === 0 ? "No Comments" : commentsCount === 1 ? commentsCount + " Comment" : commentsCount + " Comments"}
                        </p>
                    </button>
                </div>
                <div className="commentInput">
                    <img src={userInfo?.photo} alt="" />
                    <input type="text" placeholder='write your comments here...' value={commentInput}
                        onChange={(e) => setCommentInput(e.target.value)} />
                    <i className='fa fa-paper-plane' onClick={commentPostHandle}></i>
                </div>
                {
                    showComments &&
                    <div className='comments'>
                        {comments &&
                            comments.slice(0, commentLimit).map((comment, index) => {
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
                        {comments.length > commentLimit &&
                            <p className='show_more' onClick={() => setCommentLimit((s) => s + 5)}>Show more comments</p>
                        }
                    </div>
                }
            </div >
        </div >
    )
}