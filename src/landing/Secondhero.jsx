import React from "react";

const SecondHero = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center h-[400px] bg-[#FDFDC5] p-8 md:p-32 gap-4 md:gap-48 custom-hero">
        {/* Content */}
        <div className="flex flex-col justify-center h-full w-full md:w-1/2">
          <h1 className="font-black text-[#590E87] text-5xl mb-8">
            Connect with Us
          </h1>

          {/* Contact details */}
          <div className="flex flex-col md:flex-row md:gap-4">
            <div className="mb-4 md:mb-0">
              <h3 className="text-gray-600 font-bold">Email</h3>
              <p className="text-black font-semibold">
                info@educationalapp.com
              </p>
            </div>

            <div className="mb-4 md:mb-0">
              <h3 className="text-gray-600 font-bold">Phone</h3>
              <p className="text-black font-semibold">+1 123-456-7890</p>
            </div>

            <div className="mb-4 md:mb-0">
              <h3 className="text-gray-600 font-bold">Social Media</h3>
              <p className="text-black font-semibold">@eduapp</p>
            </div>
          </div>

          {/* Submit button */}
          {/* <div className="flex justify-start mt-8">
          <button className="flex items-center justify-center w-48 h-12 bg-[#590E87] text-white rounded">
            SUBMIT
          </button>
        </div> */}
        </div>

        {/* Empty right side */}
        <div className="hidden md:block md:w-1/2"></div>
      </div>
    </>
  );
};

export default SecondHero;
