import React from 'react'
import './SocialMediaPosts.scss'

export default function SocialMediaPosts({ media, color, data }) {
    // console.log({ media, data })
    return (
        <div className='SocialMediaPosts' id={media + "_media"}>
            <div className='inner_div'>
                <div className='title' style={{ 'backgroundColor': (color) }}>
                    <h6>Follow us on {media}</h6>
                </div>
                <div className='messages'>
                    {
                        data?.result && !data.error &&
                        data.result?.map((obj, i) => {
                            return (
                                <p key={i}>{obj.text}</p>
                            )
                        })
                    }
                    {
                        data?.error && <p>{data.error.text}</p>
                    }
                </div>
            </div>
        </div >
    )
}