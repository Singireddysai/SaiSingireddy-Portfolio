"use client";

import React from "react";
import { toast } from "sonner";
import { ConfettiButton } from "@/components/magicui/confetti";
import Image from "next/image";
import { ShinyText } from "./ShinyText";
import { copyToClipboard } from "@/lib/copyToClipboard";

export default function CopyEmailButton() {
  const email = "hello@saisingireddy.in";

  const handleCopy = async () => {
    try {
      if ("vibrate" in navigator) {
        navigator.vibrate(100);
      }
      await copyToClipboard(email);
      toast.success("Email copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy email.");
      console.error(err);
    }
  };

  return (
    <div className="bg-[rgba(155,155,155,0.1)] px-2 py-1 rounded-lg border border-neutral-500">
      <ConfettiButton asChild>
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-2 text-xl font-[300]"
        >
          <Image src="/copy.svg" alt="copy" width={22} height={22} />
          <ShinyText>{email}</ShinyText>
        </button>
      </ConfettiButton>
    </div>
  );
}
