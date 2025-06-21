"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type CharacterRevealProps = {
  text: string;
};

const AboutMe: React.FC<CharacterRevealProps> = ({ text }) => {
  const containerRef = useRef<HTMLParagraphElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "start 0.3"], // adjust as needed
  });

  const words = text.split(" ");

  return (
    <motion.p
      ref={containerRef}
      className="max-w-lg flex flex-wrap gap-2 text-2xl font-medium leading-snug text-neutral-500"
    >
      {words.map((word, wordIndex) => {
        const start = wordIndex / words.length;
        const end = start + 1 / words.length;
        return (
          <Word
            key={wordIndex}
            word={word}
            range={[start, end]}
            progress={scrollYProgress}
          />
        );
      })}
    </motion.p>
  );
};

type WordProps = {
  word: string;
  range: [number, number];
  progress: any;
};

const Word: React.FC<WordProps> = ({ word, range, progress }) => {
  const characters = word.split("");
  const total = characters.length;
  const span = range[1] - range[0];

  return (
    <span className="flex gap-[1px]">
      {characters.map((char, i) => {
        const charStart = range[0] + (i / total) * span;
        const charEnd = range[0] + ((i + 1) / total) * span;

        return (
          <Character
            key={i}
            char={char}
            progress={progress}
            range={[charStart, charEnd]}
          />
        );
      })}
      <span className="w-1" /> {/* space between words */}
    </span>
  );
};

type CharacterProps = {
  char: string;
  progress: any;
  range: [number, number];
};

const Character: React.FC<CharacterProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const color = useTransform(
    progress,
    range,
    ["#ece7e7", "#FFFFFF"] // grey to white
  );

  return (
    <motion.span style={{ opacity, color }} className="inline-block font-[200]">
      {char}
    </motion.span>
  );
};

export default AboutMe;
