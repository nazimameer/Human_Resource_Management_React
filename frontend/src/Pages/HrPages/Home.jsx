import React from "react";
import SideBar from "../../Components/HrComponents/SideBar/SideBar";
import NavBar from "../../Components/HrComponents/NavBar/NavBar";
import "./Home.css";
import Dashboard from "../../Components/HrComponents/Dashboard/Dashboard";
function Home() {
  return (
    <div>
      <SideBar />
      <NavBar />
      <div className="content bg-slate-900"><Dashboard/></div>
    </div>
  );
}

export default Home;
