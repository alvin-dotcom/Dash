import React from "react";

const Navbar = () => {
  return (
    <div className="bg-blue-700 text-white flex items-center p-2 shadow-lg mx-4 sm:mx-6 md:mx-2 lg:mx-2 xl:mx-2 2xl:mx-3 my-4 rounded-xl">
      <div className="flex items-center w-full px-4">
        <img src="/srmlogo.png" alt="SRM Logo" className="mr-2 h-16 w-20" />
        <div className="flex flex-col text-left max-w-full">
          <span className="text-lg sm:text-xl md:text-2xl">
            Welcome to SRM Group of Institutions Ramapuram Dashboard
          </span>
          <span className="text-xs sm:text-sm">LEARN LEAP AND LEAD</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
