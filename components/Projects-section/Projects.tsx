"use client";
import React, { useRef } from "react";
import { projects } from "@/data";
import Card from "./Card";
import { useScroll } from "framer-motion";

const Projects = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <>
      <div
        id="work"
        className="text-center text-neutral-300 tracking-wide pt-18 md:mt-36 font-[300] text-5xl lg:text-6xl"
      >
        Curated{" "}
        <span className="text-6xl lg:text-7xl font-tangerine font-extrabold bg-gradient-to-b mr-1 from-indigo-300 via-sky-100 to-white bg-clip-text text-transparent tracking-2">
          Work
        </span>
      </div>

      <div ref={container} className="flex flex-col justify-center">
        {projects.map((project, index) => {
          const count = projects.length;

          const step = 1 / count;
          const start = index * step;
          const end = start + step;

          const targetScale = 1 - (count - index) * 0.03;

          return (
            <div
              className="flex items-center justify-center sticky top-0 z-10 w-full h-[100vh]"
              key={index}
            >
              <Card
                {...project}
                index={index}
                progress={scrollYProgress}
                range={[start, end]}
                targetScale={targetScale}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
