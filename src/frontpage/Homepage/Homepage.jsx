
import React, { useContext } from 'react';
import { Courses } from '../Courses/Courses.jsx';
import "./Homepage.scss"
import { BussinessPartner } from '../Bussiness/BussinessPartner.jsx';
import { Footer } from '../Footer/Footer.jsx';
import { Link } from 'react-router-dom';
import { Internship } from '../Internship/Internship.jsx';
import { Carrier } from "../Carrier/Carrier.jsx"
import ChatIcon from '@material-ui/icons/Chat';
import SpeakerNotesOffRoundedIcon from '@material-ui/icons/SpeakerNotesOffRounded';
import Modal from '@mui/material/Modal';
import { ChatboxManager } from '../ChatboxManage/ChatboxManager.jsx';
import { Navbarpage } from '../Navbar/Navbarpage.jsx';
import { InternshipContext } from '../../context/InternshipContext.js';
import { CareerContext } from '../../context/careerContext.js';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


export const EduMetrixHomepage = () => {
     
    const [chatopen,setChatopen]=React.useState(false)
    const [chat ,setchat]=React.useState(true)
   

    const handlechatOpen=()=>{
        setChatopen(true)
    }
    const handleChatclose=()=>setChatopen(false)

    const {handleinternship,}=useContext(InternshipContext)
    const {handleCarrier}=useContext(CareerContext)
    
    return (
        <div className='main-edumetrix-homepage'>
            <Navbarpage handleinternship={handleinternship} handleCarrier={handleCarrier} />
            <Courses />
           
            
            <BussinessPartner />
            <Footer />

            {/* chat button */}
              <div className='chatbox-div'>{chat ? <ChatIcon onClick={handlechatOpen}/> : <SpeakerNotesOffRoundedIcon/>}</div> 
              <Modal open={chatopen}
                    onClose={handleChatclose}
                >
                    <ChatboxManager />
              </Modal>
        </div>
    );      
}



