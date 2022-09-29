import React from 'react'
import './SocialMediaPosts.scss'

export default function SocialMediaPosts({ media, start, end, color, data }) {
    return (
        <div className='SocialMediaPosts' style={{ 'gridColumnStart': (start), 'gridColumnEnd': (end) }}>
            <div className='inner_div'>
                <div className='title' style={{ 'backgroundColor': (color) }}>
                    <h6>Follow us on {media}</h6>
                </div>
                <div className='messages'>
                    {
                        data?.result &&
                        data.result?.map((obj, i) => {
                            return (
                                <p key={i}>{obj.text}</p>
                            )
                        }
                        )
                    }
                </div>
            </div>
        </div >
    )
}