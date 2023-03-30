import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from '../../Api/HrAxios'
import SideBar from "../../Components/HrComponents/SideBar/SideBar";
import NavBar from "../../Components/HrComponents/NavBar/NavBar";
import EmployeesDepartment from '../../Components/HrComponents/Dashboard/EmployeesDepartment'


function EachDepartment() {
    const [employees,SetEmployees] = useState([]);
  const [isLength, setIsLength] = useState(false);

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
  return (
    <div>
      <SideBar />
      <NavBar />
      <div className="content bg-slate-900">
        <EmployeesDepartment isLength={isLength} employees={employees}/>
      </div>
    </div>
  )
}

export default EachDepartment
