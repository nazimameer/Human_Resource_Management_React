import React from "react";

function Navbar() {
  return (
    <>
      <div className=" h-20 bg-slate-900 flex justify-between items-center">
        <div className="w-1/2">
          <h1 className="text-white text-xl sm:text-2xl md:text-4xl pl-[10%] cursor-pointer italic font-bold">
            H R M
          </h1>
        </div>
        <div className="w-1/2">
          <ul className="text-white flex justify-end">
            <li className="pr-[5%] cursor-pointer">About</li>
            <li className="pl-[5%] pr-[10%] cursor-pointer">Contact</li>
            <li className="pr-[10%] cursor-pointer">Faq</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
