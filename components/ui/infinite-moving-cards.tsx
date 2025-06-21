"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    name: string;
    url: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  const speedMap = {
    fast: "20s",
    normal: "40s",
    slow: "80s",
  };

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const scroller = scrollerRef.current;
      const originalItems = Array.from(scroller.children);
      let totalWidth = scroller.scrollWidth;

      // Clone until content width is at least 2x the container
      while (totalWidth < containerWidth * 2) {
        originalItems.forEach((item) => {
          const clone = item.cloneNode(true);
          scroller.appendChild(clone);
        });
        totalWidth = scroller.scrollWidth;
      }

      setStart(true);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative z-20 max-w-3xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
      style={{
        ["--animation-duration" as any]: speedMap[speed],
        ["--animation-direction" as any]:
          direction === "left" ? "normal" : "reverse",
      }}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex items-center shrink-0 flex-nowrap gap-4 py-2",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="flex justify-center items-center p-1 shrink-0 rounded-lg border border-b-0  border-zinc-700 bg-[linear-gradient(180deg,#27272a,#18181b)]"
            key={idx}
          >
            <div className="icon flex gap-2 justify-center items-center text-neutral-400">
              <Image src={item.url} alt={item.name} height={18} width={18} />
              <p>{item.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
