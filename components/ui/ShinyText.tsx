"use client";

import React, { CSSProperties, FC, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ShinyTextProps {
  children: ReactNode;
  shimmerWidth?: number;
  className?: string;
}

export const ShinyText: FC<ShinyTextProps> = ({
  children,
  shimmerWidth = 100,
  className,
}) => {
  return (
    <span className={cn("relative inline-block", className)}>
      {/* Base visible text */}
      <span className="text-neutral-300 dark:text-neutral-400">{children}</span>

      {/* Shimmer overlay */}
      <span
        style={
          {
            "--shimmer-width": `${shimmerWidth}px`,
          } as CSSProperties
        }
        className={cn(
          "absolute top-0 left-0 w-full h-full",
          "bg-gradient-to-r from-transparent via-white to-transparent",
          "bg-[length:var(--shimmer-width)_100%] bg-no-repeat animate-shiny-text",
          "bg-clip-text text-transparent pointer-events-none select-none"
        )}
        aria-hidden="true"
      >
        {children}
      </span>
    </span>
  );
};
