import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/HrPages/Home";
import Employees from "../Pages/HrPages/Employees";
import AddEmployee from "../Pages/HrPages/AddEmployee";
import LeaveApplications from "../Pages/HrPages/LeaveApplications";
import ApprovedApplication from "../Pages/HrPages/ApprovedApplication";
import RejectedApplication from "../Pages/HrPages/RejectedApplication";
import EditEmployee from "../Pages/HrPages/editEmployee";
import EachDepartment from "../Pages/HrPages/EachDepartment";
import Chat from '../Pages/HrPages/Chat'

function HrRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/addemployee" element={<AddEmployee />} />
        <Route path="/leaveapplications" element={<LeaveApplications />} />
        <Route
          path="/leaveapplications/approved"
          element={<ApprovedApplication />}
        />
        <Route
          path="/leaveapplications/rejected"
          element={<RejectedApplication />}
        />
        <Route path="/employeee/edit/:id" element={<EditEmployee />} />
        <Route path='/DepartmentPage/:id' element={<EachDepartment/>}/>
        <Route path="/messages" element={<Chat/>} />
      </Routes>
    </div>
  );
}

export default HrRoutes;
