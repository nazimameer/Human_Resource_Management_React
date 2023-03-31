import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from '../../Api/HrAxios'
import SideBar from "../../Components/HrComponents/SideBar/SideBar";
import NavBar from "../../Components/HrComponents/NavBar/NavBar";
import EmployeesDepartment from '../../Components/HrComponents/Dashboard/EmployeesDepartment'
import TaskAddInt from '../../Components/HrComponents/Employees/TaskAddInt';


function EachDepartment() {
    const [employees,SetEmployees] = useState([]);
    const [uid,SetuId] = useState(null)
  const [isLength, setIsLength] = useState(false);
  const [openModal,SetOpenModal] = useState(false);

  useEffect(() => {
    console.log(uid)
  }, [uid]);

    const {id} = useParams();
    useEffect(() => {
        console.log(id)
        axios.get(`/hr/getDepartmentInfo/${id}`).then((response)=>{
            const data = response.data.data;
            if(data.length !== 0){
                setIsLength(true)
                SetEmployees(data)
            }
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleRefresh = ()=>{
      axios.get(`/hr/getDepartmentInfo/${id}`).then((response)=>{
        const data = response.data.data;
        if(data.length !== 0){
            setIsLength(true)
            SetEmployees(data)
        }
    })
    }
  return (
    <div>
      <SideBar />
      <NavBar />
      <div className="content bg-slate-900">
        <EmployeesDepartment setId={(uid)=>SetuId(uid)} isLength={isLength} employees={employees} refresh={handleRefresh} openModal={()=>SetOpenModal(true)}/>
        <TaskAddInt open={openModal} closeModal={()=>SetOpenModal(false)} uid={uid}/>
      </div>
    </div>
  )
}

export default EachDepartment
