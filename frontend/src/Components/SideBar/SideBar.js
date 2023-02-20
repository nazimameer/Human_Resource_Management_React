import React from 'react'
import './SideBar.css'
import {useState } from 'react'
function SideBar() {
const [isActive, setIsActive] = useState(false)
const handleButtonClick=()=>{
    setIsActive(!isActive)
}

const handleActive = ()=>{
    setIsActive(true)
}

  return (
    <>
    
      <div className={isActive? 'sidebar active' : 'sidebar'} >
      <div className="logo_content">
        <div className="logo">
          <div className="logo_name" 
      
          >HRM</div>
        </div>
        <i className='bx bx-menu' id="btn" onClick={handleButtonClick}></i>
      </div>
      <div className="nav_list">
        <li>
            
                <i className='bx bx-search' onClick={handleActive}></i>
                <input type="text" name="" value="" placeholder="search"/>
            
            <span className="tooltip">Search</span>
        </li>
        <li>
            <a href='/'>
                <i className='bx bx-grid-alt'></i>
                <span className="links_name">Dashboard</span>
            </a>
            <span className="tooltip">Dashboard</span>
        </li>
        <li>
            <a href='/'>
                <i className='bx bx-user'></i>
                <span className="links_name">Users</span>
            </a>
            <span className="tooltip">Users</span>
        </li>
        <li>
            <a href='/'>
                <i className='bx bx-chat'></i>
                <span className="links_name">Message</span>
            </a>
            <span className="tooltip">Message</span>
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
                <span className="links_name">File Manager</span>
            </a>
            <span className="tooltip">Files</span>
        </li>
        <li>
            <a href='/'>
                <i className='bx bx-cart-alt' ></i>
                <span className="links_name">Orders</span>
            </a>
            <span className="tooltip">Orders</span>
        </li>
        <li>
            <a href='/'>
                <i className='bx bx-heart'></i>
                <span className="links_name">Saved</span>
            </a>
            <span className="tooltip">Saved</span>
        </li>
        <li>
            <a href='/'>
                <i className='bx bx-cog' ></i>
                <span className="links_name">Settings</span>
            </a>
            <span className="tooltip">Settings</span>
        </li>
      </div>
      <div className="profile_content">
        <div className="profile">
            <div className="profile_details">
                <img src="adminlogo.jpeg" alt="" className="adminlogo"/>
                <div className="name_job">
                    <div className="name">akshay</div>
                    <div className="job">Web Admin</div>
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
