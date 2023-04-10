import React from "react";

function About() {
  return (
    <div className="bg-slate-800 ">
      <div className=" flex flex-col py-10 px-5 sm:px-10 md:px-20 max-w-[1500px] mx-auto box-border">
        <h1 className="text-xl sm:text-4xl text-white font-bold font-mono">
          About Us
        </h1>
        <hr className="w-1/4 mt-2" />
        <p className="text-sm sm:text-xl lg:text-2xl mt-5 text-white">
          Our website is designed to help businesses streamline their HR
          processes and improve their workforce management. Our user-friendly
          platform provides a range of tools to help businesses manage their
          employees effectively, from tracking attendance and performance to
          handling payroll and benefits. Our website also includes powerful
          reporting and analytics features that enable businesses to gain
          valuable insights into their workforce, identify trends, and make
          data-driven decisions. With our secure and reliable platform,
          businesses can save time and money on HR administration, while also
          improving employee engagement and satisfaction. Our goal is to help
          businesses build stronger and more productive teams by providing the
          tools and resources they need to manage their employees effectively.
        </p>
      </div>
    </div>
  );
}

export default About;
