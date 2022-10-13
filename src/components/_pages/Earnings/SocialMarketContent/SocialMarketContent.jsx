import React, { useState } from 'react'
import { useEffect } from 'react'
import { getSocialMediaSharingContent } from '../../../../api'
import './SocialMarketContent.scss'

export default function SocialMarketContent() {

    const [socialShareContent, setSocialShareContent] = useState()

    useEffect(() => {
        getSocialMediaSharingContent().then((res) => res.data.length > 0 && setSocialShareContent(res.data[0].video))
    }, [])

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