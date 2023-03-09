import React from 'react'
import SideBar from '../../Components/EmployeeComponents/SideBar/SideBar'
import NavBar from '../../Components/EmployeeComponents/NavBar/NavBar'
import SalarySlip from '../../Components/EmployeeComponents/SalarySlip/SalarySlip'

function SalarySlips() {
  return (
    <div>
      <SideBar/>
      <NavBar/>

      <div className="content bg-slate-900">
        <SalarySlip/>
        </div>
    </div>
  )
}

export default SalarySlips
