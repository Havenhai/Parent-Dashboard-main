import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center h-screen bg-yellow-100">
      {/* Content */}
      <div className="w-full px-4 py-12 md:w-1/2 md:py-24">
        <h1 className="text-4xl font-black text-[#590E87] pb-3 md:text-7xl">
          WELCOME TO
          <br />
          CHATTERCHUMS!
        </h1>
        <button className="bg-[#590E87] text-white px-6 py-2 rounded mt-6 md:mt-10 md:mb-0 text-lg">
          Start Exploring
        </button>
      </div>

      {/* Photo */}
      <div className="w-full px-4 py-12">
        <img
          src="/amico (2).svg"
          alt="Illustration Active Part"
          className="mx-auto md:w-1/2" // Added responsive width for photo on medium screens
        />
      </div>
    </div>
  );
};

export default Hero;
