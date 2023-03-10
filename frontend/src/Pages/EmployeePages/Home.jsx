import React from "react";
import SideBar from "../../Components/EmployeeComponents/SideBar/SideBar";
import NavBar from "../../Components/EmployeeComponents/NavBar/NavBar";
import EmployeeBody from "../../Components/EmployeeComponents/HomeBody/HomeBody";
import "./Home.css";
function Home() {
  return (
    <div>
      <SideBar />
      <NavBar />
      <div className="content bg-slate-900">
        <EmployeeBody />
      </div>
    </div>
  );
}

export default Home;
