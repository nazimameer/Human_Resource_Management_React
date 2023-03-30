import React from "react";
import Hero from "../Components/LandingPage/Hero";
import Navbar from "../Components/LandingPage/Navbar";
import About from '../Components/LandingPage/About'
import Contactus from "../Components/LandingPage/Contactus";
import Footer from "../Components/LandingPage/Footer";
function LandingPage() {
  return (
    <div className="bg-slate-900 h-screen">
      <Navbar />
      <Hero />
      <About/>
      <Contactus/>
      <Footer/>
    </div>
  );
}

export default LandingPage;
