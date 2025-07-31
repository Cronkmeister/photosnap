import React, { useState } from "react";

export default function PricingSection1() {
  const [isYearly, setIsYearly] = useState(false);

  const toggleBilling = () => {
    setIsYearly(!isYearly);
  };

  return (
    <>
      {/* Pricing Plans Section */}
      <section className="w-full bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Billing Toggle */}
          <div className="flex justify-center items-center gap-6 mb-16">
            <span
              className={`text-lg font-bold ${
                !isYearly ? "text-black" : "text-gray-400"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={toggleBilling}
              className={`relative w-16 h-8 rounded-full transition-colors duration-200 ${
                isYearly ? "bg-black" : "bg-gray-300"
              }`}
            >
              <div
                className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-200 ${
                  isYearly ? "translate-x-8" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`text-lg font-bold ${
                isYearly ? "text-black" : "text-gray-400"
              }`}
            >
              Yearly
            </span>
          </div>

          {/* Pricing Cards */}
          <div className="flex flex-col gap-8 max-w-md mx-auto md:max-w-none lg:flex-row md:gap-4 lg:gap-8">
            {/* Basic Plan */}
            <div className="bg-gray-50 p-8 text-center h-[407px] flex flex-col justify-center md:relative md:text-left lg:h-[407px]">
              <div className="md:flex md:justify-between md:items-start lg:flex-col lg:justify-start">
                <div className="md:max-w-[270px] lg:max-w-none lg:text-center">
                  <h3 className="text-2xl font-bold text-black mb-8 md:mb-4">
                    Basic
                  </h3>
                  <p className="text-gray-600 text-sm leading-6 mb-12 md:mb-8">
                    Includes basic usage of our platform. Recommended for new
                    and aspiring photographers.
                  </p>
                  <div className="mb-8 md:hidden lg:block">
                    <div className="text-4xl font-bold text-black mb-2 tracking-[4px]">
                      ${isYearly ? "190.00" : "19.00"}
                    </div>
                    <div className="text-gray-600 text-sm">per month</div>
                  </div>
                  <button className="w-full bg-black text-white font-bold text-sm tracking-[2px] uppercase py-4 px-6 hover:bg-[#DFDFDF] hover:text-black transition-colors md:w-full">
                    PICK PLAN
                  </button>
                </div>
                <div className="hidden md:block lg:hidden md:text-right">
                  <div className="text-4xl font-bold text-black mb-2 tracking-[4px]">
                    ${isYearly ? "190.00" : "19.00"}
                  </div>
                  <div className="text-gray-600 text-sm">per month</div>
                </div>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-black p-8 text-center relative h-[407px] flex flex-col justify-center md:text-left lg:h-[470px] lg:mt-[-21px]">
              {/* Gradient bar at top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFC593] via-[#BC7198] to-[#5A77FF]" />

              <div className="md:flex md:justify-between md:items-start lg:flex-col lg:justify-start">
                <div className="md:max-w-[270px] lg:max-w-none lg:text-center">
                  <h3 className="text-2xl font-bold text-white mb-8 md:mb-4">
                    Pro
                  </h3>
                  <p className="text-gray-300 text-sm leading-6 mb-12 md:mb-8">
                    More advanced features available. Recommended for
                    photography veterans and professionals.
                  </p>
                  <div className="mb-8 md:hidden lg:block">
                    <div className="text-4xl font-bold text-white mb-2 tracking-[4px]">
                      ${isYearly ? "390.00" : "39.00"}
                    </div>
                    <div className="text-gray-300 text-sm">per month</div>
                  </div>
                  <button className="w-full bg-white text-black font-bold text-sm tracking-[2px] uppercase py-4 px-6 hover:bg-[#DFDFDF] transition-colors md:w-full">
                    PICK PLAN
                  </button>
                </div>
                <div className="hidden md:block lg:hidden md:text-right">
                  <div className="text-4xl font-bold text-white mb-2 tracking-[4px]">
                    ${isYearly ? "390.00" : "39.00"}
                  </div>
                  <div className="text-gray-300 text-sm">per month</div>
                </div>
              </div>
            </div>

            {/* Business Plan */}
            <div className="bg-gray-50 p-8 text-center h-[407px] flex flex-col justify-center md:text-left lg:h-[407px]">
              <div className="md:flex md:justify-between md:items-start lg:flex-col lg:justify-start">
                <div className="md:max-w-[270px] lg:max-w-none lg:text-center">
                  <h3 className="text-2xl font-bold text-black mb-8 md:mb-4">
                    Business
                  </h3>
                  <p className="text-gray-600 text-sm leading-6 mb-12 md:mb-8">
                    Additional features available such as more detailed metrics.
                    Recommended for business owners.
                  </p>
                  <div className="mb-8 md:hidden lg:block">
                    <div className="text-4xl font-bold text-black mb-2 tracking-[4px]">
                      ${isYearly ? "990.00" : "99.00"}
                    </div>
                    <div className="text-gray-600 text-sm">per month</div>
                  </div>
                  <button className="w-full bg-black text-white font-bold text-sm tracking-[2px] uppercase py-4 px-6 hover:bg-[#DFDFDF] hover:text-black transition-colors md:w-full">
                    PICK PLAN
                  </button>
                </div>
                <div className="hidden md:block lg:hidden md:text-right">
                  <div className="text-4xl font-bold text-black mb-2 tracking-[4px]">
                    ${isYearly ? "990.00" : "99.00"}
                  </div>
                  <div className="text-gray-600 text-sm">per month</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
