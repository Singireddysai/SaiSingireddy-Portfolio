"use client";
import React, { useRef } from "react";
import Slider from "../Slider/Slider";
import Image from "next/image";
import { useInView, motion } from "framer-motion";
import OpenToWorkBadge from "../OpenToWorkBadge/OpenToWorkBadge";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import GetInTouch from "../GetInTouch/GetInTouch";
import { useEffect, useState } from "react";
const Outro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const sharedWrapperClasses =
    "flex flex-col gap-6 items-center justify-center text-center";
  const isLarge = useIsLargeScreen();

  const xOffset = isLarge ? 150 : 0;

  const FloatingCard = ({
    src,
    alt,
    size,
  }: {
    src: string;
    alt: string;
    size: number;
  }) => (
    <motion.div
      animate={{ y: [0, 14] }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      className="rounded-lg bg-[rgba(155,155,155,0.1)] backdrop-blur-sm h-56 w-56 mb-4"
    >
      <div className="rounded-t-lg bg-neutral-800 flex h-8 px-3 py-0.5 gap-1 items-center">
        {["bg-red-600", "bg-orange-600", "bg-yellow-600", "bg-green-600"].map(
          (color, i) => (
            <span key={i} className={`h-2 w-2 rounded-full ${color}`} />
          )
        )}
      </div>
      <div className="flex justify-center items-center h-full w-full rounded-b-lg">
        <Image src={src} alt={alt} height={size} width={size} />
      </div>
    </motion.div>
  );

  return (
    <>
      <div className="mt-32">
        <div className="relative flex justify-center">
          <div className="absolute z-9">
            <Slider rotate="-5deg" reverse="false" />
          </div>
          <div className="absolute z-10">
            <Slider rotate="5deg" reverse="true" />
          </div>
        </div>
      </div>

      <div className="mt-16 px-4">
        <MaskContainer
          revealText={
            <motion.div ref={ref} className={sharedWrapperClasses}>
              <motion.div
                initial={{ x: -xOffset, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl md:text-5xl font-semibold tracking-wider text-white"
              >
                Got Something Big in Mind?
              </motion.div>

              <motion.div
                initial={{ x: xOffset, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="text-3xl md:text-4xl font-light text-neutral-500 flex items-center gap-4 tracking-wider"
              >
                Let&apos;s Build It Together <OpenToWorkBadge />
              </motion.div>
            </motion.div>
          }
          className="h-[30rem] rounded-md bg-transparent"
        >
          <div className={sharedWrapperClasses}>
            <div className="text-4xl md:text-5xl font-semibold tracking-wider text-slate-800">
              Got Something <span className="text-indigo-800">Big</span> in
              Mind?
            </div>
            <div className="text-3xl md:text-4xl font-light text-neutral-800 flex items-center gap-4 tracking-wider">
              Let&apos;s Make It <span className="text-indigo-800">Happen</span>{" "}
              <OpenToWorkBadge />
            </div>
          </div>
        </MaskContainer>

        <div
          id="contact"
          className="flex justify-center items-center text-2xl md:text-3xl text-center pt-14 px-4"
        >
          I&apos;m open to Full-time roles and Freelance collab
        </div>

        <div className="w-full flex justify-center items-center mt-4">
          <div className="text-lg md:text-xl font-light max-w-3xl text-center text-neutral-600">
            I specialize in building dynamic web applications and creating
            smooth, user-friendly experiences.
          </div>
        </div>

        <div className="flex flex-col justify-center items-center my-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-y-10 gap-x-42 w-full px-4">
            <FloatingCard src="/internet.svg" alt="internet" size={144} />

            <div className="mt-4 md:mt-26">
              <GetInTouch />
            </div>

            <FloatingCard src="/saturn.svg" alt="saturn" size={164} />
          </div>

          <div className="mt-2">
            <Image
              src="/pillar.svg"
              alt="pillar"
              height={325}
              width={194}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Outro;

const useIsLargeScreen = () => {
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsLarge(window.innerWidth >= 1024); // Tailwind's 'lg' starts at 1024px
    };

    checkScreen(); // Initial check
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return isLarge;
};
