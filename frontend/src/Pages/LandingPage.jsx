import React from "react";
import './LandingPage.css'
import Hero from "../Components/LandingPage/Hero";
import Navbar from "../Components/LandingPage/Navbar";
// import About from '../Components/LandingPage/About'
// import Contactus from "../Components/LandingPage/Contactus";
import Footer from "../Components/LandingPage/Footer";
function LandingPage() {
  return (
    <div className="bg-white relative">
      <Navbar />
      <main className="overflow-hidden">
      <Hero />
      </main>
      <Footer/>
    </div>
  );
}

export default LandingPage;
