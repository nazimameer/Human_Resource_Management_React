import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/HrPages/Home";
import Employees from "../Pages/HrPages/Employees";
import AddEmployee from "../Pages/HrPages/AddEmployee";
import LeaveApplications from "../Pages/HrPages/LeaveApplications";
import ApprovedApplication from "../Pages/HrPages/ApprovedApplication";
import RejectedApplication from "../Pages/HrPages/RejectedApplication";
import EditEmplo from "../Pages/HrPages/EditEmplo";
import EachDepartment from "../Pages/HrPages/EachDepartment";
import Chat from '../Pages/HrPages/Chat'
import Payslips from "../Pages/HrPages/Payslips";
import EachDepPayslip from "../Pages/HrPages/EachDepPayslip";

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
        <Route path="/employeee/edit/:id" element={<EditEmplo />} />
        <Route path='/DepartmentPage/:id' element={<EachDepartment/>}/>
        <Route path="/messages" element={<Chat/>} />
        <Route path='/payslips' element={<Payslips/>}/>
        <Route path="/Departmentpayslip/:id" element={<EachDepPayslip/>}/>
      </Routes>
    </div>
  );
}

export default HrRoutes;
