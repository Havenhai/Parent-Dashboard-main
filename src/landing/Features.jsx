import { featuresData } from "../landing_data";

function Features() {
  return (
    <>
      <div className="p-8 md:p-16 lg:p-32">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#590E87] pb-3">
          Features
        </h2>

        <p className="text-lg md:text-lg font-normal text-black w-full md:w-[70%] lg:w-[60%] pb-12">
          Discover the amazing features that make our educational app the
          perfect tool for your child's learning journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuresData.map((data, index) => (
            <div key={index} className="rounded-lg bg-yellow-100 mb-8 mx-2 p-4">
              <div className="flex items-start">
                <div className="mr-4">{/* Add images here if needed */}</div>
                <div>
                  <h3 className="text-base md:text-lg lg:text-xl text-gray-600 font-semibold tracking-wide">
                    {data.title}
                  </h3>
                  <p className="text-sm md:text-base lg:text-lg text-gray-700">
                    {data.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Features;
