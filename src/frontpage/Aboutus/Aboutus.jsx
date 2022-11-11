import React from 'react'
import './aboutus.scss'

import image_ceo from '../../asset/images/AboutUs/About us/Shafan.png'
import image_coo from '../../asset/images/AboutUs/About us/Fiyas.png'
import image_director1 from '../../asset/images/AboutUs/About us/Mubarak.png'
import image_director2 from '../../asset/images/AboutUs/About us/Suchismitha.png'
import { Footer } from '../Footer/Footer'
import { Navbarpage } from '../Navbar/Navbarpage'

export const Aboutus=()=> {
    return (
        <>
        <Navbarpage/>
        <div className='AboutUs' >
            <div className='section'>
                <div className='article'>
                    <header>
                        <h3>About Us</h3>
                        <p className='paragraph'>
                            Founded in November 2017, EduMetrix is a revolutionary decentralized educational platform powered by the blockchain technology. Taking a detour from the rote method of imparting information and knowledge, EduMetrix aims to build the bridge between all the stakeholders in the global education ecosystem. Closing the knowledge gaps by improving accessibility to learning tools and resources in a secure environment offers EduMetrix its distinctive identity when it comes to education in the digital.
                        </p>
                    </header>

                    <div className='video'>
                        <iframe
                            allowFullScreen={"true"}
                            width="70%"
                            height="400px"
                            className='youtube-iframe'
                            // className='video' title='Youtube player' 
                            // sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                            src={`https://youtube.com/embed/b4hnZ0amugY?autoplay=0`}>
                        </iframe>
                    </div>

                    <div>
                        <h5>Mission</h5>
                        <p className='paragraph'>
                            To offer a decentralized digital platform for closing knowledge & learning gaps, connect with experts and incubate promising ideas.
                        </p>
                    </div>

                    <div>
                        <h5>Vision</h5>
                        <p className='paragraph'>
                            To create a learning and knowledge exchange ecosystem that nurtures every learning journey and provides scope for entrepreneurship at global level.
                        </p>
                    </div>

                    <div className='edumetrix_network'>
                        <h5>The EduMetrix Network</h5>
                        <p className='paragraph'>
                            There are five critical stakeholders in the entire EduMetrix network and they are:
                        </p>
                        <p className='paragraph'>
                            <strong>Students -</strong>
                            The ‘Student’ group right from KG to university hold a pivotal space in the entire network as this entire platform revolves around knowledge transfer and education. The students leverage this platform to connect with the best subject matter experts globally and close their information gaps. Here the students get an opportunity to showcase their skills through pilot projects that get funded at the platform level
                        </p>
                        <p className='paragraph'>
                            <strong>Subject Matter Experts - </strong>
                            The SMEs or the ‘Subject Matter Experts’ play a key role in closing the knowledge and information gaps through learning aids such as Live Chat, Live Video Tutoring, Social Media Platform, Online Library, Lecture Broadcasts, and Online Games. The experts who are a part of this niche web of knowledge transfer come with rich industry experience.
                        </p>
                        <p className='paragraph'>
                            <strong>Educational Institutions - </strong>
                            The third and important stakeholder is ‘Educational Institution’. The role of educational institutions is to help children onboard a platform that helps them access world class information.
                        </p>
                        <p className='paragraph'>
                            <strong>Enterprises - </strong>
                            The fourth important stakeholder is the enterprise or the companies who access the resource pool generated at the platform level.
                        </p>
                        <p className='paragraph'>
                            <strong>Parent - </strong>
                            The fifth stake holder is the ‘Parent’. The parents have an important role in activating a feedback mechanism in the system. They can log into the parent dashboard and have a clear understanding of their child’s academic progress through well-defined metrics developed by EduMetrix.
                        </p>
                        <p className='paragraph'> 
                            Very importantly, apart from all the stakeholders, there is an entity that brings in a convergence of all the action happening within the educational network. This is ‘Projects’. Projects are legal and well-defined entities that showcase the level of innovation of ‘Students’. These projects are developed with constant mentoring from the ‘Subject matter Experts’. The projects listed and incubated at the platform level grabs the attention of the ‘Enterprises’. So the best ideas get the funding and the support at a greater level for further shaping as new technology or a working principle.
                        </p>
                    </div>
                    <footer>

                    </footer>
                </div>
            </div>
            
        </div>
        <Footer/>
        </>
    )
}