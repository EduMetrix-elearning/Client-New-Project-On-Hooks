import React, { useState } from 'react'
import { useEffect } from 'react'
import { getSocialMediaSharingContent } from '../../../../api'
import './SocialMarketContent.scss'

export default function SocialMarketContent() {

    const [socialShareContent, setSocialShareContent] = useState()

    useEffect(() => {
        getSocialMediaSharingContent().then((res) => setSocialShareContent(res.data.data[0].video))
    }, [])

    // console.log(socialShareContent)

    return (
        <div className='SocialMarketContent'>
            <div>
                <h6>Social market sharing content</h6>
            </div>
            <div>
                <iframe src={socialShareContent} frameBorder="0"></iframe>
            </div>
        </div>
    )
}