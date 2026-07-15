import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import WhoWeAre from "./components/WhoWeAre.jsx";
import History from "./components/History.jsx";
import MissionVision from "./components/MissionVision.jsx";
import Services from "./components/Services.jsx";
import Programs from "./components/Programs.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhoWeAre />
        <History />
        <MissionVision />
        <Services />
        <Programs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
