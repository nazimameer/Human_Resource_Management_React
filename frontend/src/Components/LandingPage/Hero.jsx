import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
function Hero() {
  return (
    <>
         <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
          <div className="sm:px-16 px-6 flex-1 pt-20 md:pt-36">
            <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold">
            Let's Build A Strong Work Force Together
            </h1>

           
            <button type="button" className="bg-slate-900 text-white rounded-full mt-10 flex flex-row relative justify-center items-center py-3 px-6 outline-none">
              
              <Link to={"/employee/login"} className="flex-1">
                Sign In
              </Link>

            </button>

        <p className=" text-[27px] text-black-100 font-light mt-5">
            Streamline your business with our management solutions
            </p>
          </div>

          <div className="xl:flex-[1.5] flex justify-center items-center w-full xl:h-screen lg:mt-[7%]">
              <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
                <img src="../images/landing.svg" fill  alt="hero" className="object-contain sm:w-[650px] sm:h-[650px] md:w-[750px] md:ml-10" />
              </div>
              <div>

              </div>
          </div>
        </div>
    </>
  );
}

export default Hero;
