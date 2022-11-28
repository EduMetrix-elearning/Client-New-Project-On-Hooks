import React from 'react'
import './Header.scss'

import image_bell from '../../asset/images/Header/AppBarNotification.png'
import image_message from '../../asset/images/Header/AppBarChat.png'
// import image_user from '../../asset/images/Header/profilepic.jpeg'
// import { userInfo } from '../../utils/localStorage_Utils'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { count } from '../../slices/notificationSlice'
import { getWhatsNewData } from '../../api'

export default function Header() {

    const dispatch = useDispatch()

    const userInfo = useSelector((s) => s.Authentication.user)
    const notifications = useSelector(s => s.Notifications)

    useEffect(() => {
        getWhatsNewData()
            .then((response) => (dispatch(count(response.data.result.length))))
            .catch((err) => console.log(err))
    },[])

    return (
        <div className='Header'>
            <div className="header_inner_div">
                <div className={'bell' + (!notifications.count ? ' show' : "")} data-count={notifications.count} >
                    <img src={image_bell} alt="" />
                </div>
                <Link to='/chat' ><img src={image_message} alt="" /></Link>
                <Link to='/profile' ><img className='photo' src={userInfo?.photo} alt="" /></Link>
            </div>
        </div>
    )
}