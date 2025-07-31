import React from "react";

const sizes = {
  headingxs: "text-[12px] font-bold",
  headings: "text-[18px] font-bold",
  headingmd: "text-[24px] font-bold md:text-[22px]",
  headinglg: "text-[40px] font-bold md:text-[38px] sm:text-[36px]",
};

const Heading = ({
  children,
  className = "",
  size = "headingxs",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component
      className={`text-black font-dmsans ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Heading };
