import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/HrPages/Home";
import Employees from "../Pages/HrPages/Employees";
import AddEmployee from "../Pages/HrPages/AddEmployee";
import LeaveApplications from "../Pages/HrPages/LeaveApplications";

function HrRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/addemployee" element={<AddEmployee />} />
        <Route path='/leaveapplications' element={ <LeaveApplications/> }/>
      </Routes>
    </div>
  );
}

export default HrRoutes;
