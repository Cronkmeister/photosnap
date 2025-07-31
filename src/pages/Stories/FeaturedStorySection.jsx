import { Heading, Text } from "../../components";
import React from "react";

export default function FeaturedStorySection() {
  return (
    <>
      {/* featured story section */}
      <div className="relative group">
        {/* Mobile: Stacked layout with image on top, text below */}
        <div className="md:hidden">
          {/* Hero image for mobile */}
          <div
            className="h-[375px] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('/assets/stories/desktop/moon-of-appalacia.jpg')",
            }}
          >
            {/* Circular gradient overlay on hover for mobile */}
            <div className="relative w-full h-full group">
              <div className="absolute bottom-0 left-0 w-0 h-0 group-hover:w-96 group-hover:h-96 bg-gradient-to-tr from-[#FFC593] via-[#BC7198] to-[#5A77FF] opacity-0 group-hover:opacity-50 rounded-tr-full transition-all duration-1000 ease-out blur-2xl pointer-events-none"></div>
            </div>
          </div>

          {/* Text content below image for mobile */}
          <div className="bg-black px-6 py-12">
            <div className="flex flex-col items-start gap-5">
              <Heading
                as="h1"
                className="text-[12px] font-bold tracking-[2.00px] !text-white"
              >
                LAST MONTH'S FEATURED STORY
              </Heading>
              <Heading
                size="headinglg"
                as="h2"
                className="w-full text-[32px] font-bold uppercase leading-[40px] tracking-[4.17px] !text-white"
              >
                HAZY FULL MOON OF APPALACHIA
              </Heading>
              <div className="flex flex-col gap-6 self-stretch">
                <div className="flex flex-wrap gap-[9px]">
                  <Text
                    size="textxs"
                    as="p"
                    className="text-[13px] font-normal !text-white-a700_bf"
                  >
                    March 2nd 2020
                  </Text>
                  <Text
                    size="textxs"
                    as="p"
                    className="text-[13px] font-normal !text-white"
                  >
                    by John Appleseed
                  </Text>
                </div>
                <Text
                  as="p"
                  className="w-full text-[15px] font-normal leading-[25px] !text-white-a700_99"
                >
                  The dissected plateau area, while not actually made up of
                  geological mountains, is popularly called
                  &quot;mountains,&quot; especially in eastern Kentucky and West
                  Virginia, and while the ridges are not high, the terrain is
                  extremely rugged.
                </Text>
              </div>
              <div className="flex items-center gap-4 self-stretch group cursor-pointer">
                <Heading
                  as="h3"
                  className="text-[12px] font-bold tracking-[2.00px] !text-white group-hover:underline transition-all"
                >
                  READ THE STORY
                </Heading>
                <svg
                  width="43"
                  height="14"
                  viewBox="0 0 43 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <path
                    d="M0 7H41M41 7L35.5 1.5M41 7L35.5 12.5"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: Original overlay layout */}
        <div
          className="hidden md:flex h-[650px] items-center justify-start bg-black bg-cover bg-center bg-no-repeat py-[122px] md:px-8 md:py-16"
          style={{
            backgroundImage:
              "url('/assets/stories/desktop/moon-of-appalacia.jpg')",
          }}
        >
          <div
            className="flex w-[50%] max-w-2xl flex-col items-start gap-5 md:w-[406px] "
            style={{ marginLeft: "112px" }}
          >
            <Heading
              as="h1"
              className="text-[12px] font-bold tracking-[2.00px] !text-white"
            >
              LAST MONTH'S FEATURED STORY
            </Heading>
            <Heading
              size="headinglg"
              as="h2"
              className="w-full text-[40px] font-bold uppercase leading-[48px] tracking-[4.17px] !text-white md:text-[38px]"
            >
              HAZY FULL MOON OF APPALACHIA
            </Heading>
            <div className="flex flex-col gap-6 self-stretch">
              <div className="flex flex-wrap gap-[9px]">
                <Text
                  size="textxs"
                  as="p"
                  className="text-[13px] font-normal !text-white-a700_bf"
                >
                  March 2nd 2020
                </Text>
                <Text
                  size="textxs"
                  as="p"
                  className="text-[13px] font-normal !text-white"
                >
                  by John Appleseed
                </Text>
              </div>
              <Text
                as="p"
                className="w-full text-[15px] font-normal leading-[25px] !text-white-a700_99 md:w-full"
              >
                The dissected plateau area, while not actually made up of
                geological mountains, is popularly called &quot;mountains,&quot;
                especially in eastern Kentucky and West Virginia, and while the
                ridges are not high, the terrain is extremely rugged.
              </Text>
            </div>
            <div className="flex items-center gap-4 self-stretch group cursor-pointer">
              <Heading
                as="h3"
                className="text-[12px] font-bold tracking-[2.00px] !text-white group-hover:underline transition-all"
              >
                READ THE STORY
              </Heading>
              <svg
                width="43"
                height="14"
                viewBox="0 0 43 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path
                  d="M0 7H41M41 7L35.5 1.5M41 7L35.5 12.5"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Circular gradient overlay on hover for desktop */}
        <div className="hidden md:block absolute bottom-0 left-0 w-0 h-0 group-hover:w-96 group-hover:h-96 bg-gradient-to-tr from-[#FFC593] via-[#BC7198] to-[#5A77FF] opacity-0 group-hover:opacity-50 rounded-tr-full transition-all duration-1000 ease-out blur-2xl pointer-events-none"></div>
      </div>
    </>
  );
}
