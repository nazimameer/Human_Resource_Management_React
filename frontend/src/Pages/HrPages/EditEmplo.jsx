import React, { useState } from 'react'
import SideBar from "../../Components/HrComponents/SideBar/SideBar";
import NavBar from "../../Components/HrComponents/NavBar/NavBar";
import EditEmployee from '../../Components/HrComponents/Employees/EditEmployee';
import './Home.css'
import ConfirmModal from '../../Components/HrComponents/Employees/ConfirmModal';
import axios from '../../Api/HrAxios'
import {useNavigate} from 'react-router-dom'

function EditEmplo() {
  const [openModal, setOpenModal] = useState(false);
  const [uid, setUid] = useState(null);
  const Navigate = useNavigate();
 
  const handleRemove =()=>{
    console.log(uid)
    const data = {
      data:uid
    }
    console.log(data)
    axios.post('/hr/employee/edit/remove',data).then((response)=>{
      console.log(response)
        if(response.status === 200){
          console.log("haloo")
           Navigate('/hr/employees')
        }
    }).catch((error)=>{
      console.log(error)
    })
  }
 
  return (
    <div> 
      <SideBar />
      <NavBar />
      <div className="content bg-slate-900">
        <EditEmployee setUid={setUid}  openModal={()=>setOpenModal(true)}/>
        <ConfirmModal handleRemove={()=>handleRemove()} open={openModal} closeModal={()=>setOpenModal(false)}/>
      </div>
    </div>
  )
}

export default EditEmplo
