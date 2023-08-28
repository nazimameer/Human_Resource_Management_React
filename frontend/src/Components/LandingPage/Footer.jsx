import React from "react";

function Footer() {
  return (
    <footer className="w-full absolute z-10 bg-white ">
      <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row justify-center items-center sm:justify-between sm:items-center sm:px-16 px-6 py-4">
        <div className="flex justify-center items-center">
          <img
            src="../images/seLogo.svg"
            alt=""
            width={118}
            height={18}
            className="object-contain"
          />
        </div>

        <p className="text-center text-sm text-gray-500 mt-3 sm:mt-0 flex justify-center items-center">
          Copyright &copy; 2023. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
