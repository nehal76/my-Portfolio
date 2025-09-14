import React from "react";

import Navbar from "./com/Navbar";
import Hero from './com/Hero'
import { TechStack } from "./com/TechStack";
import { ProjectShowCase } from "./com/ProjectShowCase";
import AboutSection from "./com/AboutSection";
import Contact from "./com/Contact";
import Footer from './com/Footer';

const App = () => {
  return (
    <>
   <div className="bg-white scroll-smooth">
      <Navbar  />
      <Hero />
      <TechStack/>
      <ProjectShowCase />
      <AboutSection/>
      <Contact/>
      <Footer/>
      </div>


    </>
  )
}
export default App;