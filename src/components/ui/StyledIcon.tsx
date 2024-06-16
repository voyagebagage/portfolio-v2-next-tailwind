import React from "react";

export const ArrowTriangle = ({ className = "" }) => (
  <svg
    viewBox="0 0 490 490"
    xmlns="http://www.w3.org/2000/svg"
    className={`fill-current ${className}`}>
    <path d="M33.299 245v245l423.402-245L33.299 0v245zm157.28 0h202.992L70.27 432.077 190.579 245z" />
  </svg>
);

export const SETriangle = ({ className = "", ...rest }) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className={`fill-current ${className}`}
    {...rest}>
    <path d="m2.095 19.882 9.248-16.5a.753.753 0 0 1 1.313 0l9.248 16.5a.75.75 0 0 1-.656 1.116H2.752a.75.75 0 0 1-.657-1.116z" />
  </svg>
);
