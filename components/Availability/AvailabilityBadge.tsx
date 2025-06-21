import React from "react";

const AvailabilityBadge = () => {
  return (
    <div className="mt-4 flex items-center justify-center rounded-md border p-2.5 text-center border-green-400/30 bg-green-900/60">
      <div className="relative mr-2 flex h-3 w-3 items-center justify-center">
        <div className="h-2 w-2 rounded-full bg-green-800" />
        <div className="absolute h-3 w-3 animate-ping rounded-full bg-green-800" />
      </div>
      <p className="text-sm text-green-300">
        Currently available for new opportunities
      </p>
    </div>
  );
};

export default AvailabilityBadge;
