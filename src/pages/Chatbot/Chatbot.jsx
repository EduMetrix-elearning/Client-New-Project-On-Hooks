import React, { useEffect, useState } from 'react'
import './Chatbot.scss'

import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import BotIcon from '../../components/_pages/Chatbot/BotIcon/BotIcon'
import SocialMediaPosts from '../../components/_pages/Chatbot/SocialMediaPosts/SocialMediaPosts'
import { getFacebookData, getInstaData, getSlides, getTwitterData, getWhatsNewData } from '../../api'

import image_video_camera from '../../asset/images/chatbot/video-camera.png'

export default function Chatbot() {

    const [data, setData] = useState({})
    const [slideRoll, setSlideRoll] = useState(0)

    useEffect(() => {
        getTwitterData()
            .then((response) => setData((s) => ({ ...s, twitter: response.data })))
            .catch((err) => ({ error: "Some error is happened" }))

        getWhatsNewData()
            .then((response) => setData((s) => ({ ...s, whats: response.data })))
            .catch((err) => ({ error: "Some error is happened" }))

        // getFacebookData()
        //     .then((response) => setData((s) => ({ ...s, facebook: response.data.result.error.message })))
        //     .catch((err) => ({ error: "Some error is happened" }))

        getInstaData()
            .then((response) => setData((s) => ({ ...s, insta: response.data })))
            .catch((err) => ({ error: "Some error is happened" }))

        getSlides()
            .then((response) => setData((s) => ({ ...s, slides: response.data.result })))
            .catch((err) => ({ error: "Some error is happened" }))
    }, [])

    useEffect(() => {
        const timer = setInterval(() => {
            setSlideRoll((s) => s + 1)
            if (slideRoll === data.slides?.length - 1) { setSlideRoll(0) }
        }, 3000)
        return () => clearInterval(timer)
    }, [slideRoll])

    function sliderAction(value) {
        if (value === -1 && slideRoll === 0) {
            setSlideRoll(data.slides.length - 1)
        } else if (value === 1 && slideRoll === data.slides.length - 1) {
            setSlideRoll(0)
        } else {
            setSlideRoll((s) => s + value)
        }
    }

    // console.log(data)
    // console.log(data.slides)
    // console.log(slideRoll)

    return (
        <div className='Chatbot'>
            <header>
                <Header />
            </header>
            <main>
                <div className='chatbot_content'>
                    <div className='new_today'>
                        <div className='heading'>
                            <h1>What's new today</h1>
                        </div>
                        {data?.whats?.result &&
                            data.whats.result.map((obj, i) => {
                                return (
                                    <div className='news' key={i}>
                                        <img src={obj.adminPicture_uploaded} alt="" />
                                        <p>{obj.message}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <SocialMediaPosts media={'instagram'} color={'#E8247B'} data={data.insta} />
                    <SocialMediaPosts media={'linkedin'} color={'#0E76A8'} />
                    <SocialMediaPosts media={'twitter'} color={'#00ACEE'} data={data.twitter} />
                    {data.slides &&
                        <div className="carousel">
                            {(data.slides[slideRoll].slideVideo) ?
                                <div className="each-slide" title="Click to See">
                                    <video src={data.slides[slideRoll].slideVideo}></video>
                                </div>
                                :
                                <div className="each-slide" title="Click to See">
                                    <img className='slideImage' src={data.slides[slideRoll].slideImage} id="slide-img" alt="" />
                                </div>
                            }
                            <span><i className='fa fa-angle-right' onClick={() => sliderAction(1)} /></span>
                            <span><i className='fa fa-angle-left' onClick={() => sliderAction(-1)} /></span>
                        </div>
                    }
                </div>
            </main>
            <NavBar currPage={'Chatbot'} />
            <BotIcon />
        </div >
    )
}