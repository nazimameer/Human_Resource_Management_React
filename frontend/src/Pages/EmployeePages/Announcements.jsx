import React from 'react'
import SideBar from "../../Components/EmployeeComponents/SideBar/SideBar";
import NavBar from "../../Components/EmployeeComponents/NavBar/NavBar";
import Annouce from '../../Components/EmployeeComponents/Announcement/Announce';
function Announcements() {
  return (
    <div>
    <SideBar />
      <NavBar />
      <div className="content bg-slate-900">
       <Annouce/>
      </div>
    </div>
  )
}

export default Announcements
