import React, { useState, useEffect } from 'react'
import './Wall.scss'

import CreatePost from './createPost/createPost'
import Post from './post/post'
import { getPost } from '../../api'

export default function Wall() {

    const [pageNumber, setPageNumber] = useState(1)
    const [pageLength, setPageLength] = useState(5)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function asyncFuction() {
            const response = await getPost(pageNumber, pageLength)
            // console.log(response.data)
            setPosts(response.data.data)
        }
        asyncFuction()
    }, [])

    return (
        <div className='Wall'>
            <div className='wall_inner_div'>
                <div className="wall_scroll">
                    <CreatePost />
                    {posts && posts.map((post, i) => {
                        return (
                            <Post key={i} details={post} />
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}


