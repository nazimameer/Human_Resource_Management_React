import React, { useEffect, useState } from "react";
import SideBar from "../../Components/EmployeeComponents/SideBar/SideBar";
import NavBar from "../../Components/EmployeeComponents/NavBar/NavBar";
import SalarySlip from "../../Components/EmployeeComponents/SalarySlip/SalarySlip";
import Modal from "../../Components/EmployeeComponents/SalarySlip/Modal";
import Invoice from "../../Components/EmployeeComponents/SalarySlip/Invoice";
import axios from '../../Api/EmployeeAxios'

function SalarySlips() {
  const [openModal, setOpenModal] = useState(false)
  const [openInvoice, setOpenInvoice] = useState(false)
  const [refresh, setRefresh ] = useState(false)
  const [InvId, setInvId] = useState(null)

  useEffect(() => {
    axios.get(`/employee/getSalarySlip/${InvId}`).then((response)=>{
      console.log(response)
  })
  }, [InvId]);

  return (
    <div>
      <SideBar />
      <NavBar />
      <div className="content bg-slate-900">
        <SalarySlip openModal={()=>setOpenModal(true)} refresh={refresh} setRefresh={()=>setRefresh(false)} OpenInvoice={()=>setOpenInvoice(true)} setInvId={(invId)=>setInvId(invId)}/>
        <Modal open={openModal} closeModal={()=>setOpenModal(false)} refresh={()=>setRefresh(true)}/>
        <Invoice open={openInvoice} closeModal={()=>setOpenInvoice(false)} InvId={InvId}/>

      </div>
    </div>
  );
}

export default SalarySlips;
