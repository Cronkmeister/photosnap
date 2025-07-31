import React from "react";

export default function ResponsiveFeatureSection({
  featureImage = "/assets/features/desktop/responsive.svg",
  featureTitle = "100% Responsive",
  featureDescription = "No matter which the device you're on, our site is fully responsive and stories look beautiful on any screen.",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} text-center flex flex-col items-center justify-start w-full`}
    >
      {/* Icon */}
      <div
        className={`mb-8 flex justify-center w-full ${
          featureTitle === "No Photo Upload Limit" ? "pt-4 pb-4" : ""
        }`}
      >
        <img src={featureImage} alt={featureTitle} className="w-18 h-18" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold mb-4 w-full text-black">
        {featureTitle}
      </h3>

      {/* Description */}
      <p className="text-gray-600 leading-7 text-base w-full max-w-xs">
        {featureDescription}
      </p>
    </div>
  );
}
