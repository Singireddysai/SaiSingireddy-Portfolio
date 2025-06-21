import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="py-8 px-4 flex justify-center items-center">
      <div className="navbar text-[13px] md:text-[15px] font-[400] rounded-full px-1 py-1 flex flex-row gap-1 md:gap-3">
        <div className="nav-opt home">
          <a href="#hero">Home</a>
        </div>
        <div className="nav-opt work">
          <a href="#work">Work</a>
        </div>
        <div className="nav-opt about">
          <a href="#about">About</a>
        </div>
        <div className="nav-opt more ">
          <a href="#skills">More</a>
        </div>
        <div className="nav-opt contact">
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
