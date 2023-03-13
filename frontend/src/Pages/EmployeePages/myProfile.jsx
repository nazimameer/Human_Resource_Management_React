import React from "react";
import SideBar from "../../Components/EmployeeComponents/SideBar/SideBar";
import NavBar from "../../Components/EmployeeComponents/NavBar/NavBar";
import Profile from "../../Components/EmployeeComponents/Profile/Profile";
import "./Home.css";
function myProfile() {
  return (
    <div>
      <SideBar />
      <NavBar />
      <div className="content bg-slate-900">
        <Profile />
      </div>
    </div>
  );
}

export default myProfile;
