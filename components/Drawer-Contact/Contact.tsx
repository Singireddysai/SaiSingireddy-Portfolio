"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import AvailabilityBadge from "../Availability/AvailabilityBadge";
import "./Contact.css";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";

const Contact = ({ str }: { str: string }) => {
  const [tab, setTab] = useState<"mail" | "form">("mail");

  return (
    <div>
      <Drawer>
        <DrawerTitle></DrawerTitle>
        <DrawerTrigger className="group connect flex items-center gap-1 p-2 rounded-full">
          <span className=" md:text-auto ml-2 px-1 md:px-2 py-1">{str}</span>
          <div className="relative z-10 flex items-center justify-center overflow-hidden rounded-full p-2 md:p-2.5 transition-colors duration-300 bg-white group">
            {/* First Arrow: slides out on hover (dark only) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide-arrow-right text-black transition-all duration-300 group-hover:translate-x-5 group-hover:opacity-0"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>

            {/* Second Arrow: slides in on hover (dark only) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide-arrow-right absolute text-black transition-all duration-300 -translate-x-5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </DrawerTrigger>

        <DrawerContent className="border contact-drawer border-neutral-700 bg-black text-white rounded-t-xl mx-auto max-w-2xl">
          <div className="h-2 w-12 bg-zinc-800 rounded-full mx-auto -mt-4  mb-6 border border-zinc-700" />
          <div className="flex justify-center items center gap-3 mb-4">
            <Link href={"https://www.linkedin.com/in/sai-singireddy-8352a6291"}>
              <Image
                src={"/linkedin.svg"}
                alt="linkedin"
                height={18}
                width={18}
              />
            </Link>
            <Link href={"https://github.com/Singireddysai"}>
              <Image src={"/github.svg"} alt="github" height={18} width={18} />
            </Link>
            <Link href={"https://x.com/Ak4zA__"}>
              <Image
                src={"/twitter.svg"}
                alt="twitter"
                height={18}
                width={18}
              />
            </Link>
          </div>

          <div className="flex justify-center grey border-1 border-neutral-800 rounded-[10px] mx-auto md:mx-auto mb-4 p-[2px]">
            <Button
              className={`px-13 mdpx-16 py-1 rounded-[10px] transition-colors ${
                tab === "mail"
                  ? "light-grey text-white border-1 border-neutral-600"
                  : "bg-transparent "
              }`}
              onClick={() => setTab("mail")}
            >
              Email Me
            </Button>
            <Button
              className={`px-16 py-1 rounded-[10px] transition-colors ${
                tab === "form"
                  ? "light-grey text-white border-1 border-neutral-600"
                  : "bg-transparent "
              }`}
              onClick={() => setTab("form")}
            >
              Fill A Form
            </Button>
          </div>

          {tab === "mail" ? (
            <div className="flex flex-col gap-2">
              <div className="flex justify-center items-center py-2">
                <a
                  href="mailto:hello@saisingireddy.in"
                  className="email-me flex flex-col no-underline hover:opacity-90 transition"
                >
                  <div className="email-title flex justify-center px-12 py-4 items-center gap-3">
                    <Image src="/mail.svg" alt="mail" height={36} width={36} />
                    <h3 className="text-lg font-semibold">Quick Connect</h3>
                  </div>
                  <div className="flex flex-col gap-2 justify-center items-center px-4 py-4">
                    <span className="text-sm font-bold text-white">
                      hello@saisingireddy.in
                    </span>
                    <span className="text-sm font-[600] text-neutral-400">
                      Email Me Directly
                    </span>
                  </div>
                </a>
              </div>
              <div className="px-2">
                <AvailabilityBadge />
              </div>
            </div>
          ) : (
            <div className="px-6 rounded-2xl shadow-lg">
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="space-y-6"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="YOUR_WEB3_FORMS_KEY_HERE"
                />

                <div className="flex flex-col items-center md:flex-row gap-6">
                  <div className="flex flex-col w-full md:w-1/2 space-y-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-2 bg-neutral-800 text-white placeholder-neutral-400 border border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400 transition"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="your-mail@gmail.com"
                      required
                      className="w-full px-4 py-2 bg-neutral-800 text-white placeholder-neutral-400 border border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400 transition"
                    />
                  </div>

                  <div className="w-full md:w-1/2">
                    <textarea
                      name="message"
                      placeholder="Say something..."
                      required
                      rows={4}
                      className="w-full h-full px-4 py-2 bg-neutral-800 text-white placeholder-neutral-400 border border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400 transition resize-none"
                    />
                  </div>
                </div>

                <DrawerFooter className="flex justify-center items-center pt-4 ">
                  <div className="flex gap-4 ">
                    <Button
                      type="submit"
                      className="bg-neutral-500 w-36 text-white hover:bg-neutral-600 transition-all duration-150 group flex items-center gap-2"
                    >
                      Send
                      <Image
                        className="transition-all mt-1 rotate-[45deg] duration-200 group-hover:rotate-[15deg]"
                        src={"/send.svg"}
                        alt="send"
                        height={24}
                        width={24}
                      />
                    </Button>

                    <DrawerClose className="border-1 border-neutral-400 w-35 text-neutral-300 hover:bg-neutral-600 transition rounded-lg">
                      Cancel
                    </DrawerClose>
                  </div>
                </DrawerFooter>
              </form>
            </div>
          )}
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Contact;
