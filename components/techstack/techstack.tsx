"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[10rem] -mt-24 rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={tech1} direction="right" speed="fast" />
      <InfiniteMovingCards items={tech2} direction="left" speed="fast" />
      <InfiniteMovingCards items={tech3} direction="right" speed="fast" />
    </div>
  );
}

const tech1 = [
  {
    name: "next.js",
    url: "/techstack/Next.js.svg",
  },
  {
    name: "Node",
    url: "/techstack/Node.js.svg",
  },
  {
    name: "Postman",
    url: "/techstack/Postman.svg",
  },
  {
    name: "React",
    url: "/techstack/React.svg",
  },
  {
    name: "Typescript",
    url: "/techstack/TypeScript.svg",
  },
  {
    name: "Bootstrap",
    url: "/techstack/Bootstrap.svg",
  },
  {
    name: "Git",
    url: "/techstack/Git.svg",
  },
  {
    name: "Firebase",
    url: "/techstack/Firebase.svg",
  },
];
const tech2 = [
  {
    name: "Express",
    url: "/techstack/Express.svg",
  },
  {
    name: "CSS",
    url: "/techstack/CSS3.svg",
  },
  {
    name: "Postman",
    url: "/techstack/Figma.svg",
  },
  {
    name: "HTML",
    url: "/techstack/HTML5.svg",
  },
  {
    name: "JavaScript",
    url: "/techstack/JavaScript.svg",
  },
  {
    name: "npm",
    url: "/techstack/npm.svg",
  },
  {
    name: "Postgre",
    url: "/techstack/PostgresSQL.svg",
  },
  {
    name: "Vercel",
    url: "/techstack/Vercel.svg",
  },
];
const tech3 = [
  {
    name: "Vite",
    url: "/techstack/Vite.js.svg",
  },
  {
    name: "VS Code",
    url: "/techstack/VS Code.svg",
  },
  {
    name: "GitHub",
    url: "/techstack/GitHub.svg",
  },
  {
    name: "Streamlit",
    url: "/techstack/Streamlit.svg",
  },
  {
    name: "ESLint",
    url: "/techstack/ESLint.svg",
  },
  {
    name: "Tailwind",
    url: "/techstack/Tailwind CSS.svg",
  },
  {
    name: "Supabase",
    url: "/techstack/supabase.svg",
  },
];
