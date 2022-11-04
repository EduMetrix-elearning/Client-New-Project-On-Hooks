import React, { useEffect, useState } from 'react'
import './ProfileView.scss'
import { userInfo } from '../../../../utils/localStorage_Utils'
import { getDetails, getFollowers, getFollowings } from '../../../../api'
import Modal from '../../../Modal/Modal'
import EditProfile from '../EditProfile/EditProfile'

import image_edit from '../../../../asset/images/My profile/edit.png'


export default function ProfileView() {

    const [profileDetails, setProfileDetails] = useState()
    const [follows, setFollows] = useState()
    const [section, setSection] = useState("About")
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        getDetails().then((res) => setProfileDetails(res.data.result[0]))
        getFollowers({ "student_id": userInfo.id }).then((res) => setFollows((s) => ({ ...s, followers: res.data.result[0].followers })))
        getFollowings({ "student_id": userInfo.id }).then((res) => setFollows((s) => ({ ...s, followings: res.data.result[0].following })))
    }, [])

    // console.log(profileDetails)
    // console.log(follows)

    return (
        <div className='ProfileView'>
            <div className='edumetrix_details'>
                <h5>EduMetrix ID: {profileDetails?.reference_id}
                    <i className='fa fa-copy' onClick={() => navigator.clipboard.writeText(profileDetails?.reference_id)} />
                </h5>
                <p>Edumetrix profile score : 100%</p>
            </div>
            <div className='image justify-center align-center'>
                <img src={profileDetails?.student_photo} alt="" />
                <h5>{profileDetails?.student_fname} {profileDetails?.student_lname}</h5>
            </div>
            <div className='personal'>
                <div className='followings'>
                    <p>{follows?.followers} Followers</p>
                    <p>{follows?.followings} Following</p>
                </div>
            </div>
            <span className='separator'></span>
            <div className='professional'>
                {profileDetails &&
                    <div className='details'>
                        <div>
                            <h6>Personal : </h6>
                            <div className="line">
                                <span>State : </span>
                                <span>{profileDetails.student_state}</span>
                            </div>
                            <div className="line">
                                <span>Country : </span>
                                <span>{profileDetails.student_country}</span>
                            </div>
                            <div className="line">
                                <span>Date of Birth : </span>
                                <span>{profileDetails.student_dob}</span>
                            </div>
                            <div className="line">
                                <span>Fathername: </span>
                                <span>{profileDetails.fathername}</span>
                            </div>
                            <div className="line">
                                <span>Mothername: </span>
                                <span>{profileDetails.mothername}</span>
                            </div>
                            <div className="line">
                                <span>Description : </span>
                                <span>{profileDetails.student_description}</span>
                            </div>
                        </div>
                        <div>
                            <h6>Hobbies : </h6>
                            <p>{profileDetails.hobbies || 'Not available'}</p>
                        </div>
                        <div>
                            <h6>Skills : </h6>
                            <p>{profileDetails.skills || 'Not available'}</p>
                        </div>
                        <div>
                            <h6>Qualifications : </h6>
                            <div className='line'>
                                <span>University : </span>
                                <span>{profileDetails.university}</span>
                            </div>
                            <div className='line'>
                                <span>School :</span>
                                <span>{profileDetails.school}</span>
                            </div>
                            <div className='line'>
                                <span>Course Name :</span>
                                <span>{profileDetails.courseName}</span>
                            </div>
                            <div className='line'>
                                <span>Specification :</span>
                                <span>{profileDetails.specification}</span>
                            </div>
                            <div className='line'>
                                <span>Course Year :</span>
                                <span>{profileDetails.courseYear}</span>
                            </div>
                        </div>
                        <div>
                            <h6>Life Ambition</h6>
                            <p>{profileDetails.lifeAmbition}</p>
                        </div>
                    </div>
                }
                <div className='edit_button'>
                    <button onClick={() => setShowModal(true)}>
                        <img src={image_edit} alt="" />
                        Edit profile
                    </button>
                </div>
            </div>
            <Modal show={showModal} setShow={setShowModal}>
                <EditProfile currentDetails={profileDetails} />
            </Modal>
        </div >
    )
}