import React from "react";

export default function ImageTextCard({
  titleText = "The Mountains",
  authorText = "by John Appleseed",
  actionText = "READ STORY",
  imageSrc = "/assets/stories/desktop/mountains.jpg",
  imageAlt = "Story image",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} h-[500px] w-[24%] md:w-full md:h-[300px] relative group cursor-pointer transform transition-transform duration-300 hover:-translate-y-2`}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
      <div className="absolute bottom-0 left-0 p-8 text-white w-full">
        <h3 className="text-2xl font-bold mb-2">{titleText}</h3>
        <p className="text-sm mb-4">{authorText}</p>
        <div className="border-t border-gray-400 pt-4">
          <a
            href="#"
            className="flex items-center justify-between gap-2 text-xs font-bold tracking-[2px] uppercase "
          >
            {actionText}
            <svg
              width="43"
              height="14"
              viewBox="0 0 43 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 7H41M41 7L35.5 1.5M41 7L35.5 12.5"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </a>
        </div>
      </div>
      {/* Gradient bar on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFC593] via-[#BC7198] to-[#5A77FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}
