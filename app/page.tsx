"use client";

import React, { useEffect, useState } from "react";
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
import HamsterLoader from "@/components/Loader/Loader";

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <HamsterLoader />
      </div>
    );
  }

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

export default Page;
