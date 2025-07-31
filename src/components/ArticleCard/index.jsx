import { Img, Heading, Text } from "./..";
import React from "react";

export default function ArticleCard({
  // TO DO: input correct image path
  mainImage = "images/",
  publishDate = "April 16th 2020",
  title = "The Mountains",
  author = "by John Appleseed",
  ctaText = "READ STORY",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} h-[500px] w-full md:h-auto relative group cursor-pointer transform transition-transform duration-300 hover:-translate-y-2`}
    >
      <Img
        src={mainImage}
        alt="Bitmap"
        className="h-[500px] w-full flex-1 object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 mx-auto flex flex-1 flex-col gap-4 bg-gradient p-10 sm:p-5 transition-colors">
        <div className="mt-[150px] flex flex-col items-start gap-1">
          <Text
            size="textxs"
            as="p"
            className="text-[13px] font-normal !text-white"
          >
            {publishDate}
          </Text>
          <Heading
            size="headings"
            as="h6"
            className="text-[18px] font-bold !text-white"
          >
            {title}
          </Heading>
          <Text
            size="textxs"
            as="p"
            className="text-[13px] font-normal !text-white"
          >
            {author}
          </Text>
        </div>
        <div className="flex flex-col gap-5">
          <div className="h-px bg-white-a700_3f" />
          <div className="flex items-center justify-between gap-5">
            <Heading
              as="p"
              className="text-[12px] font-bold tracking-[2.00px] !text-white cursor-pointer hover:opacity-80 transition-opacity "
            >
              {ctaText}
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
      {/* Gradient bar on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFC593] via-[#BC7198] to-[#5A77FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}
