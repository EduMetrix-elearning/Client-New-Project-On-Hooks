import React from 'react'
import { useRef } from 'react'
import Header from '../../NewComponents/Header/Header'
import './Home.scss'

export default function Home() {

    const storiesRef = useRef()

    return (
        <div className='Home_2'>
            <Header />
            <div className='main'>
                <div className="contain">
                    <div className='sidebar_left'>
                        <div className='pages white_block'>

                        </div>
                        <div className='explore white_block'>

                        </div>
                    </div>
                    <div className='wall'>
                        <div className="stories white_block">
                            <i className='fa fa-angle-left' onClick={() => storiesRef.current.scrollLeft = storiesRef.current.scrollLeft - 122} />
                            <div className="inner_div" ref={storiesRef}>
                                <div className="new_post"></div>
                                <div className='new_story'></div>
                                {[...Array(25)].map((a, i) => {
                                    return (
                                        <div className="story">{i}</div>
                                    )
                                })}
                            </div>
                            <i className='fa fa-angle-right' onClick={() => storiesRef.current.scrollLeft = storiesRef.current.scrollLeft + 122} />
                        </div>
                        <div className="post white_block">

                        </div>
                    </div>
                    <div className='sidebar_right'>
                        <div className="messages white_block">

                        </div>
                        <div className="suggestions white_block">

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}