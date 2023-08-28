import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="w-full fixed z-10 bg-white ">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link to={`/`} className="flex justify-center items-center">
        
        <img
          src="../images/seLogo.svg"
          alt="controlhub"
          width={118}
          height={18}
          className="object-contain"
        />
        </Link>
        <button className="text-primary-blue rounded-full bg-slate-900 min-w-[130px] flex flex-row relative justify-center items-center py-3 px-6 outline-none;" type="button">
          <Link to={"/employee/login"} className="flex-1 text-white">
            Sign In
          </Link>
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
