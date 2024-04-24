import { faqData } from "../landing_data";

const FAQ = () => {
  return (
    <div className="bg-white mx-4 md:mx-28 py-8 md:py-16">
      <h1 className="text-4xl font-bold mb-8 text-[#590E87] text-center">
        FAQ
      </h1>
      {faqData.map((item, index) => (
        <div key={index} className="rounded-lg overflow-hidden mb-4 md:mb-0">
          <div className="bg-yellow-100 rounded-t-lg p-4 relative">
            <h2 className="text-xl font-semibold text-[#590E87]">
              {item.question}
            </h2>
            <div className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-[#590E87] rounded-full w-8 h-8 flex items-center justify-center">
              <span className="text-white text-2xl">+</span>
            </div>
          </div>
          <div className="bg-white border-solid border-2 border-yellow-100 rounded-b-lg p-4">
            <p className="text-base">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
