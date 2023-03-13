import React from "react";
import Navbar from "../../Components/LandingPage/Navbar";
import EmployeeLog from "../../Components/EmployeeComponents/EmployeeLogin/EmployeeLogin";
function EmployeeLogin() {
  return (
    <div className="w-screen h-screen bg-slate-900">
      <Navbar />
      <EmployeeLog />
    </div>
  );
}

export default EmployeeLogin;
