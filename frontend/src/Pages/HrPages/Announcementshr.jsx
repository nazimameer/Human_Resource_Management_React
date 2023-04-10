import React, { useState } from 'react'
import NavBar from "../../Components/HrComponents/NavBar/NavBar";
import SideBar from "../../Components/HrComponents/SideBar/SideBar";
import Annouce from '../../Components/HrComponents/Announcement/Announce';
import TopBar from '../../Components/HrComponents/Announcement/TopBar';
import AddAnnouncement from '../../Components/HrComponents/Announcement/AddAnnouncement';
function Announcementshr() {
    const [openModal, setOpenModal] = useState(false);
    const [Refresh, setRefresh] = useState(false)
  return (
    <div>
    <SideBar />
    <NavBar />
    <div className="content bg-slate-900 mt-16">
        <TopBar setOpen={()=>setOpenModal(true)} />
      <Annouce Refresh={Refresh}/>
      <AddAnnouncement open={openModal} closeModal={()=>setOpenModal(false)} setRefresh={()=>setRefresh(true)}/>
      
    </div>
  </div>
  )
}

export default Announcementshr
