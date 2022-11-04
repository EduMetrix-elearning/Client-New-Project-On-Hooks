import React, { useState, useEffect, useRef } from 'react'
import { chatVideoUpload, getConversation, liveChatmessage } from '../../../../api'
import { userInfo } from '../../../../utils/localStorage_Utils'
import socket from '../../../../utils/socketIO_Util'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import Popper from '../../../Popper/Popper'
import './ChatWindow.scss'

import image_chat from '../../../../asset/images/Chat/chat.png'
import Modal from '../../../Modal/Modal'
import { getNowDate } from '../../../../utils/date_Utils'

export default function ChatWindow({ currentChat }) {

    const chat_window_scroll_span = useRef()

    const [chats, setChats] = useState([])
    const [input, setInput] = useState('')
    const [attachmentFile, setAttachmentFile] = useState({ text: '' })
    const [popperShow, setPopperShow] = useState(true)
    const [attachPopperShow, setAttachPopperShow] = useState(true)
    const [attachmentModal, setAttachmentModal] = useState(false)

    useEffect(() => {
        fetchConversations()
        return (() => {
            setInput('')
            setChats([])
        })
    }, [currentChat])

    useEffect(() => {
        chat_window_scroll_span.current?.scrollIntoView({ behavior: 'smooth' })
    }, [chat_window_scroll_span, chats])

    socket.on('REFRESH_CONVERSATION', () => {
        setChats()
        fetchConversations()
    })

    async function fetchConversations() {
        setChats([])
        const response = await getConversation({ senderId: userInfo.id, receiverId: currentChat?.student_id })
        // console.log(response.data.responseResult.result)
        setChats((state) => ([...response.data.responseResult.result]))
    }

    function fileUploadHandle(e) {
        setAttachmentFile((s) => ({ ...s, file: e.target.files[0], type: e.target.name }))
        setAttachmentModal(true)
    }

    function handleModalUnmount(bool) {
        setAttachmentModal(bool)
        setAttachmentFile({ text: '' })
    }


    function sendMessage() {
        let message = {
            message: input,
            senderID: userInfo.id,
            receiverID: currentChat?.student_id,
            sender_name: userInfo.user_name,
            receiver_name: currentChat?.student_fname + currentChat?.student_lname,
            message_time: new Date()
        };
        socket.emit("CONVERSATION", message)
        socket.emit("REFRESH_CONVERSATION", { receiverID: currentChat?.student_id })
        setChats((state) => ([...state, message]))
        setInput('')
    }

    function sendFileMessage() {

        console.log(attachmentFile.file)
        const formData = new FormData();
        formData.append("message", attachmentFile.text);
        formData.append("senderID", userInfo.id);
        formData.append("receiverID", currentChat.student_id);
        formData.append("sender_name", userInfo.user_name);
        formData.append("receiver_name", currentChat.student_fname + ' ' + currentChat.student_lname);
        formData.append("message_time", getNowDate());


        if (attachmentFile.type === "video") {
            formData.append("picture", "");
            formData.append("video", attachmentFile.file)
            for (const value of formData.entries()) {
                console.log(value);
            }
            chatVideoUpload(formData)
                .then((res) => (console.log(res.data), setAttachmentModal(false)))
                .catch((err) => console.log(err))
        }
        else if (attachmentFile.type === "image") {
            formData.append("picture", attachmentFile.file);
            for (const value of formData.entries()) {
                console.log(value);
            }
            liveChatmessage(formData)
                .then((res) => (console.log(res.data), setAttachmentModal(false)))
                .catch((err) => console.log(err))
        }
    }

    console.log(chats)
    // console.log(attachmentFile)

    return (
        <div className='ChatWindow'>
            {currentChat ?
                <div className='chat_window_inner_div'>
                    <header>
                        <img src={currentChat?.student_photo} alt="" />
                        <p>{currentChat?.student_fname}{currentChat?.student_lname}</p>
                    </header>
                    <div className='chat_screen'>
                        {
                            chats.map((chat, i) => {
                                return (
                                    <div key={i} className={`chat ${userInfo.id === chat.senderID ? 'self' :
                                        currentChat.student_id === chat.senderID && 'other'}`} >
                                        {chat.picture && <img src={chat.picture} alt="" />}
                                        {chat.video && <video src={chat.video} />}
                                        <p>{chat.message}</p>
                                        {/* <p>{chat.sender_name}</p> */}
                                    </div>
                                )
                            })
                        }
                        <span ref={chat_window_scroll_span} />
                    </div>
                    <div className='chat_input'>
                        <input type="text" className='message_input' value={input} placeholder="Message ..."
                            onChange={(e) => setInput(e.target.value)} />
                        <div className='icons'>
                            <i className='fa fa-smile-o' id="emoji_button" onClick={() => setPopperShow(true)}>
                                <Popper setShow={setPopperShow} show={popperShow} button="emoji_button">
                                    <Picker data={data} onEmojiSelect={(e) => setInput((s) => s + e.native)} />
                                </Popper>
                            </i>
                            <i className='fa fa-paperclip' id="attach_button" onClick={() => setAttachPopperShow(true)}>
                                <Popper setShow={setAttachPopperShow} show={attachPopperShow} button='attach_button' >
                                    <label htmlFor='attach_image'><i className='fa fa-image' /> Attach image</label>
                                    <input type="file" id="attach_image" hidden accept='image/*' name='image'
                                        onChange={fileUploadHandle} />
                                    <label htmlFor='attach_video'><i className='fa fa-video-camera' /> Attach video</label>
                                    <input type="file" id="attach_video" hidden accept='video/*' name='video'
                                        onChange={fileUploadHandle} />
                                </Popper>
                                <Modal show={attachmentModal} setShow={handleModalUnmount}>
                                    <h4>Attach file</h4>
                                    <div className='view'>
                                        {attachmentFile.type === "video" && <video src={URL.createObjectURL(attachmentFile.file)} />}
                                        {attachmentFile.type === "image" && <img src={URL.createObjectURL(attachmentFile.file)} />}
                                    </div>
                                    <div className='file_message_input'>
                                        <input type="text" placeholder='Message ...' value={attachmentFile.text}
                                            onChange={(e) => setAttachmentFile((s) => ({ ...s, text: e.target.value }))} />
                                        <i className='fa fa-paper-plane' onClick={sendFileMessage}></i>
                                    </div>
                                </Modal>
                            </i>
                            <i className='fa fa-paper-plane' onClick={sendMessage}></i>
                        </div>
                    </div>
                </div>
                :
                <div className='landing'>
                    <img src={image_chat} alt="" />
                    <h5>Chat with you friends</h5>
                    <p>Here you can chat with your friends. Select a friend to start your chat.</p>
                </div>
            }
        </div >
    )
}