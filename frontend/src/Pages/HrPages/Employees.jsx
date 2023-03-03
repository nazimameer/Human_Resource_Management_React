import React from "react";
import SideBar from "../../Components/HrComponents/SideBar/SideBar";
import NavBar from "../../Components/HrComponents/NavBar/NavBar";
import EmployeesBody from "../../Components/HrComponents/Employees/EmployeesBody";

function Employees() {
  return (
    <div>
      <SideBar />
      <NavBar />
      <div className="content bg-slate-900">
        <EmployeesBody />
      </div>
    </div>
  );
}

export default Employees;
