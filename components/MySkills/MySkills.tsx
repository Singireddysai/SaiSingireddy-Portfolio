"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { techStack } from "@/data";

const MySkills = () => {
  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div id="skills" className="px-2 pt-24">
      <div className="flex flex-col justify-center items-center gap-2">
        <motion.div ref={imageRef} style={{ rotate }} className="image">
          <Image
            className="rounded-full"
            src="/steel-flower.webp"
            alt="Rotating steel flower"
            height={324}
            width={324}
          />
        </motion.div>

        <div className="text-center text-neutral-300 tracking-wide font-[300] text-6xl -mt-12">
          My Skills
        </div>

        <div className="flex flex-wrap justify-center items-center lg:max-w-4xl gap-4 mt-10">
          {techStack.map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-neutral-400 text-sm border border-neutral-500 px-3 py-2 rounded-lg bg-neutral-800/50 backdrop-blur-sm shadow-sm "
            >
              <Image src={tech.url} alt={tech.name} height={20} width={20} />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySkills;
