"use client";
import React from "react";
import { FlipWords } from "../ui/flip-words";
import Character from "./Character";
import Link from "next/link";
import Image from "next/image";

export default function AboutMe() {
  const words = [
    "Scalable",
    "Reliable",
    "Responsive",
    "Aesthetic",
    "User Friendly",
  ];
  const desc =
    "As a Full-Stack Developer (and a little bit of Everything), I focus on crafting professional, user-centric applications that not only work flawlessly but also feel right. I blend clean design with efficient code to deliver solutions that are technically solid and visually appealing.";

  const desc2 =
    "When I'm not deep into work, I enjoy exploring new ideas and nurturing my curiosity. I value balance in life and strive to embrace every moment with intention. Each day is an opportunity, and I believe in starting it with purpose and a drive to make a meaningful impact.";
  return (
    <>
      <div id="about" className=" pt-28 flex flex-col px-2 lg:px-28">
        <h2 className="text-center text-5xl lg:text-6xl mb-16 font-[300]">
          About Me
        </h2>

        <div className="flex justify-start items-center px-4">
          <div className="text-5xl font-extrabold bg-gradient-to-b from-neutral-500 via-neutral-400 to-neutral-200 bg-clip-text text-transparent ">
            Building
            <br className="md:hidden" />
            <div className="w-[360px]">
              <FlipWords words={words} />
              <br />
            </div>
            Web
            <br className="md:hidden" /> Experiences
          </div>
        </div>
        <div className=" flex justify-end mt-16 px-2">
          <Character text={desc} />
        </div>
        <div className=" flex flex-col justify-start mt-16">
          <Character text={desc2} />
          <div className="flex mt-4 max-w-lg justify-center items center gap-8 mb-4">
            <Link href={"https://www.linkedin.com/in/sai-singireddy-8352a6291"}>
              <Image
                src={"/linkedin.svg"}
                alt="linkedin"
                height={28}
                width={28}
              />
            </Link>
            <Link href={"https://github.com/Singireddysai"}>
              <Image src={"/github.svg"} alt="github" height={28} width={28} />
            </Link>
            <Link href={"https://x.com/Ak4zA__"}>
              <Image
                src={"/twitter.svg"}
                alt="twitter"
                height={28}
                width={28}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
