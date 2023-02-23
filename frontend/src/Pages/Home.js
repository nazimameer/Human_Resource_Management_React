import React from 'react'
import SideBar from '../Components/SideBar/SideBar'
import NavBar from '../Components/NavBar/NavBar'
import './Home.css'
function Home() {
  return (
    <div>
      <SideBar/>
      <NavBar/>
      <div className='content'>
      {/* <Dashboard/> */}
      </div>
    </div>
  )
}

export default Home
