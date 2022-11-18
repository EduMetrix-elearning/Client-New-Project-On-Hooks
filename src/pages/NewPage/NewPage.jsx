import React, { useState } from 'react'
import './NewPage.scss'

import image_logo from '../../asset/images/NavBar/coin.png'
import image_story from "../../asset/images/newpage/3123093.webp"
import image_post from "../../asset/images/newpage/galaxy-3608029_1920.jpg"

import CreatePost from '../../components/_pages/Home/Wall/CreatePost/CreatePost'

export default function NewPage() {

    const [page, setPage] = useState('Home')

    return (
        <div className='NewPage'>
            <div className="header">
                <div className="logo">
                    <img src={image_logo} alt="" />
                    <p>EduMetrix.io</p>
                </div>
            </div>
            <div className='body'>
                <div className="nav">
                    <div className='menu'>
                        <ul>
                            <li className={page === "Home" ? "active" : ""} onClick={() => setPage("Home")}><i className='fa fa-home'></i>Home</li>
                            <li className={page === "DesignGroups" ? "active" : ""} onClick={() => setPage("DesignGroups")}><i className='fa fa-slack'></i>Design Groups</li>
                            <li className={page === "Trends" ? "active" : ""} onClick={() => setPage("Trends")}><i className='fa fa-bolt'></i>Trends</li>
                            <li className={page === "Designers" ? "active" : ""} onClick={() => setPage("Designers")}><i className='fa fa-car'></i>Designers</li>
                            <li className={page === "Jobs" ? "active" : ""} onClick={() => setPage("Jobs")}><i className='fa fa-film'></i>Jobs</li>
                            <li className={page === "Meetups" ? "active" : ""} onClick={() => setPage("Meetups")}><i className='fa fa-compass'></i>Meetups</li>
                            <li className={page === "Workshops" ? "active" : ""} onClick={() => setPage("Workshops")}><i className='fa fa-headphones'></i>Workshops</li>
                            <li className={page === "Adobe" ? "active" : ""} onClick={() => setPage("Adobe")}><i className='fa fa-codepen'></i>Adobe MAX</li>
                            <li className={page === "DesignTech" ? "active" : ""} onClick={() => setPage("DesignTech")}><i className='fa fa-sliders'></i>Design Tech</li>
                            <li className={page === "Settings" ? "active" : ""} onClick={() => setPage("Settings")}><i className='fa fa-gears'></i>Settings</li>
                        </ul>
                    </div>
                </div>
                <div className='wall'>
                    <div className="stories">
                        {[...Array(7)].map(() => (
                            <div className='story'>
                                <img src={image_story} alt="" />
                                <span>
                                    <p>+</p>
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="post">
                        <div className="head">
                            <div className='profilePic'>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAABCFBMVEUAAAABt/8AAAMAuf8Au/8Avf8Av/8AAAYEAAAAwv8AAA0AABEAAAkAACMCr/cAABoAABUNkdcAAB8AACwDAD8DDVMDADoGGmAFQowHZ7UJhNIImegJp/MHYaoHP4AEDUkGSpgAClYInugAADEGLHYFG1kAACgGT5ILa7MDADYIjNwIcrgNfrkHSHoJKE0Na5kHd6sKVIIIHjIIXpgHSoMFFEYOfNoEGz0LOXEGF0IHQGQKLmUHfcAGOH4NltUIescIa6ELisEILEEJMVwMTG4JN1QGGygFIFERWXsGIz8FaMEEES8Ll/EHIXICivMDGXoJOIoJffIDMKUGTsYKMowPV90APrsIMp3bL/8IAAAEU0lEQVRoge2YfVvbNhDAT69OHMcB0gYIDlsTSHlrMQt0a2AGCoN1GWu3dtv3/yY7OTSWHAVkQ/5a7snzxImkn893p7uTARaykIUsZCH/J6H4Qbm/fE7wGArpF/12r2eje0D9leaLlyitei0A73n4iPC8oL66tt7eiEKUaKPd2fyu5uFjPBVPqRc0Xn7fjogQnBGGHy4EidqbLzzwnkZH9NKr9UhxDWGCdzst7yl0dGTQWw8ly6FT4TJa8++dXAoeLG1FVRt5jK9ubE8iqbDaXn+d8FloJSJ87ZfUnbbafMoi5h+M7DTK6O4Fu3uC5bgM/zGcy/h+IyiKR5v09iTTIIopzg7evD3EH9pAdSeN+UIS9M+leuwxQZL4qA6Vxnjsh5ho963uFNytlPododljMBm4919MMnfw40J0zCWbZKIbI7i6oi1Xl2+jbDw8KQBH5XYjnq0dTO0VCpWd7Mn4WVCATSFbysi7H6enQKOT7QBGfkrzpBvda4WTh5bxe4tJKbzJ7EZ4F1wjBjXPvMnbYEsgFIYanMhTZ6sHze5kIT8FW/6gcJbZHGctB44ZksLPMltVsemEd0vMnbrrGI60dv5NK8Y6ljVpEbrQNSdy4JbAKJxMYpjx2OZNBR8a+ZIv1xzhp9kTi0vbDOUEL9HpLBw5mYVCZ2JyxhJbqKT0A8Mu4tQxsZ9rO4jN0twMFyKPXfSmtLaswfmKTSP8qxEayR49+ngw4oRmV7MmH86Aw6VplgMHs6ik1dV04pe2AFZ2+cD0kseXS8CJuLK7FOBQkuLwvm4WwpPK9LKxS/VgRLhDAqigQ439IY6sEYz0a83q/Mwp63rQ1l3FWPiLXYsPuubKoQ5wCvu6MXEdGsYiN6Gug7xwhL824YRfT5U5/H1jBLq0hqwFfmvuDyJiG/xXI7eQj47wXteE8yT/yAo+NCIxaTxOTsUz0wamvGk43CTGbogd6xyFY5mH56dgb2GkXHmF4ePCplA3jY7lKHd3JTocM7NjlaO56svIcHplI9YzCwaia+OChc6ovlhldLm5PowTad6+SK8I+/rO3jPHEslzjbs4dD9f4Lx61iuqOmBImD9t8KRW4PCCM48nvTn/rW8MVnJHF7tPHoJ7cDBWXXUu5tKaWYIwxt3Siq76KFR0Hq2BCcf7xsY2kJfWpuxBfErnv99Brgh42IsPZNaFStcQN3Xf3RB/fIKp5thfoq/eTdzNI6/cC4bPf/7Vt7S4/ijo3e8DJpKVcuzTL5+anq2p91sDOQ4kdlFS79uvdTqj5h6lJ0UmukMo92rB3549NlTnRF5NwP0oZEpt9tDt54EUIrlS1+XeiDxgzNGXu278sVLydchj8vVvdXqcBxml/8/W3Njg9/4dPT6rpFDYWp0bmzbg7v286BinzdUHYvVpgjF4su3aBhWng38yN5+q7TMvzdOEFri/wikm2qv0ObAVuGRKdKBDuUzuRp8TdyELmYf8B+2wQo778/Y6AAAAAElFTkSuQmCC" alt="" />
                            </div>
                            <div className='title'>
                                <p>Muhammed Faisal</p>
                                <p>3 weeks ago</p>
                            </div>
                        </div>
                        <div className="content">
                            <p></p>
                        </div>
                        <div className="images">
                            <img src={image_post} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}