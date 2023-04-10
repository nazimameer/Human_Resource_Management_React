import React from "react";
import "./SideBar.css";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
function SideBar() {
  const [isActive, setIsActive] = useState(true);
  const [value, setValue] = useState("");

  const handleButtonClick = () => {
    setIsActive(!isActive);
  };

  const handleActive = () => {
    setIsActive(true);
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsActive(false);
    }
  }, []);
  return (
    <>
      <div className={isActive ? "sidebar active" : "sidebar"}>
        <div className="logo_content">
          <div className="logo">
            <div className="logo_name">HRM</div>
          </div>
          <i
            className="bx bx-menu cursor-pointer"
            id="btn"
            onClick={handleButtonClick}
          ></i>
        </div>
        <div className="nav_list">
          <li key={"search"}>
            <i className="bx bx-search" onClick={handleActive}></i>
            <input
              type="text"
              name=""
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="search"
            />

            <span className="tooltip">Search</span>
          </li>
          <li key={"dashboard"}>
            <Link to="/employee/home">
              <i className="bx bx-grid-alt"></i>
              <span className="links_name">Dashboard</span>
            </Link>
            <span className="tooltip">Dashboard</span>
          </li>
          <li key={"employees"}>
            <Link to="/employee/myprofile">
              <i className="bx bx-user"></i>
              <span className="links_name">My Profile</span>
            </Link>
            <span className="tooltip">My Profile</span>
          </li>
          <li key={"messages"}>
            <Link to={'/employee/messages'}>
              <i className="bx bx-chat"></i>
              <span className="links_name">Messages</span>
            </Link>
            <span className="tooltip">Messages</span>
          </li>
          {/* <li key={"analytics"}>
            <a href="/">
              <i className="bx bx-pie-chart-alt-2"></i>
              <span className="links_name">Analytics</span>
            </a>
            <span className="tooltip">Analytics</span>
          </li> */}
          <li key={"announcement"}>
            <Link to={"/employee/announcements"}>
              <i className="bx bx-folder"></i>
              <span className="links_name">Anoucement</span>
            </Link>
            <span className="tooltip">Anoucement</span>
          </li>
          <li key={"application"}>
            <Link to="/employee/applications">
              <i className="bx bx-layer"></i>
              <span className="links_name">Applications</span>
            </Link>
            <span className="tooltip">Applications</span>
          </li>
          <li key={"salary slip"}>
            <Link to={"/employee/salaryslip"}>
              <i className="bx bx-purchase-tag"></i>
              <span className="links_name">Salary slip</span>
            </Link>
            <span className="tooltip">Salary slip</span>
          </li>
          {/* <li>
            <a href='/'>
                <i className='bx bx-cog' ></i>
                <span className="links_name">Settings</span>
            </a>
            <span className="tooltip">Settings</span>
        </li> */}
        </div>
        {/* <div className="profile_content">
          <div className="profile">
            <div className="profile_details">
              <img
                src="../images/adminlogo.jpeg"
                alt=""
                className="adminlogo"
              />
              <div className="name_job">
                <div className="name">akshay</div>
                <div className="job">HR id:39287</div>
              </div>
            </div>
            <div
              // style="color: white;"
              onClick={HandleLogout}
            >
              <i className="bx bx-log-out cursor-pointer" id="log_out"></i>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default SideBar;
