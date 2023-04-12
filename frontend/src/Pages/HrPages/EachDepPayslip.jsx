import React, { useEffect, useState } from 'react'
import SideBar from "../../Components/HrComponents/SideBar/SideBar";
import NavBar from "../../Components/HrComponents/NavBar/NavBar";
import EmployeesDep from '../../Components/HrComponents/Salary/EmployeesDep';
import axios from '../../Api/HrAxios'
import { useParams } from 'react-router-dom';
import HistoryModal from '../../Components/HrComponents/Salary/HistoryModal';
import SalaryModal from '../../Components/HrComponents/Salary/SalaryModal';
function EachDepPayslip() {

    const [employees,SetEmployees] = useState([]);
    const [uid,SetuId] = useState(null)
  const [isLength, setIsLength] = useState(false);
  const [openSalaryModal,SetOpenSalaryModal] = useState(false);
  const [openHistoryModal,SetOpenHistoryModal] = useState(false);
  const {id} = useParams();

  useEffect(() => {
    console.log("id is :"+id)
    axios.get(`/hr/getDepartmentInfo/${id}`).then((response)=>{
        const data = response.data.data;
        if(data.length !== 0){
            setIsLength(true)
            SetEmployees(data)
        }
    })
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
// paginations//

  return (
    <div>
      <SideBar />
      <NavBar />
      <div className="content bg-slate-900">
        <EmployeesDep  setId={(uid)=>SetuId(uid)} isLength={isLength} employees={employees} openSalaryModal={()=>SetOpenSalaryModal(true)}  openHistoryModal={()=>SetOpenHistoryModal(true)}/>
        <SalaryModal open={openSalaryModal} closeModal={()=>SetOpenSalaryModal(false)} uid={uid}/> 
         <HistoryModal open={openHistoryModal} closeModal={()=>SetOpenHistoryModal(false)} uid={uid}/>
      </div>
    </div>
  )
}

export default EachDepPayslip
