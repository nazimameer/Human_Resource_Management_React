import React from 'react'
import Application from '../../Components/EmployeeComponents/Applications/Applicaitons'
import SideBar from '../../Components/EmployeeComponents/SideBar/SideBar'
import NavBar from '../../Components/EmployeeComponents/NavBar/NavBar'

function Applications() {
  return (
    <div>
      <SideBar/>
      <NavBar/>

      <div className="content bg-slate-900">
            <Application/>
        </div>
    </div>
  )
}

export default Applications
