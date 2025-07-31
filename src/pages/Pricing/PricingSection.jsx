import React from "react";

export default function PricingSection() {
  return (
    <>
      {/* Pricing Hero Section */}
      <section className="w-full flex flex-col-reverse h-auto md:flex-row md:h-[490px]">
        {/* Left: Black background, gradient bar, text */}
        <div className="relative flex flex-col justify-center bg-black w-full md:w-[42%] py-12 md:py-0 px-16 min-w-0 md:min-w-[495px]">
          <div className="relative z-10">
            <h1 className="text-white text-5xl font-bold uppercase leading-tight tracking-[4px] mb-8 max-w-[420px]">
              PRICING
            </h1>
            <p className="text-white/70 text-base leading-7 max-w-[420px]">
              Create a your stories, Photosnap is a platform for photographers
              and visual storytellers. It's the simple way to create and share
              your photos.
            </p>
          </div>
          {/* Gradient bar - horizontal on mobile, vertical on desktop */}
          <div className="absolute left-30 top-0 w-[128px] h-[6px] bg-gradient-to-r from-[#FFC593] via-[#BC7198] to-[#5A77FF] md:w-[6px] md:left-0 md:h-[172px] md:top-1/2 md:transform md:-translate-y-1/2 md:bg-gradient-to-b" />
        </div>
        {/* Right: Hero image */}
        <div className="w-full h-[400px] md:w-[58%] md:h-full">
          <img
            src="/assets/pricing/desktop/hero.jpg"
            alt="Photographer with camera on tripod against sunset sky"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>
    </>
  );
}
