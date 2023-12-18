import React from "react";

function BrandIcon() {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="16"
        y="2"
        width="32"
        height="60"
        rx="16"
        fill="none"
        stroke="currentColor"
        stroke-width="4"
      ></rect>
      <rect
        x="2"
        y="48"
        width="32"
        height="60"
        rx="16"
        fill="none"
        transform="rotate(-90 2 48)"
        stroke="currentColor"
        stroke-width="4"
      ></rect>
    </svg>
  );
}

export default BrandIcon;
