import React, { CSSProperties } from "react";
interface ComponentWithStyleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  style?: CSSProperties; // Accepts any CSS properties
}
const ArrowAssending = ({ style }: ComponentWithStyleProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-arrow-down-narrow-wide"
      style={{ marginLeft: "10px", ...style }}
    >
      <path d="m3 16 4 4 4-4" />
      <path d="M7 20V4" />
      <path d="M11 4h4" />
      <path d="M11 8h7" />
      <path d="M11 12h10" />
    </svg>

    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   width="24"
    //   height="24"
    //   viewBox="0 0 24 24"
    //   fill="none"
    //   stroke="currentColor"
    //   strokeWidth="2"
    //   strokeLinecap="round"
    //   strokeLinejoin="round"
    //   className="lucide lucide-arrow-up-narrow-wide"
    //   style={{ marginLeft: "10px", ...style }}
    // >
    //   <path d="m3 8 4-4 4 4" />
    //   <path d="M7 4v16" />
    //   <path d="M11 12h4" />
    //   <path d="M11 16h7" />
    //   <path d="M11 20h10" />
    // </svg>
  );
};

export default ArrowAssending;