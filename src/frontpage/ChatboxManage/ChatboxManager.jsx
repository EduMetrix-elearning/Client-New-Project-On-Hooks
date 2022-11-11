import React from 'react'
import ChatBot from "react-simple-chatbot"


import "./chatbox.scss"

export const ChatboxManager = () => {
  
  const steps=[
    {
      id:"0",
      message:"Hey ! Welcome to our website",
      trigger:"Ask Name"
    },
    {
      id:"Ask Name",
      message:"Please enter your name",
      trigger:"waiting1"
    },
    {
      id:"waiting1",
      user:true,
      trigger:"Name"
    },
    {
      id:"Name",
      message:"Hello {previousValue}, Please select your issue",
      trigger:"issues"
    },
    {
      id:"issues",
      options:[
        {value:"React", label:"React",trigger:"React"},
        {value:"Node", label:"Node",trigger:"Node"}
      ]
    },
    {
      id:"React",
      message:"Thanks for telling your issues",
      end:true
    },
    {
      id:"Node",
      message:"Thanks for telling your issues",
      end:true
    }
  ]
  
  return (
    <div>
        <ChatBot
        steps={steps}
        
      />
    </div>

  )
}
