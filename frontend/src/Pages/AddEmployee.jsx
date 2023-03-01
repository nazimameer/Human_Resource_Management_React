import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import SideBar from '../Components/SideBar/SideBar'
import Addemployee from '../Components/AddEmployee/AddEmployee'
import './Employees.css'
function AddEmployee() {
  return (
    <div>
      <NavBar/>
      <SideBar/>
      <div className='content'>
       <Addemployee/> 
      </div>
    </div>
  )
}

export default AddEmployee
