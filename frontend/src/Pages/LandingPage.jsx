import React from "react";
import Hero from "../Components/LandingPage/Hero";
import Navbar from "../Components/LandingPage/Navbar";
import About from '../Components/LandingPage/About'
import Contactus from "../Components/LandingPage/Contactus";
import Footer from "../Components/LandingPage/Footer";
function LandingPage() {
  return (
    <div className="bg-slate-900 ">
      <Navbar />
      <div className="bg-slate-900 min-h-[90vh]">
      <Hero />
      <About/>
      <Contactus/>
      <Footer/>
      </div>
    </div>
  );
}

export default LandingPage;
