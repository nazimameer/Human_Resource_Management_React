import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
function Hero() {
  return (
    <>
        <div className="h-[75vh] max-h-[500px] mb-10 flex flex-col sm:flex-row justify-between mx-auto max-w-[1500px] px-10">
          <div className="w-full h-full sm:w-1/2 flex flex-col justify-center self-start sm:self-center order-2 sm:order-1 sm:px-10">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-white">
              Let's Build A Strong Work Force Together
            </h1>
            <p className="text-base md:text-lg lg:text-xl font-normal my-3 text-white">
              Streamline your business with our management solutions
            </p>
            <div className="flex gap-1">
              <Link
                to={"/hr/login"}
                className="bg-sky-500 w-fit px-4 py-2 text-sm md:text-base lg:text-lg font-semibold rounded text-white hover:bg-sky-700"
              >
                I'm HR
              </Link>
              <Link
                to={"/employee/login"}
                className="bg-sky-500 w-fit px-4 py-2 text-sm md:text-base lg:text-lg font-semibold rounded text-white hover:bg-sky-700"
              >
                I'm Employee
              </Link>
            </div>
          </div>
          <div className="w-full h-full sm:w-1/2 bg-center bg-no-repeat bg-contain self-end sm:self-center order-1 sm:order-2 image"></div>
        </div>
    </>
  );
}

export default Hero;
