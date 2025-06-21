"use client";

import React, { ReactNode, useEffect, useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

export const FollowingPointer = ({ children }: { children: ReactNode }) => {
  const [isHovering, setIsHovering] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const lastPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX - 175;
      const y = e.clientY - 145;
      mouseX.set(x);
      mouseY.set(y);
      lastPosition.current = { x, y };
    };

    const handleScroll = () => {
      const { x, y } = lastPosition.current;
      mouseX.set(x);
      mouseY.set(y);
    };

    if (isHovering) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHovering, mouseX, mouseY]);

  return (
    <>
      <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="inline-block"
      >
        {children}
      </div>

      <AnimatePresence>
        {isHovering && (
          <motion.div
            className="pointer-events-none fixed top-0 left-0 z-50"
            style={{
              x: springX,
              y: springY,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              duration: 0.1,
              delay: 0.1,
              ease: "easeOut",
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              className="inline-flex items-center justify-center rounded-full bg-[rgba(127,127,127,0.2)] backdrop-blur-sm h-[110px] aspect-square"
            >
              <div className="relative size-[95px] rounded-full bg-black p-1">
                <div className="absolute top-1/2 left-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full absolute inset-0"
                  >
                    <path
                      id="curve-view-project"
                      d="M 0 50 A 50 50 0 0 1 100 50 A 50 50 0 0 1 0 50"
                      strokeWidth="0"
                      fill="transparent"
                    />
                    <text>
                      <textPath
                        href="#curve-view-project"
                        startOffset="0"
                        dominantBaseline="hanging"
                        style={{
                          fontSize: "13px",
                          fontWeight: 600,
                          wordSpacing: "5px",
                          letterSpacing: "2.1px",
                          fill: "rgba(242, 242, 242, 0.9)",
                        }}
                      >
                        VIEW PROJECT · VIEW PROJECT ·
                      </textPath>
                    </text>
                  </svg>
                </div>

                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="absolute top-1/2 left-1/2 size-10 -translate-x-1/2 -translate-y-1/2 rotate-45 fill-white opacity-80"
                >
                  <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" />
                </svg>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
