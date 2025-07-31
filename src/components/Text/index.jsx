import React from "react";

const sizes = {
  textxs: "text-[13px] font-normal",
  texts: "text-[15px] font-normal",
};

const Text = ({
  children,
  className = "",
  as,
  size = "texts",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-black-900_99 font-dmsans ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
