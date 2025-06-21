"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";
import { FollowingPointer } from "../ui/following-pointer";

type Project = {
  description: string;
  Name: string;
  subtitle: string;
  img: string;
  link: string;
  bullets: string[];
  techstack: string[];
  index: number;
  gradientTop: string;
  gradientBottom: string;
  range: number[];
  progress: MotionValue<number>;
  targetScale: number;
  githubLink: string;
};

const Card = ({
  githubLink,
  Name,
  description,
  link,
  techstack,
  subtitle,
  gradientTop,
  gradientBottom,
  img,
  index,
  range,
  progress,
  targetScale,
  bullets,
}: Project) => {
  const container = useRef(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);

  return (
    <motion.div
      ref={container}
      className={cn(
        "rounded-xl relative",
        "h-[80vh] w-[85vw] md:h-[75vh] md:w-[85vw]",
        "max-md:h-[680px] max-md:w-[380px]"
      )}
      style={{
        scale,
        top: `calc(${index * 10}px) md:calc(${index * 15}px)`,
      }}
    >
      <div className="p-2 border-[3px] border-zinc-700 backdrop-blur-sm bg-[rgba(87,83,83,0.12)] h-full w-full rounded-xl">
        <div
          style={{
            background: `linear-gradient(to right, ${gradientTop}, ${gradientBottom})`,
          }}
          className="flex flex-col items-center justify-around h-full w-full rounded-lg relative overflow-hidden"
        >
          <div
            className={cn(
              "absolute inset-0",
              "[background-size:20px_20px]",
              "background-image:radial-gradient(#404040_1px,transparent_1px)",
              "rounded-xl"
            )}
          />
          <div className="rounded-xl pointer-events-none absolute -inset-1 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] bg-black"></div>

          {/* Subtitle */}
          <div className="flex items-center justify-center z-10 w-full pt-4 text-center mb-2">
            <span
              className="text-xl md:text-3xl font-medium"
              style={{
                color: gradientTop,
                textShadow: `0 0 3px ${gradientTop}`,
              }}
            >
              {subtitle}
            </span>
          </div>

          <div className="w-full h-full flex flex-col-reverse justify-evenly lg:flex-row">
            {/* Image Block */}
            <div className="h-full flex justify-center items-end z-10 max-md:mt-2">
              <Link
                href={link}
                passHref
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button asChild>
                  <FollowingPointer>
                    <motion.div
                      style={{
                        boxShadow: `0 0 10px ${gradientTop}, 0 0 20px ${gradientTop}, 0 0 40px ${gradientTop}`,
                        scale: imageScale,
                      }}
                      initial={{ y: 0 }}
                      whileHover={{ y: -10 }}
                      whileTap={{ scale: 0.97 }}
                      className="relative w-full max-w-2xl h-auto overflow-hidden rounded-lg "
                    >
                      <Image
                        className="w-[290px] md:w-full md:h-auto object-contain rounded-lg"
                        src={img}
                        alt="Screenshot of project"
                        height={420}
                        width={600}
                        priority
                      />
                    </motion.div>
                  </FollowingPointer>
                </Button>
              </Link>
            </div>

            {/* Text Section */}
            <div className="md:mt-8 flex z-10 justify-center flex-col gap-3 md:gap-4 lg:max-w-md max-md:px-4">
              <div className="flex gap-2 items-center justify-center font-[600] text-2xl lg:text-3xl">
                <div
                  style={{ background: gradientTop }}
                  className="w-5 h-1 rounded-lg"
                />
                {Name}
                <button
                  type="button"
                  aria-label="View on GitHub"
                  onClick={() => window.open(githubLink, "_blank")}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = gradientTop;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "white";
                  }}
                  className="ml-2 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition-all duration-300 p-2 shadow-inner shadow-white/5 border border-white/5"
                >
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.99992 1.33331C7.12444 1.33331 6.25753 1.50575 5.4487 1.84078C4.63986 2.17581 3.90493 2.66688 3.28587 3.28593C2.03563 4.53618 1.33325 6.23187 1.33325 7.99998C1.33325 10.9466 3.24659 13.4466 5.89325 14.3333C6.22659 14.3866 6.33325 14.18 6.33325 14C6.33325 13.8466 6.33325 13.4266 6.33325 12.8733C4.48659 13.2733 4.09325 11.98 4.09325 11.98C3.78659 11.2066 3.35325 11 3.35325 11C2.74659 10.5866 3.39992 10.6 3.39992 10.6C4.06659 10.6466 4.41992 11.2866 4.41992 11.2866C4.99992 12.3 5.97992 12 6.35992 11.84C6.41992 11.4066 6.59325 11.1133 6.77992 10.9466C5.29992 10.78 3.74659 10.2066 3.74659 7.66665C3.74659 6.92665 3.99992 6.33331 4.43325 5.85998C4.36659 5.69331 4.13325 4.99998 4.49992 4.09998C4.49992 4.09998 5.05992 3.91998 6.33325 4.77998C6.85992 4.63331 7.43325 4.55998 7.99992 4.55998C8.56659 4.55998 9.13992 4.63331 9.66659 4.77998C10.9399 3.91998 11.4999 4.09998 11.4999 4.09998C11.8666 4.99998 11.6333 5.69331 11.5666 5.85998C11.9999 6.33331 12.2533 6.92665 12.2533 7.66665C12.2533 10.2133 10.6933 10.7733 9.20659 10.94C9.44659 11.1466 9.66659 11.5533 9.66659 12.1733C9.66659 13.0666 9.66659 13.7866 9.66659 14C9.66659 14.18 9.77325 14.3933 10.1133 14.3333C12.7599 13.44 14.6666 10.9466 14.6666 7.99998C14.6666 7.1245 14.4941 6.25759 14.1591 5.44876C13.8241 4.63992 13.333 3.90499 12.714 3.28593C12.0949 2.66688 11.36 2.17581 10.5511 1.84078C9.7423 1.50575 8.8754 1.33331 7.99992 1.33331V1.33331Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>

              <div className="text-md md:text-md text-neutral-300">
                {description}
              </div>

              <div className="flex flex-col gap-1 md:gap-2">
                {bullets.map((st, i) => (
                  <div key={i} className="flex gap-1 text-sm font-[400]">
                    <div
                      className="md:mt-1 text-[18px]"
                      style={{ color: gradientTop }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[20px] h-[20px]"
                      >
                        <path
                          opacity="1"
                          d="M12 3C12 7.97056 16.0294 12 21 12C16.0294 12 12 16.0294 12 21C12 16.0294 7.97056 12 3 12C7.97056 12 12 7.97056 12 3Z"
                          fill="currentColor"
                        />
                        <path
                          d="M12 3C12 7.97056 16.0294 12 21 12C16.0294 12 12 16.0294 12 21C12 16.0294 7.97056 12 3 12C7.97056 12 12 7.97056 12 3Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    {st}
                  </div>
                ))}
              </div>

              <div className="techstack flex flex-row gap-1 flex-wrap">
                {techstack.map((tech, i) => (
                  <div
                    key={i}
                    style={{ background: gradientTop }}
                    className="text-sm relative rounded-lg w-fit px-2 py-1 overflow-hidden"
                  >
                    <div className="absolute -inset-1 bg-black/70 pointer-events-none z-0" />
                    <span
                      style={{ color: gradientTop }}
                      className="relative z-10 font-[500]"
                    >
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
