import React from "react";
import GetInTouchButton from "../Drawer-Contact/GetInTouchButton";

const GetInTouch = () => {
  return (
    <>
      <div className="rounded-lg bg-[rgba(155,155,155,0.1)] backdrop-blur-sm h-56 w-94 mb-4">
        <div className="rounded-t-lg bg-neutral-800 flex h-8 px-3 py-0.5 gap-1 items-center">
          {["bg-red-600", "bg-orange-600", "bg-yellow-600", "bg-green-600"].map(
            (color, i) => {
              return (
                <span
                  key={i}
                  className={`h-2 w-2 rounded-full ${color}`}
                ></span>
              );
            }
          )}
        </div>
        <div className="flex flex-col gap-4 justify-center items-center h-full w-full rounded-b-lg">
          <span className="-mt-12 text-3xl font-[300]">Let's Talk</span>
          <GetInTouchButton />
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
