import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../Pages/EmployeePages/Home'
import Applications from "../Pages/EmployeePages/Applications";

function employeeRoutes() {
  return (
  <>
    <Routes>
      <Route path='/home' element={ <Home/> }/>
      <Route path='/applications' element={ <Applications/> }/>

    </Routes>
  </>
  )
}

export default employeeRoutes;
