import React from "react";
import SideBar from "../../Components/EmployeeComponents/SideBar/SideBar";
import NavBar from "../../Components/EmployeeComponents/NavBar/NavBar";
import EmployeeCheckIn from "../../Components/EmployeeComponents/HomeBody/CheckIn";
import "./Home.css";
function CheckIn() {
  return (
    <div>
      <SideBar />
      <NavBar />
      <div className="content bg-slate-900 w-full h-screen">
        <EmployeeCheckIn />
      </div>
    </div>
  );
}

export default CheckIn;