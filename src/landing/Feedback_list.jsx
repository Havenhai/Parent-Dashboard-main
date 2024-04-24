import React from "react";
import { FeedbackData } from "../landing_data";

function FeedbackList() {
  return (
    <div className="p-8 md:p-16 lg:p-32">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#590E87] pb-3">
        What People Are Saying
      </h2>
      <p className="text-lg md:text-2xl font-normal text-black w-full pb-12">
        We value your feedback and strive to provide the best experience for
        your child. Here are some testimonials from our users:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mx-auto">
        {" "}
        {/* Use grid layout */}
        {FeedbackData.map((feedback, index) => (
          <div key={index} className="rounded-lg bg-yellow-100 mb-8 mx-2 p-4">
            <div className="flex items-start">
              <div className="w-20 h-14 p-6 mr-2 flex rounded-[100%] bg-[#590E87]"></div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-[#590E87]">
                  {feedback.heading}
                </h3>
                <p className="text-base md:text-lg tracking-[-0.80px]">
                  {feedback.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default FeedbackList;
