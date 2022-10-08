import React, { useEffect, useState } from 'react'
import './ProfileView.scss'
import { userInfo } from '../../../../utils/localStorage_Utils'
import { getDetails, getFollowers, getFollowings } from '../../../../api'

export default function ProfileView() {

    const [profileDetails, setProfileDetails] = useState()
    const [follows, setFollows] = useState()

    useEffect(() => {
        getDetails().then((res) => setProfileDetails(res.data.result[0]))
        getFollowers({ "student_id": userInfo.id }).then((res) => setFollows((s) => ({ ...s, followers: res.data.result[0].followers })))
        getFollowings({ "student_id": userInfo.id }).then((res) => setFollows((s) => ({ ...s, followings: res.data.result[0].following })))
    }, [])

    console.log(profileDetails)
    console.log(follows)

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
                <p>About</p>
                <p>Hobbies</p>
                <p>Skills</p>
                <p>Qualifications</p>
                <p>Life goals</p>
            </div>
        </div>
    )
}