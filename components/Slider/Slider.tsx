"use client";
import React from "react";
import "./Slider.css";

const Slider = ({ rotate, reverse }: { rotate: string; reverse: string }) => {
  return (
    <div className="w-[100vw] overflow-x-hidden py-8 lg:py-0 lg:overflow-visible lg:w-full">
      <div
        className="slider bg-[rgba(71,71,71,0.5)] backdrop-blur-md border-2 border-neutral-600 overflow-hidden"
        data-reverse={reverse}
        style={
          {
            "--height": "50px",
            "--quantity": 8,
            "--rotate": `${rotate}`,
          } as React.CSSProperties
        }
      >
        <div style={{ fontSize: "clamp(0.75rem, 2vw, 1rem)" }} className="list">
          <div
            className="item flex justify-around items-center"
            style={{ "--position": 1 } as React.CSSProperties}
          >
            <span>•</span> <span>Web Designer</span>
          </div>
          <div
            className="item flex justify-around items-center"
            style={{ "--position": 2 } as React.CSSProperties}
          >
            <span>•</span> <span>Web Developer</span>
          </div>
          <div
            className="item flex justify-around items-center"
            style={{ "--position": 3 } as React.CSSProperties}
          >
            <span>•</span> <span>Full Stack</span>
          </div>
          <div
            className="item flex justify-around items-center"
            style={{ "--position": 4 } as React.CSSProperties}
          >
            <span>•</span> <span>Web Animations</span>
          </div>
          <div
            className="item flex justify-around items-center"
            style={{ "--position": 5 } as React.CSSProperties}
          >
            <span>•</span> <span>Custom Integrations</span>
          </div>
          <div
            className="item flex justify-around items-center"
            style={{ "--position": 6 } as React.CSSProperties}
          >
            <span>•</span> <span>Web Flow</span>
          </div>
          <div
            className="item flex justify-around items-center"
            style={{ "--position": 7 } as React.CSSProperties}
          >
            <span>•</span> <span>AI Integrations</span>
          </div>
          <div
            className="item flex justify-around items-center"
            style={{ "--position": 8 } as React.CSSProperties}
          >
            <span>•</span> <span>SEO</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
