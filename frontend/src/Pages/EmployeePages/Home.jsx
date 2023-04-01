import React, { useState } from "react";
import SideBar from "../../Components/EmployeeComponents/SideBar/SideBar";
import NavBar from "../../Components/EmployeeComponents/NavBar/NavBar";
import EmployeeBody from "../../Components/EmployeeComponents/HomeBody/Dashboard";
import "./Home.css";
import ChangeStatus from "../../Components/EmployeeComponents/HomeBody/ChangeStatus";
function Home() {

  const [openModal,SetOpenModal] = useState(false);
  const [taskId , SetTaskId] = useState(null);
  const [refreshTask, setRefresh] = useState(false)
  return (
    <div>
      <SideBar />
      <NavBar />
      <div className="content bg-slate-900 w-full h-screen">
        <EmployeeBody falserefreshTask={()=>setRefresh(false)} refreshTask={refreshTask} SetTaskId={(id)=>SetTaskId(id)} SetOpenModal={()=>SetOpenModal(true)} />
        <ChangeStatus open={openModal} taskId={taskId} closeModal={()=>SetOpenModal(false)} refreshTask={()=>setRefresh()}/>
      </div>
    </div> 
  );
}

export default Home;
