import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/EmployeePages/Home";
import Applications from "../Pages/EmployeePages/Applications";
import MyProfile from "../Pages/EmployeePages/myProfile";
import SalarySlips from "../Pages/EmployeePages/SalarySlips";
import EmployeeChat from "../Pages/EmployeePages/EmployeeChat";

function employeeRoutes() {
  return (
    <>
      <Routes>
              <Route path="/home" element={ <Home /> } />
              <Route path="/applications" element={<Applications />} />
              <Route path="/myprofile" element={<MyProfile />} />
              <Route path="/salaryslip" element={<SalarySlips />} />
              <Route path="/messages" element={<EmployeeChat/>}/>
      </Routes>
    </>
  );
}

export default employeeRoutes;
