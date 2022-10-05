import React, { useState, useRef, useCallback } from 'react'
import './Wall.scss'

import CreatePost from './CreatePost/CreatePost'
import Post from './Post/Post'
import useInfiniteLoading from '../../utils/infiniteLoading_Util'

export default function Wall() {

    const [pageNumber, setPageNumber] = useState(1)

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

    return (
        <div className='Wall'>
            <div className='wall_inner_div'>
                <div className="wall_scroll">
                    <CreatePost />
                    {posts && posts.map((post, i) => {
                        if (posts.length === i + 1) return <div ref={lastPostElement} key={i}><Post details={post} /></div>
                        else return <div key={i} ><Post details={post} /></div>
                    })}
                    {loading && <div>Loading ...</div>}
                    {error && <div>Error ...</div>}
                </div>
            </div>
        </div >
    )
}


