import React from "react";
import SideBar from "../../Components/HrComponents/SideBar/SideBar";
import NavBar from "../../Components/HrComponents/NavBar/NavBar";
import "./Home.css";
function Home() {
  return (
    <div>
      <SideBar />
      <NavBar />
      <div className="content">{/* <Dashboard/> */}</div>
    </div>
  );
}

export default Home;
