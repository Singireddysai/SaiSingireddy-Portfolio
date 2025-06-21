"use client";
import React from "react";
import "./Hero.css";
import Contact from "../Drawer-Contact/Contact";
import { motion } from "framer-motion";
import Image from "next/image";
import { toast } from "sonner";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { ShinyText } from "../ui/ShinyText";
import { copyToClipboard } from "@/lib/copyToClipboard";

const Hero = () => {
  const words = "Hey there👋, I'm Sai Singireddy a Full Stack Developer.";
  const email = "hello@saisingireddy.in";

  const handleCopy = async () => {
    if ("vibrate" in navigator) {
      navigator.vibrate(100);
    }

    try {
      await copyToClipboard(email);
      toast(
        <div className="flex justify-center items-center gap-2">
          <Image src="/copy-success.svg" alt="success" width={22} height={22} />
          <span className="text-sm md:text-md">
            E-mail copied to clipboard.
          </span>
        </div>
      );
    } catch (err) {
      toast.error("Failed to copy email.");
      console.error("Clipboard copy failed: ", err);
    }
  };

  return (
    <div className="hero">
      <div>
        <div className="live-now mt-12 mb-4 flex justify-center items-center">
          <HoverBorderGradient
            containerClassName="rounded-full p-1"
            as="a"
            href="https://hirelyft.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="dark:bg-black bg-clip-text border-1 border-neutral-800 text-white flex items-center space-x-2 group"
          >
            <div className="flex items-center">
              <Image src="/new.png" alt="badge" height={28} width={28} />
              <ShinyText>Hirelyft is live now</ShinyText>
              <Image
                src="/angle-right.svg"
                alt="angle-right"
                height={18}
                width={18}
                className="mt-1 ml-1 transition-all duration-200 group-hover:translate-x-0.5"
              />
            </div>
          </HoverBorderGradient>
        </div>
        <div className=" title-card flex justify-center">
          <div className="px-[5%] md:px-0 title flex flex-col justify-center  max-w-5xl ">
            <motion.div
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="text-4xl md:text-7xl bg-gradient-to-b from-neutral-500 via-neutral-400 to-neutral-200 font-bold bg-clip-text text-transparent"
            >
              <div className="md:px-18">
                Your{" "}
                <span className="font-tangerine text-6xl md:text-9xl font-extrabold text-white">
                  ideas
                </span>
                , built into
              </div>
              <div className="md:-mt-8">
                {" "}
                digital products that{" "}
                <span className="font-tangerine text-6xl md:text-9xl font-extrabold text-white">
                  matter
                </span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
              className="mt-4 text-md md:text-xl flex justify-center font-[400] text-neutral-300 "
            >
              <TextGenerateEffect words={words} />
            </motion.div>
          </div>
        </div>
        <div className="cta-buttons flex justify-center flex-row">
          <div className="py-6 flex flex-col md:flex-row justify-center gap-4 md:gap-12 button-container">
            <div className="flex justify-center">
              <Contact />
            </div>
            <div className="flex text-md items-center px-4 py-3 mail text-neutral-200 rounded-full ">
              <button className="flex gap-2 items-center" onClick={handleCopy}>
                <Image src="/copy.svg" alt="copy" height={22} width={22} />
                <span>
                  <ShinyText>{email}</ShinyText>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
