import React, { useState } from 'react'
import { useEffect } from 'react'
import { getFollowers } from '../../../../api'
import './DisplayFriends.scss'

export default function DisplayFriends({ details, followButton }) {

    const [followersCount, setFollowersCount] = useState()

    useEffect(() => {
        getFollowers(details?.student_id).then((res) => setFollowersCount(res.data.result[0]))
    }, [])

    // console.log(details)
    // console.log(followersCount)

    return (
        <div className='DisplayFriends'>
            <div className=''>
                <img src={details?.student_photo} alt="" />
            </div>
            <div className='details'>
                <h6>{details?.student_fname} {details?.student_lname}</h6>
                <p>{details?.student_country}</p>
                <p>{details?.student_university}</p>
                <p>College</p>
                <p>{followersCount?.followers} Followers</p>
                <p>Date</p>
            </div>
            <div className='align-end'>
                <button onClick={() => followButton(details)}>follow</button>
            </div>
        </div>
    )
}