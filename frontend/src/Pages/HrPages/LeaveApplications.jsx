import React from "react";
import SideBar from "../../Components/HrComponents/SideBar/SideBar";
import NavBar from "../../Components/HrComponents/NavBar/NavBar";
import LeaveApplication from "../../Components/HrComponents/LeaveApplications/LeaveApplications";
import "./LeaveApplication.css";
function LeaveApplications() {
  return (
    <div>
      <SideBar />
      <NavBar />
      <div className="content bg-slate-900">
        <LeaveApplication />
      </div>
    </div>
  );
}

export default LeaveApplications;
