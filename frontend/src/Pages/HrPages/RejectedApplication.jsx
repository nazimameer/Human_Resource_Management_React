import React from 'react'
import SideBar from "../../Components/HrComponents/SideBar/SideBar";
import NavBar from "../../Components/HrComponents/NavBar/NavBar";
import RejectedApplications from '../../Components/HrComponents/LeaveApplications/RejectedApplications';

function RejectedApplication() {
  return (
    <div>
      <SideBar />
      <NavBar />
      <div className="content bg-slate-900">
        <RejectedApplications/>
      </div>
    </div>
  )
}

export default RejectedApplication
