import React from 'react'
import { Typewriter } from "react-simple-typewriter"
import courseImage from "../../asset/images/feature_1.png"
import "./singlecourse.scss"
import "../Courses/courses.scss"
import { Footer } from '../Footer/Footer'
import { Navbarpage } from '../Navbar/Navbarpage'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';

export const SingleCoursePage = () => {
  return (
    <div>
        <Navbarpage/>
        <div className='below-navbar'>
                <div className="edumetrix-header">
                    <h1 className='primary-header' ><Typewriter
                        words={['Web Developer Courses']}
                        loop={10}
                        cursor
                        cursorStyle='_'
                        typeSpeed={100}
                        deleteSpeed={100}
                        delaySpeed={1000}
                    /></h1>
                    <p className='secondary-header'>Coding for anyone not just for Engineers !!!</p>
                    <p className='ternary-header'>Build professional projects like the top 1% developers.Master the latest full stack and backend tech with real work-ex.Crack developer jobs at the best tech companies.</p>
                </div>

                <div className='main-background-image'>
                    <img src={courseImage} width="400px" height="400px" alt="" />
                </div>
            </div>

                <div className="single-courses-topics">
                    <div className='Topic-card'>
                        <h4>E-commerce Project using React</h4>
                        <p className='topic-details'>Nowadays the first thing that someone does when 
                        they create a new business for trading goods is to 
                        convert their commerce to e-commerce. Many businesses 
                        even prefer to have e-commerce as their only mode of 
                        doing business. The potential of e-commerce is nearly limitless, 
                        reason for which we'll be going on a ride to create an e-commerce solution of our own!</p>
                        <h6>Prerequisites(s)</h6>
                        <p className='tech-stacks'>HTML , CSS , Javascript</p>
                        <div className='topic-level'>
                            <AccessTimeIcon/>100 hours<SignalCellularAltIcon/>Difficulty: Beginner
                        </div>
                        <div className="tech-skills">
                            <h5>Skill to be learned</h5>
                            <div className="tech-skills-tags">
                            <div>Reacts</div>
                            <div>Nodejs</div>
                            <div>MongoDB</div>
                            </div>                            
                        </div>
                    </div>

                    <div className='Topic-card'>
                    <h4>E-commerce Project using React</h4>
                        <p className='topic-details'>Nowadays the first thing that someone does when 
                        they create a new business for trading goods is to 
                        convert their commerce to e-commerce. Many businesses 
                        even prefer to have e-commerce as their only mode of 
                        doing business. The potential of e-commerce is nearly limitless, 
                        reason for which we'll be going on a ride to create an e-commerce solution of our own!</p>
                        <h6>Prerequisites(s)</h6>
                        <p className='tech-stacks'>HTML , CSS , Javascript</p>
                        <div className='topic-level'>
                            <AccessTimeIcon/>100 hours<SignalCellularAltIcon/>Difficulty: Beginner
                        </div>
                        <div className="tech-skills">
                            <h5>Skill to be learned</h5>
                            <div className="tech-skills-tags">
                            <div>Reacts</div>
                            <div>Nodejs</div>
                            <div>MongoDB</div>
                            </div>                            
                        </div>
                    </div>
                    <div className='Topic-card'>
                    <h4>E-commerce Project using React</h4>
                        <p className='topic-details'>Nowadays the first thing that someone does when 
                        they create a new business for trading goods is to 
                        convert their commerce to e-commerce. Many businesses 
                        even prefer to have e-commerce as their only mode of 
                        doing business. The potential of e-commerce is nearly limitless, 
                        reason for which we'll be going on a ride to create an e-commerce solution of our own!</p>
                        <div>
                        <h6>Prerequisites(s)</h6>
                        <p className='tech-stacks'>HTML , CSS , Javascript</p>
                        <div className='topic-level'>
                            <AccessTimeIcon/>100 hours<SignalCellularAltIcon/>Difficulty: Beginner
                        </div>
                        <div className="tech-skills">
                            <h5>Skill to be learned</h5>
                            <div className="tech-skills-tags">
                            <div>Reacts</div>
                            <div>Nodejs</div>
                            <div>MongoDB</div>
                            </div>                            
                        </div>
                        </div>
                    </div>
                </div>

            <Footer/>
    </div>
  )
}
