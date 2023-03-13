import React from "react";
import SideBar from "../../Components/HrComponents/SideBar/SideBar";
import NavBar from "../../Components/HrComponents/NavBar/NavBar";
import Approved from "../../Components/HrComponents/LeaveApplications/ApprovedApplication";
function ApprovedApplication() {
  return (
    <div>
      <SideBar />
      <NavBar />
      <div className="content bg-slate-900">
        <Approved />
      </div>
    </div>
  );
}

export default ApprovedApplication;
