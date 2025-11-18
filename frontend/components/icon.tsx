import React from "react";

export const ArrowLeftIcon = ({ size = 16, color = "#18181B", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    {...props}
  >
    <path
      d="M10 12L6 8L10 4"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
