import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
function Hero() {
  return (
    <div className="bg-slate-900">
      <div className="bg-slate-900 flex flex-col sm:flex-row">
        <div className="bg-slate-900  text-white flex-col justify-center pt-[10%] sm:pt-[18%] w-full sm:w-1/2">
          <div className="flex sm:pl-14 justify-center">

          <div className="">
            <span className="text-6xl sm:text-[450%]">Let's ! </span> <span className="sm:text-[150%]">Build </span> <br/> 
            <span className="text-lg  sm:text-[120%]">
             a Strong Workforce,
            Together
            </span>
          </div>
          </div>
            <div className="flex sm:pl-16 gap-2 justify-center mt-3">
              <Link
                to={"/hr/login"}
                className="btn flex justify-center items-center sm:text-lg  border-2 w-[20%] sm:w-[30%] h-10 sm:h-14 rounded-xl border-sky-500 hover:shadow-lg hover:shadow-blue-400 hover:border-white bg-sky-400 hover:bg-slate-900 ease-out duration-300"
              >
                I'm HR
              </Link>

              <Link
                to={"/employee/login"}
                className="btn flex justify-center sm:text-lg items-center border-2 w-[40%] sm:w-[60%] h-10 sm:h-14 rounded-xl border-sky-500 hover:shadow-lg hover:shadow-blue-400 hover:border-white hover:bg-sky-400 ease-out duration-300"
              >
                I'm Employee
              </Link>
            </div>
        </div>
        <div className="w-full sm:w-1/2 sm:pt-[10%] flex justify-center">
            <img
              src="https://orbify.ai/wp-content/uploads/2019/02/Maxifier-office_animated.svg"
              className="imageLanding"
              alt=""
            />
        </div>
      </div>
    </div>
  );
}

export default Hero;
