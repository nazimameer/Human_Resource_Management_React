import React from 'react'
import './SideBar.css'
import {useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
function SideBar() {
const [isActive, setIsActive] = useState(true)
const [value,setValue] = useState('')
const handleButtonClick=()=>{
    setIsActive(!isActive)
}

const handleActive = ()=>{
    setIsActive(true)
}

useEffect(()=>{
    if(window.innerWidth < 768){
        setIsActive(false)
}},[])
  return (
    <>
    
      <div className={isActive? 'sidebar active' : 'sidebar'} >
      <div className="logo_content">
        <div className="logo">
          <div className="logo_name" 
      
          >HRM</div>
        </div>
        <i className='bx bx-menu cursor-pointer' id="btn" onClick={handleButtonClick}></i>
      </div>
      <div className="nav_list">
        <li>
            
                <i className='bx bx-search' onClick={handleActive}></i>
                <input type="text" name="" value={value} onChange={(e)=>setValue(e.target.value)} placeholder="search"/>
            
            <span className="tooltip">Search</span>
        </li>
        <li>
            <Link to='/hr/home'>
                <i className='bx bx-grid-alt'></i>
                <span className="links_name">Dashboard</span>
            </Link>
            <span className="tooltip">Dashboard</span>
        </li>
        <li>
            <Link to='/hr/employees'>
                <i className='bx bx-user'></i>
                <span className="links_name">Employees</span>
            </Link>
            <span className="tooltip">Employees</span>
        </li>
        <li>
            <a href='/'>
                <i className='bx bx-chat'></i>
                <span className="links_name">Messages</span>
            </a>
            <span className="tooltip">Messages</span>
        </li>
        <li>
            <a href='/'>
                <i className='bx bx-pie-chart-alt-2'></i>
                <span className="links_name">Analytics</span>
            </a>
            <span className="tooltip">Analytics</span>
        </li>
        <li>
            <a href='/'>
                <i className='bx bx-folder'></i>
                <span className="links_name">Anoucement</span>
            </a>
            <span className="tooltip">Anoucement</span>
        </li>
        <li>
            <a href='/'>
            <i class='bx bx-layer'></i>
                <span className="links_name">Leave Application</span>
            </a>
            <span className="tooltip">Applications</span>
        </li>
        <li>
            <a href='/'>
            <i class='bx bx-purchase-tag'></i>
                <span className="links_name">Salary slip</span>
            </a>
            <span className="tooltip">Salary slip</span>
        </li>
        {/* <li>
            <a href='/'>
                <i className='bx bx-cog' ></i>
                <span className="links_name">Settings</span>
            </a>
            <span className="tooltip">Settings</span>
        </li> */}
      </div>
      <div className="profile_content">
        <div className="profile">
            <div className="profile_details">
                <img src="" alt="" className="adminlogo"/>
                <div className="name_job">
                    <div className="name">akshay</div>
                    <div className="job">HR id:39287</div>
                </div>
            </div>
            <a href='/'
            // style="color: white;"
            ><i className='bx bx-log-out' id="log_out"></i></a>
        </div>
      </div>
    </div>

    </>
  )
}

export default SideBar
