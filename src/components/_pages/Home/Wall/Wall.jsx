import React, { useState, useRef, useCallback } from 'react'
import './Wall.scss'

import CreatePost from './CreatePost/CreatePost'
import Post from './Post/Post'
import useInfiniteLoading from '../../../../utils/infiniteLoading_Util'
import { useEffect } from 'react'
import Loader from '../../../Loader/Loader'

import image_networkError from '../../../../asset/images/networkError.png'

export default function Wall() {

    const [pageNumber, setPageNumber] = useState(1)
    const [refresh, setRefresh] = useState(false)

    const { loading, error, posts, hasMore } = useInfiniteLoading(pageNumber)

    const observer = useRef()
    // console.log(observer)
    const lastPostElement = useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPageNumber(prev => prev + 1)
            }
        })
        if (node) observer.current.observe(node)
    }, [loading, hasMore])


    // console.log(posts)
    // console.log(refresh)

    return (
        <div className='Wall'>
            <div className='wall_inner_div'>
                <div className="wall_scroll">
                    <CreatePost setRefresh={setRefresh} />
                    {posts && posts.map((post, i) => {
                        if (posts.length === i + 1) return <div ref={lastPostElement} key={post.post_id}><Post details={post} /></div>
                        else return <div key={i} ><Post details={post} /></div>
                    })}
                    <div className='loading'>
                        {error ?
                            <div className='error'>
                                <img src={image_networkError} />
                                <p>Please check your network connection</p>
                            </div>
                            : loading && <Loader />}

                    </div>
                </div>
            </div>
        </div >
    )
}


