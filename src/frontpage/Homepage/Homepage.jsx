
import React from 'react';
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
import { Navbarpage } from '../Navbar/NavbarPage.jsx';


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
    const [internshipOpen, setInternshipOpen] = React.useState(false);
    const [carrierOpen,setCarrierOpen]=React.useState(false);
    const [chatopen,setChatopen]=React.useState(false)
    const [chat ,setchat]=React.useState(true)
   
    const handleinternship = () => setInternshipOpen(true);
    const handleCarrier=()=>setCarrierOpen(true)
    const handlechatOpen=()=>{
        setChatopen(true)
    }
    const handleInternshipClose = () => setInternshipOpen(false);
    const handleCarrierClose =()=> setCarrierOpen(false)
    const handleChatclose=()=>setChatopen(false)
    
    return (
        <div className='main-edumetrix-homepage'>
            <Navbarpage handleinternship={handleinternship} handleCarrier={handleCarrier}/>
            <Courses />
            {internshipOpen ? <Internship   handleClose={handleInternshipClose} handleinternship={handleinternship} internshipOpen={internshipOpen} /> : ""}
            {carrierOpen ? <Carrier handleClose={handleCarrierClose} handleCarrier={handleCarrier} carrierOpen={carrierOpen}   /> : ""}
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



