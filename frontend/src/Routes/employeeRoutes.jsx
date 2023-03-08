import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../Pages/EmployeePages/Home'
import Applications from "../Pages/EmployeePages/Applications";
import MyProfile from '../Pages/EmployeePages/myProfile'

function employeeRoutes() {
  return (
  <>
    <Routes>
      <Route path='/home' element={ <Home/> }/>
      <Route path='/applications' element={ <Applications/> }/>
      <Route path='/myprofile' element={ <MyProfile/> } />

    </Routes>
  </>
  )
}

export default employeeRoutes;
