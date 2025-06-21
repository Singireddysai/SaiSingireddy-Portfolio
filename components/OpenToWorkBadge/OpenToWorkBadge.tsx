"use client";

import { motion } from "framer-motion";
import React from "react";

const OpenToWorkBadge = () => {
  return (
    <motion.div
      className="pointer-events-none relative inline-flex items-center justify-center rounded-full bg-[rgba(127,127,127,0.2)] backdrop-blur-sm p-0 leading-none font-medium h-[110px] aspect-square"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
    >
      {/* Inner black circle */}
      <div className="relative size-[95px] rounded-full bg-black p-1">
        {/* Circular text path */}
        <div className="absolute top-1/2 left-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full">
          <svg
            viewBox="0 0 100 100"
            fill="black"
            className="w-full h-full absolute inset-0"
            style={{ transformOrigin: "center center" }}
          >
            <path
              id="curve-open-to-work"
              d="M 0 50 A 50 50 0 0 1 100 50 A 50 50 0 0 1 0 50"
              strokeWidth="0"
              fill="transparent"
            />
            <text>
              <textPath
                href="#curve-open-to-work"
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
                OPEN TO WORK · OPEN TO WORK ·
              </textPath>
            </text>
          </svg>
        </div>

        {/* Center icon */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="absolute top-1/2 left-1/2 size-10 -translate-x-1/2 -translate-y-1/2 rotate-45 fill-white text-white opacity-80"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" />
        </svg>
      </div>

      {/* For screen readers */}
      <span className="sr-only">OPEN TO WORK · OPEN TO WORK ·</span>
    </motion.div>
  );
};

export default OpenToWorkBadge;
