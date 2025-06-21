"use client";

import {
  Box,
  Lock,
  Search,
  Settings,
  Sparkles,
  Earth,
  Wrench,
  Star,
} from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import Lottie from "lottie-react";
import animationData from "@/assets/animations/collaboration-animated.json";
import "./Bento.css";
import InfiniteMovingCardsDemo from "../techstack/techstack";
import { BackgroundBeams } from "../ui/background-beams";
import Globe from "@/components/github-globe/Globe";
import { AnimatedListDemo } from "../Notification-Animation/Notifications";
import CopyEmailButton from "../ui/CopyEmailButton";

export function GlowingEffectDemo() {
  return (
    <ul className="p-4 mt-16 md:px-24 grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-4">
      {/* card-1 */}
      <li
        className={`min-h-[14rem] list-none md:[grid-area:1/1/2/7] xl:[grid-area:1/1/4/5] `}
      >
        <div className="relative h-full rounded-2xl border-neutral-700 border-2 p-2 md:rounded-3xl md:p-2">
          <GlowingEffect
            borderWidth={3}
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <div className="bento-card group border-0.75 relative backdrop-blur-sm bg-[rgba(87,83,83,0.12)] flex h-full flex-col  gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
            <div className="relative flex flex-1 flex-col justify-between gap-3">
              <div className="lottie absolute p-4 -top-22">
                <Lottie
                  height={100}
                  width={200}
                  autoplay
                  loop
                  animationData={animationData}
                />
              </div>
              <div className="w-fit rounded-lg border border-gray-600 p-2">
                <Box className="h-4 w-4 text-neutral-400" />
              </div>
              <BackgroundBeams />

              <div className="space-y-3  mt-32 md:mt-22">
                <h3 className="transition-all duration-300 group-hover:-translate-y-2 bg-gradient-to-r mr-1 from-indigo-300 via-sky-100 to-white bg-clip-text text-transparent -tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance md:text-3xl/[1.875rem]">
                  I prioritize client collaboration, fostering open
                  communication
                </h3>
              </div>
            </div>
          </div>
        </div>
      </li>
      {/* card-2 */}
      <li
        className={`min-h-[7rem] list-none md:[grid-area:1/7/2/13] xl:[grid-area:4/1/-1/5]`}
      >
        <div className="relative h-full rounded-2xl border-neutral-700 border-2 p-2 md:rounded-3xl md:p-2">
          <GlowingEffect
            borderWidth={3}
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <div className="bento-card group border-0.75 relative backdrop-blur-sm bg-[rgba(51,50,50,0.12)] flex h-full flex-row justify-between overflow-hidden rounded-xl p-6 md:p-4 gap-2 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
            <div className="relative flex flex-1 flex-col justify-between gap-3">
              <div className="flex w-full justify-center items-center h-full ">
                <CopyEmailButton />
              </div>
            </div>
          </div>
        </div>
      </li>

      {/* card-3 */}
      <li
        className={`min-h-[24rem] md:min-h-[14rem] list-none md:[grid-area:2/1/3/7] xl:[grid-area:1/5/-1/8]`}
      >
        <div className="relative h-full rounded-2xl border-neutral-700 border-2 p-2 md:rounded-3xl md:p-2">
          <>
            <GlowingEffect
              borderWidth={3}
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className="bento-card group border-0.75 relative backdrop-blur-sm bg-[rgba(87,83,83,0.12)] flex h-full flex-col  gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
              <div className="relative flex flex-1 flex-col justify-between gap-3">
                <div className="w-fit rounded-lg border border-gray-600 p-2">
                  <Wrench className="h-4 w-4 text-neutral-400" />
                </div>
                <div className="mt-12 h-8">
                  <InfiniteMovingCardsDemo />
                </div>

                <div className="space-y-2 w-full">
                  <h3 className="transition-all duration-300 group-hover:-translate-y-2 bg-gradient-to-r mr-1 from-indigo-300 via-indigo-300 to-white bg-clip-text text-transparent -tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance md:text-2xl/[1.875rem]">
                    Passionate about latest Cutting-Edge Technologies
                  </h3>
                </div>
              </div>
              <BackgroundBeams />
            </div>
          </>
        </div>
      </li>
      {/* card-4 */}
      <li
        className={`min-h-[14rem] list-none md:[grid-area:2/7/3/13] xl:[grid-area:1/8/3/13]`}
      >
        <div className="relative h-full rounded-2xl border-neutral-700 border-2 p-2 md:rounded-3xl md:p-2">
          <GlowingEffect
            borderWidth={3}
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <div className="bento-card group border-0.75 relative backdrop-blur-sm bg-[rgba(87,83,83,0.12)] flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-2 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
            <div className="relative flex flex-1 flex-col justify-between gap-3">
              <Globe />
            </div>
          </div>
        </div>
      </li>

      {/* card-5 */}
      <li
        className={`min-h-[14rem] list-none md:[grid-area:3/1/4/13] xl:[grid-area:3/8/-1/13]`}
      >
        <div className="relative h-full rounded-2xl border-neutral-700 border-2 p-2 md:rounded-3xl md:p-2">
          <GlowingEffect
            borderWidth={3}
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <div className=" bento-card group border-0.75 relative backdrop-blur-sm bg-[rgba(87,83,83,0.12)] flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
            <div className="relative flex flex-1 flex-col gap-3">
              <div className="space-y-3">
                <h3 className="transition-all duration-300 group-hover:-translate-y-2 bg-gradient-to-r mr-1 from-indigo-300 via-sky-100 to-white bg-clip-text text-transparent -tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance md:text-2xl/[1.875rem]">
                  Currently building a saas
                </h3>
                <AnimatedListDemo />
              </div>
            </div>
            <BackgroundBeams />
          </div>
        </div>
      </li>
    </ul>
  );
}
