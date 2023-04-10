import React from "react";

function Navbar() {
  return (
    <div className="bg-slate-900">
      <nav className="w-full flex py-6 justify-between items-center navbar z-20 sticky">
        <img
          src="../images/controlhublogo.png"
          alt="controlhub"
          className="w-[124px] sm:w-[150px] md:w-[200px] ml-6"
        />
        <ul className="list-none flex   items-center flex-1 mt-3 justify-end sm:justify-end mr-5">
          <li className="font-poppins font-normal cursor-pointer text-[12px] sm:text-[16px] md:text-[22px] text-white mr-4  sm:mr-10">
            About
          </li>
          <li className="font-poppins font-normal cursor-pointer text-[12px] sm:text-[16px] md:text-[22px] text-white mr-4 sm:mr-10">
            Contact
          </li>
          <li className="font-poppins font-normal cursor-pointer text-[12px] sm:text-[16px] md:text-[22px] text-white">
            Faq
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
