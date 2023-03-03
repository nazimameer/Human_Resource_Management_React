import React from "react";
import NavBar from "../../Components/HrComponents/NavBar/NavBar";
import SideBar from "../../Components/HrComponents/SideBar/SideBar";
import Addemployee from "../../Components/HrComponents/AddEmployee/AddEmployee";
import "./Employees.css";
function AddEmployee() {
  return (
    <div>
      <NavBar />
      <SideBar />
      <div className="content">
        <Addemployee />
      </div>
    </div>
  );
}

export default AddEmployee;
