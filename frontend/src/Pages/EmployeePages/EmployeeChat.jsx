import React from 'react'
import Messages from '../../Components/EmployeeComponents/Messages/EmployeeMessages'
import NavBar from '../../Components/EmployeeComponents/NavBar/NavBar'
import SideBar from '../../Components/EmployeeComponents/SideBar/SideBar'

function EmployeeChat() {
  return (
    <div>
    <SideBar />
    <NavBar />
    <div className="content bg-slate-900 w-full h-screen">
      <Messages/>
    </div>
  </div>
  )
}

export default EmployeeChat
