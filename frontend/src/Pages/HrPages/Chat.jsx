import React from 'react'
import SideBar from "../../Components/HrComponents/SideBar/SideBar";
import NavBar from "../../Components/HrComponents/NavBar/NavBar";
// import Chats from '../../Components/HrComponents/Messages/Messages'
import HrChat from '../../Components/HrComponents/Messages/HrChat'

function Chat() {
  return (
    <div>
    <SideBar />
    <NavBar />
    <div className="content bg-slate-900">
        <HrChat/>
    </div>
  </div>
  )
} 

export default Chat
