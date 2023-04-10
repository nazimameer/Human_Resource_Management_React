import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  const Navigate = useNavigate();
  const [menu, SetMenu] = useState(false);
  const HandleLogout = () => {
    localStorage.removeItem("employeejwt");
    Navigate("/employee/login");
  };
  return (
    <>
      <div className="w-full md:h-16 h-14 xl:h-20 bg-slate-900 flex md:justify-end justify-between content-center fixed z-50">
        <div className="text-xl text-white py-3 md:hidden ml-20">
          <h1>HRM</h1>
        </div>
        <div className="flex p-4 content-center xl:pt-5">
          <i className="bx bxs-bell text-xl md:text-2xl  text-white px-5 cursor-pointer"></i>
          <img
            className="w-6 md:w-8 xl:mb-3 bg-white rounded-full cursor-pointer"
            src=""
            alt=""
            onClick={() => SetMenu(!menu)}
          />
          {menu ? (
            <div class="relative inline-block text-left mt-10">
              <div
                class=" absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
              >
                <div class="py-1" role="none">
                  <div>
                    <button
                      type="submit"
                      class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-3"
                      onClick={HandleLogout}
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default NavBar;
