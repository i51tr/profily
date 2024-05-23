import React from "react";

function Circle() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31"
      height="32"
      fill="none"
      viewBox="0 0 31 32"
    >
      <rect width="31" height="32" fill="#2EC6F2" rx="15.5"></rect>
      <rect
        width="31"
        height="32"
        fill="url(#paint0_radial_1_60)"
        fillOpacity="0.7"
        rx="15.5"
      ></rect>
      <rect
        width="31"
        height="32"
        fill="url(#paint1_radial_1_60)"
        rx="15.5"
      ></rect>
      <defs>
        <radialGradient
          id="paint0_radial_1_60"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(51.93 -2.755 11.733) scale(26.5336 26.3451)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity="0.59"></stop>
          <stop offset="0.766" stopColor="#fff" stopOpacity="0"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
        </radialGradient>
        <radialGradient
          id="paint1_radial_1_60"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(-1.69865 -27.33337 29.51955 -1.8345 26.753 28)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0.23"></stop>
          <stop offset="0.862" stopOpacity="0"></stop>
        </radialGradient>
      </defs>
    </svg>
  );
}

export default Circle;