import React, { useEffect, useState } from 'react'
import './ProfileView.scss'
import { userInfo } from '../../../../utils/localStorage_Utils'
import { getDetails, getFollowers, getFollowings } from '../../../../api'
import Modal from '../../../Modal/Modal'
import EditProfile from '../EditProfile/EditProfile'


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
            <div className='image justify-center align-center'>
                <img src={profileDetails?.student_photo} alt="" />
            </div>
            <div className='personal'>
                <h5>{profileDetails?.student_fname} {profileDetails?.student_lname}</h5>
                <div className='id'>
                    <p>{profileDetails?.reference_id} <i className='fa fa-copy' /></p>
                    <p>score : 100%</p>
                </div>
                <div className='followings'>
                    <p>{follows?.followers} Followers</p>
                    <p>{follows?.followings} Following</p>
                </div>
            </div>
            <span className='separator'></span>
            <div className='professional'>
                <div className='titles'>
                    <p onClick={() => setSection("About")}>About</p>
                    <p onClick={() => setSection("Hobbies")}>Hobbies</p>
                    <p onClick={() => setSection("Skills")}>Skills</p>
                    <p onClick={() => setSection("Qualifications")}>Qualifications</p>
                    <p onClick={() => setSection("Life goals")}>Life goals</p>
                </div>

                {profileDetails && section === "About" &&
                    <div className='details'>
                        <p>
                            <span>state: {profileDetails.student_state}</span>
                            <span>country: {profileDetails.student_country}</span>
                        </p>
                        <p>dob: {profileDetails.student_dob}</p>
                        <p>
                            <span>fathername: {profileDetails.fathername}</span>
                            <span>mothername: {profileDetails.mothername}</span>
                        </p>
                        <p>description: {profileDetails.student_description}</p>
                    </div>
                }
                {
                    profileDetails && section === "Hobbies" &&
                    <div className='details'>
                        <p>{profileDetails.hobbies}</p>
                    </div>
                }
                {
                    profileDetails && section === "Skills" &&
                    <div className='details'>
                        <p>{profileDetails.skills}</p>
                    </div>
                }
                {
                    profileDetails && section === "Qualifications" &&
                    <div className='details'>
                        <p>{profileDetails.university}</p>
                        <p>{profileDetails.school}</p>
                        <p>{profileDetails.courseName}</p>
                        <p>{profileDetails.specification}</p>
                        <p>{profileDetails.courseYear}</p>
                    </div>
                }
                {
                    profileDetails && section === "Life goals" &&
                    <div className='details'>
                        <p>{profileDetails.lifeAmbition}</p>
                    </div>
                }

                <div className='edit_button'>
                    <button onClick={() => setShowModal(true)}>
                        Edit
                    </button>
                </div>

            </div>
            <Modal show={showModal} setShow={setShowModal}>
                <EditProfile />
            </Modal>
        </div>
    )
}