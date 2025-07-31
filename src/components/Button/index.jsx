import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-none",
  rounded: "rounded",
};

const variants = {
  fill: {
    whiteA700: "bg-white text-black hover:bg-[#DFDFDF]",
    black900: "bg-black text-white hover:bg-[#DFDFDF] hover:text-black",
  },
  outline: {
    whiteA700: "border-white text-white",
    black900: "border-black text-black",
  },
  ghost: {
    whiteA700: "text-white",
    black900: "text-black",
  },
};

const sizes = {
  xs: "px-2 py-1 text-xs",
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-3 text-lg",
};

const Button = ({
  children,
  className,
  leftIcon,
  rightIcon,
  shape = "rounded",
  variant = "fill",
  size = "md",
  color = "whiteA700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center gap-2 px-4 py-2 text-center cursor-pointer whitespace-nowrap tracking-[2.00px] font-bold ${
        shapes[shape] || shapes.rounded
      } ${sizes[size] || sizes.md} ${
        variants[variant] ? variants[variant][color] : variants.fill.whiteA700
      }`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square", "rounded"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill", "outline", "ghost"]),
  color: PropTypes.oneOf(["whiteA700", "black900"]),
};

export default Button;
