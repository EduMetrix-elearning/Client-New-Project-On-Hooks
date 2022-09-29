import React, { useEffect, useState } from 'react'
import './Chatbot.scss'

import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import BotIcon from '../../components/_pages/Chatbot/BotIcon/BotIcon'
import image_user from '../../asset/images/profilepic.jpeg'
import SocialMediaPosts from '../../components/_pages/Chatbot/SocialMediaPosts/SocialMediaPosts'
import { getFacebookData, getInstaData, getSlides, getTwitterData, getWhatsNewData } from '../../api'

export default function Chatbot() {

    const [data, setData] = useState({})

    useEffect(() => {
        (async function () {
            let obj = {}
            obj = {
                twitter: await getTwitterData().then((response) => response.data).catch((err) => err),
                whats: await getWhatsNewData().then((response) => response.data).catch((err) => err),
                facebook: await getFacebookData().then((response) => response.data).catch((err) => err),
                insta: await getInstaData().then((response) => response.data).catch((err) => err),
                slides: await getSlides().then((response) => response.data).catch((err) => err)
            }
            setData(obj)
        })()
    }, [])

    return (
        <div className='Chatbot grid'>
            <Header />
            <NavBar currPage={'Chatbot'} />
            <div className='chatbot_content'>
                <div className='new_today'>
                    <div className='heading'>
                        <h1>What's new today</h1>
                    </div>
                    {data?.whats?.result &&
                        data.whats.result.map((obj,i) => {
                            return (
                                <div className='news' key={i}>
                                    <img src={obj.adminPicture_uploaded} alt="" />
                                    <p>{obj.message}</p>
                                </div>
                            )
                        })
                    }
                </div>
                {/* <SocialMediaPosts media={'facebook'} start={'4'} end={'6'} color={'#4267B2'} data={data.facebook} /> */}
                <SocialMediaPosts media={'linkedin'} start={'6'} end={'8'} color={'#0E76A8'} data={data.slides} />
                <SocialMediaPosts media={'twitter'} start={'4'} end={'6'} color={'#00ACEE'} data={data.twitter} />
                {/* <SocialMediaPosts media={'instagram'} start={'6'} end={'8'} color={'#E8247B'} data={data.insta} /> */}
                <div className="carousel">

                </div>
            </div>
            <BotIcon />
        </div>
    )
}