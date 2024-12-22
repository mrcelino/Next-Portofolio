import React from "react";
import Navbar from "./main/navbar";
import Hero from "./main/hero";
import About from "./main/about";
import Projects from "./main/project";
import Skills from "./main/skills";
import Certificate from "./main/certificates";
import Contact from "./main/contact";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificate />
      <Contact />
    </div>
  );
}
