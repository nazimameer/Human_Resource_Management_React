import React,{useState,useEffect} from "react";
import SideBar from "../../Components/HrComponents/SideBar/SideBar";
import NavBar from "../../Components/HrComponents/NavBar/NavBar";
import EmployeesBody from "../../Components/HrComponents/Employees/EmployeesBody";
import AddDepartment from "../../Components/HrComponents/Employees/AddDepartment";
import Departments from "../../Components/HrComponents/Employees/Departments";
import axios from '../../Api/HrAxios'
import Footer from "../../Components/HrComponents/Employees/Footer";
import TaskAddDep from "../../Components/HrComponents/Employees/TaskAddDep";
function Employees() {
  const [SearchQuery, SetSearchQuery] = useState("");
  const [Department, SetDepartments] = useState([]);
  const [openModal,SetOpenModal] = useState(false);
  const [openTaskDep, SetOpenTaskDep] = useState(false);
  const [id,SetId] = useState(null)
  useEffect(() => {
   console.log(id)
  }, [id]);
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

  const DepRefresh =()=>{
    axios.get('/hr/getDepartments').then((response)=>{
      if(response.status === 200){
        const data = response.data.data
        SetDepartments(data);
        console.log(data)
      }
    }).catch((error)=>{
      console.log(error)
    })
  }

  const filteredList = SearchQuery
  ? Department.filter(
      (Depart) =>
        Depart.name
          .toLowerCase()
          .includes(SearchQuery.toLowerCase())
    )
  : Department;

  const handleSearchChange =(event)=>{
    SetSearchQuery(event.target.value)
  }
  return (
    <div>
      <SideBar />
      <NavBar />
      <div className="content bg-slate-900">

      <div className="mt-20 mx-5 ">
    <Departments setId={(id)=>SetId(id)} Department={filteredList} openModal={()=>SetOpenModal(true)} openTaskDep={()=>SetOpenTaskDep(true)}  Search={handleSearchChange}/>
    <AddDepartment open={openModal} closeModal={()=>SetOpenModal(false)} DepRefresh={()=>DepRefresh}/>
    <TaskAddDep open={openTaskDep} id={id} closeModal={()=>SetOpenTaskDep(false)}/>
      </div>
      <div>

        <EmployeesBody />
      </div>
      <div>
        <Footer/>
      </div>
      </div>
    </div>
  );
}

export default Employees;
