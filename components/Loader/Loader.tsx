"use client";
import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-t-white border-gray-500" />
    </div>
  );
}
