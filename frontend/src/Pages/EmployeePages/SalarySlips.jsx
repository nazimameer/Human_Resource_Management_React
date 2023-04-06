import React, { useState } from "react";
import SideBar from "../../Components/EmployeeComponents/SideBar/SideBar";
import NavBar from "../../Components/EmployeeComponents/NavBar/NavBar";
import SalarySlip from "../../Components/EmployeeComponents/SalarySlip/SalarySlip";
import Modal from "../../Components/EmployeeComponents/SalarySlip/Modal";

function SalarySlips() {
  const [openModal, setOpenModal] = useState(false)
  const [refresh, setRefresh ] = useState(false)

  return (
    <div>
      <SideBar />
      <NavBar />
      <div className="content bg-slate-900">
        <SalarySlip openModal={()=>setOpenModal(true)} refresh={refresh} setRefresh={()=>setRefresh(false)}/>
        <Modal open={openModal} closeModal={()=>setOpenModal(false)} refresh={()=>setRefresh(true)}/>
      </div>
    </div>
  );
}

export default SalarySlips;
