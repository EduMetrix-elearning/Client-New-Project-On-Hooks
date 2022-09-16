import React from 'react'
import './Wall.scss'

import CreatePost from './createPost/createPost'
import Post from './post/post'

export default function Wall() {
    return (
        <div className='Wall'>
            <div className='wall_inner_div'>
                <div className="wall_scroll">
                    <CreatePost />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
        </div>
    )
}


