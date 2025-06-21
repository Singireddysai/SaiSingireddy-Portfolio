"use client";
import React, { useEffect } from "react";
import ParticlesComponent from "@/components/particles";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import { GlowingEffectDemo } from "@/components/Bento/Bento";
import Projects from "@/components/Projects-section/Projects";
import AboutMe from "@/components/AboutMe/AboutMe";
import MySkills from "@/components/MySkills/MySkills";
import Lenis from "lenis";
import Outro from "@/components/Outro/Outro";
import Footer from "@/components/Footer/Footer";

const page = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <div className="particles absolute" id="hero">
        <ParticlesComponent />
      </div>
      <Navbar />
      <Hero />
      <GlowingEffectDemo />
      <Projects />
      <AboutMe />
      <MySkills />
      <Outro />
      <Footer />
    </>
  );
};

export default page;
