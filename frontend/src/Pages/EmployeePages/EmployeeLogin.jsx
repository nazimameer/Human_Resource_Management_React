import React from "react";
import Navbar from "../../Components/LandingPage/Navbar";
import EmployeeLog from "../../Components/EmployeeComponents/EmployeeLogin/EmployeeLogin";
import Footer from "../../Components/LandingPage/Footer";
function EmployeeLogin() {
  return (
    <div className="w-screen h-screen bg-white">
      <Navbar />
      <EmployeeLog />
      <Footer />
    </div>
  );
}

export default EmployeeLogin;
