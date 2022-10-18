import React, { useState, useEffect } from 'react'
import './Profile.scss'

import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import ProfileView from '../../components/_pages/Profile/ProfileView/ProfileView'
import Post from '../../components/Wall/Post/Post'
import { getProfilePosts } from '../../api'

export default function Profile() {

    const [pageNumber, setPageNumber] = useState(1)
    const [pageLength, setPageLength] = useState(5)
    const [posts, setPosts] = useState([])


    useEffect(() => {
        getProfilePosts(pageNumber, pageLength).then((res) => setPosts(res.data.data))
    }, [])


    return (
        <div className='Profile grid'>
            <Header />
            <NavBar currPage={'My profile'} />
            <div className='profile_content'>
                <ProfileView />
                <div className="profile_wall">
                    {posts && posts.map((post, i) => {
                        return (
                            <Post key={i} details={post} page={'myProfile'}/>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}