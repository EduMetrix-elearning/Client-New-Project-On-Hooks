import React, { useState } from 'react'
import { Typewriter } from "react-simple-typewriter"
import courseImage from "../../asset/images/Courses/frontend.png"
import "./singlecourse.scss"
import "../Courses/courses.scss"
import { Footer } from '../Footer/Footer'
import { Navbarpage } from '../Navbar/Navbarpage'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';

export const Frontend = () => {
    
  return (
    <div>
      <Navbarpage/>
        <div className='below-navbar'>
                <div className="edumetrix-header">
                    <h1 className='primary-header' ><Typewriter
                        words={['Frontend Courses']}
                        loop={10}
                        cursor
                        cursorStyle='_'
                        typeSpeed={100}
                        deleteSpeed={100}
                        delaySpeed={1000}
                    /></h1>
                    <p className='secondary-header'>Coding for anyone not just for Engineers !!!</p>
                    <p className='ternary-header'>Build professional projects like the top 1% developers.Master the latest frontend tech with real work-ex.Crack developer jobs at the best tech companies.</p>
                </div>

                <div className='main-background-image'>
                    <img src={courseImage} width="90%" height="350px" alt="" />
                </div>
            </div>

                <div className="single-courses-topics">
                    <div className='Topic-card'>
                        <h4>HTML5</h4>
                        <p className='topic-details'>The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.</p>
                     
                        <div className='topic-level'>
                            <AccessTimeIcon/>60 hours<SignalCellularAltIcon/>Difficulty: Beginner
                        </div>
                        <div className="tech-skills">
                            <h5>Skill to be learned</h5>
                            <div className="tech-skills-tags">
                            <div>Html Tags </div>
                            <div>Attributes</div>
                            <div>Classes</div>
                            <div>Elements</div>
                            </div>                            
                        </div>
                    </div>

                    <div className='Topic-card'>
                    <h4>CSS3</h4>
                        <p className='topic-details'>Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media .</p>
                        
                        <div className='topic-level'>
                            <AccessTimeIcon/>60 hours<SignalCellularAltIcon/>Difficulty: Beginner
                        </div>
                        <div className="tech-skills">
                            <h5>Skill to be learned</h5>
                            <div className="tech-skills-tags">
                            <div>Bootstrap</div>
                            <div>Inline style</div>
                            <div>External style</div>
                            </div>                            
                        </div>
                    </div>
                    <div className='Topic-card'>
                    <h4>React(JavaScript library)</h4>
                        <p className='topic-details'>React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.</p>
                        <div>

                        <div className='topic-level'>
                            <AccessTimeIcon/>60 hours<SignalCellularAltIcon/>Difficulty: Beginner
                        </div>
                        <div className="tech-skills">
                            <h5>Skill to be learned</h5>
                            <div className="tech-skills-tags">
                            <div>React Basic</div>
                            <div>React Hooks</div>
                            <div>React Context API</div>
                            <div>React UI</div>
                            </div>                            
                        </div>
                        </div>
                    </div>

                    <div className='Topic-card'>
                    <h4>React Native</h4>
                        <p className='topic-details'>React Native lets you create truly native apps and doesn't compromise your users' experiences. It provides a core set of platform agnostic native components like View, Text, and Image that map directly to the platform’s native UI building blocks.</p>
                        <div>

                        <div className='topic-level'>
                            <AccessTimeIcon/>60 hours<SignalCellularAltIcon/>Difficulty: Beginner
                        </div>
                        <div className="tech-skills">
                            <h5>Skill to be learned</h5>
                            <div className="tech-skills-tags">
                            <div>React Native Basic</div>
                            <div>Animation And Gestures</div>
                            <div>Routing Mechanism.</div>
                            </div>                            
                        </div>
                        </div>
                    </div>
                </div>

        <Footer/>
    </div>
  )
}
