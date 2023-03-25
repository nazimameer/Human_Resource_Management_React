import React from 'react'
import SideBar from "../../Components/HrComponents/SideBar/SideBar";
import NavBar from "../../Components/HrComponents/NavBar/NavBar";
import EditEmployee from '../../Components/HrComponents/Employees/EditEmployee';
import './Home.css'

function editEmployee() {
  return (
    <div>
      <SideBar />
      <NavBar />
      <div className="content bg-slate-900">
        <EditEmployee/>
      </div>
    </div>
  )
}

export default editEmployee
