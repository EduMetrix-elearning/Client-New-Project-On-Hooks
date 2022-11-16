import React, { useState } from 'react'
import { Typewriter } from "react-simple-typewriter"
import courseImage from "../../asset/images/Courses/Backend.png"
import "./singlecourse.scss"
import "../Courses/courses.scss"
import { Footer } from '../Footer/Footer'
import { Navbarpage } from '../Navbar/Navbarpage'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';

export const Backend = () => {

    return (
        <div>
            <Navbarpage />
            <div className='below-navbar'>
                <div className="edumetrix-header">
                    <h1 className='primary-header' ><Typewriter
                        words={['Backend Courses']}
                        loop={10}
                        cursor
                        cursorStyle='_'
                        typeSpeed={100}
                        deleteSpeed={100}
                        delaySpeed={1000}
                    /></h1>
                    <p className='secondary-header'>Coding for anyone not just for Engineers !!!</p>
                    <p className='ternary-header'>Browse through exciting and free projects in JavaScript, HTML, React, Nodejs, and more for new age web developers. Complete them with a recommended action plan.</p>
                </div>

                <div className='main-background-image'>
                    <img src={courseImage} width="90%" height="350px" alt="" />
                </div>
            </div>

            <div className="single-courses-topics">
                <div className='Topic-card'>
                    <h4>NodeJs</h4>
                    <p className='topic-details'>Node. js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node. js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.</p>
                    <div className='topic-level'>
                        <AccessTimeIcon />60 hours<SignalCellularAltIcon />Difficulty: Beginner
                    </div>
                    <div className="tech-skills">
                        <h5>Skill to be learned</h5>
                        <div className="tech-skills-tags">
                            <div>Express Js</div>
                            <div>Env</div>
                            <div>File system</div>
                        </div>
                    </div>
                </div>

                
                <div className='Topic-card'>
                    <h4>MySQL</h4>
                    <p className='topic-details'>MySQL is a relational database management system
The database structure is organized into physical files optimized for speed. The logical data model, with objects such as data tables, views, rows, and columns, offers a flexible programming environment.</p>
                    <div>
                       
                        <div className='topic-level'>
                            <AccessTimeIcon />60 hours<SignalCellularAltIcon />Difficulty: Beginner
                        </div>
                        <div className="tech-skills">
                            <h5>Skill to be learned</h5>
                            <div className="tech-skills-tags">
                                <div>Basic of SQL</div>
                                <div>MySQL Database</div>
                                <div>MySQL Workbench</div>
                            </div>
                        </div>
                    </div>
                </div>

                

                <div className='Topic-card'>
                    <h4>Azure</h4>
                    <p className='topic-details'>The Azure cloud platform is more than 200 products and cloud services designed to help you bring new solutions to life—to solve today's challenges and create the future. Build, run and manage applications across multiple clouds, on-premises and at the edge, with the tools and frameworks of your choice .</p>
                    <div>
                       
                        <div className='topic-level'>
                            <AccessTimeIcon />60 hours<SignalCellularAltIcon />Difficulty: Beginner
                        </div>
                        <div className="tech-skills">
                            <h5>Skill to be learned</h5>
                            <div className="tech-skills-tags">
                                <div>Introduction to Azure</div>
                              <div>Azure DataFactory</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='Topic-card'>
                    <h4>MongoDB</h4>
                    <p className='topic-details'>MongoDB is a non-relational document database that provides support for JSON-like storage. The MongoDB database has a flexible data model that enables you to store unstructured data, and it provides full indexing support, and replication with rich and intuitive APIs .</p>
                    <div>
                       
                        <div className='topic-level'>
                            <AccessTimeIcon />60 hours<SignalCellularAltIcon />Difficulty: Beginner
                        </div>
                        <div className="tech-skills">
                            <h5>Skill to be learned</h5>
                            <div className="tech-skills-tags">
                                <div>Basic of MongoDB</div>
                                <div>MongoDB Database</div>
                                {/* <div>MySQL Workbench</div> */}
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <Footer />

        </div>
    )
}
