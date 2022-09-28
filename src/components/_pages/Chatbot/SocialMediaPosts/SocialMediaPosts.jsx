import React from 'react'
import './SocialMediaPosts.scss'

export default function SocialMediaPosts({ media, start, end, color, data }) {
    console.log(typeof data?.result)
    return (
        <div className='SocialMediaPosts' style={{ 'grid-column-start': (start), 'grid-column-end': (end) }}>
            <div className='inner_div'>
                <div className='title' style={{ 'background-color': (color) }}>
                    <h6>Follow us on {media}</h6>
                </div>
                <div className='messages'>
                    {
                        data?.result &&
                        data.result?.map((obj) => {
                            return (
                                <p>{obj.text}</p>
                            )
                        }
                        )
                    }
                </div>
            </div>
        </div >
    )
}