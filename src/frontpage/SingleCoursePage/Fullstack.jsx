import React, { useState } from 'react'
import { Typewriter } from "react-simple-typewriter"
import courseImage from "../../asset/images/Courses/fullstack.jpg"
import "./SingleCourse.scss"
import "../Courses/Courses.scss"
import { Footer } from '../Footer/Footer'
import { Navbarpage } from '../Navbar/NavbarPage'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';

export const Fullstack = () => {


    return (
        <div>
            <Navbarpage />
            <div className='below-navbar'>
                <div className="edumetrix-header">
                    <h1 className='primary-header' ><Typewriter
                        words={['Full Stack Courses']}
                        loop={10}
                        cursor
                        cursorStyle='_'
                        typeSpeed={100}
                        deleteSpeed={100}
                        delaySpeed={1000}
                    /></h1>
                    <p className='secondary-header'>Coding for anyone not just for Engineers !!!</p>
                    <p className='ternary-header'>Interesting and completely free projects for all web developers. Choose from projects in React, JavaScript, and more and complete them by following a recommended action plan.</p>
                </div>

                <div className='main-background-image'>
                    <img src={courseImage} width="90%" height="350px" alt="" />
                </div>
            </div>

            <div className="single-courses-topics">
                <div className='Topic-card'>
                    <h4>HTML5/CSS3</h4>
                    <p className='topic-details'>HTML (the Hypertext Markup Language) and CSS (Cascading Style Sheets) are two of the core technologies for building Web pages. HTML provides the structure of the page, CSS the (visual and aural) layout, for a variety of devices.</p>
                   
                    <div className='topic-level'>
                        <AccessTimeIcon />160 hours<SignalCellularAltIcon />Difficulty: Beginner
                    </div>
                    <div className="tech-skills">
                        <h5>Skill to be learned</h5>
                        <div className="tech-skills-tags">
                            <div>Html</div>
                            <div>Css</div>
                            <div>Javascript</div>
                            <div>Localstorage</div>
                        </div>
                    </div>
                </div>

                <div className='Topic-card'>
                    <h4>React Js</h4>
                    <p className='topic-details'>React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies .</p>
                    
                    <div className='topic-level'>
                        <AccessTimeIcon />160 hours<SignalCellularAltIcon />Difficulty: Beginner
                    </div>
                    <div className="tech-skills">
                        <h5>Skill to be learned</h5>
                        <div className="tech-skills-tags">
                            <div>Redux</div>
                            <div>Context Api</div>
                            <div>React UI</div>
                            <div>React Bootstrap</div>
                        </div>
                    </div>
                </div>
                <div className='Topic-card'>
                    <h4>Node Js</h4>
                    <p className='topic-details'>Node js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node. js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.</p>
                    <div>
                       
                        <div className='topic-level'>
                            <AccessTimeIcon />160 hours<SignalCellularAltIcon />Difficulty: Beginner
                        </div>
                        <div className="tech-skills">
                            <h5>Skill to be learned</h5>
                            <div className="tech-skills-tags">
                                <div>Express Js</div>
                                <div>Authentication</div>
                                <div>JWT</div>
                                <div>MongoDB</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
