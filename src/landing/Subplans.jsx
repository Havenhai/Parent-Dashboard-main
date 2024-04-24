// Subplans.jsx
import React from "react";
import { subscriptionPlans } from "../landing_data";

const Subplans = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 ">
        <div className="bg-[#FDFDC5] text-[#590E87] w-full px-4 py-8 text-center rounded-lg">
          <h1 className="font-black text-5xl">Subscription Plans</h1>
          <p className="mt-4 text-lg text-black">
            Presents different subscription plans for accessing premium content,
            providing options for users to choose the plan that suits their
            needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8 w-full rounded-full">
          {subscriptionPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-[#FDFDC5] p-4 text-center w-full md:w-auto rounded-lg"
            >
              <h2 className="font-black text-3xl text-[#590E87]">
                {plan.title}
              </h2>
              <p className="mt-2">{plan.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Subplans;
