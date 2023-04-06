import React, { useEffect, useState } from 'react'
import SideBar from "../../Components/HrComponents/SideBar/SideBar";
import NavBar from "../../Components/HrComponents/NavBar/NavBar";
import Departments from '../../Components/HrComponents/Salary/Departments';
import axios from '../../Api/HrAxios'
function Payslips() {
  const [Department, SetDepartments] = useState([]);

   useEffect(() => {
    axios.get('/hr/getDepartments').then((response)=>{
      if(response.status === 200){
        const data = response.data.data
        SetDepartments(data);
        console.log(data)
      }
    }).catch((error)=>{ 
      console.log(error)
    })
  }, []);

  return (
    <div>
      <SideBar />
      <NavBar />
      <div className="content bg-slate-900">
        <Departments Department={Department}/>
      </div>
    </div>
  )
}

export default Payslips
