import React, { CSSProperties } from "react";
interface ComponentWithStyleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  style?: CSSProperties; // Accepts any CSS properties
}
const ArrowDownUp = ({ style }: ComponentWithStyleProps) => {
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
      className="lucide lucide-arrow-down-up"
      cursor={"pointer"}
      style={{ marginLeft: "10px", ...style }}
    >
      <path d="m3 16 4 4 4-4" />
      <path d="M7 20V4" />
      <path d="m21 8-4-4-4 4" />
      <path d="M17 4v16" />
    </svg>
  );
};

export default ArrowDownUp;
