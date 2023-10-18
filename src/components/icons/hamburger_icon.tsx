import { cn } from "@/lib/utils";
import React from "react";

const HamburgerIcon = React.forwardRef<
  React.ElementRef<"svg">,
  React.HTMLAttributes<"svg"> & {
    width?: string | null;
    height?: string | null;
    strokeColor?: string | null;
    isopen: boolean;
  }
>(({ className, width, height, strokeColor, isopen, ...props }, forwardRef) => {
  return (
    <svg
      fill="none"
      width={width ? width : "60"}
      height={height ? height : "40"}
      viewBox={`0 0 ${width ? width : "60"} ${height ? height : "40"}`}
      xmlns="http://www.w3.org/2000/svg"
      ref={forwardRef}
      aria-label={props["aria-label"]}
      className={cn("relative px-2", className)}
    >
      <g
        stroke={strokeColor ? strokeColor : "#000318"}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-full w-full"
      >
        <path
          className={cn("data-[open=true]:animate-hamburger-down-rotate")}
          data-open={isopen}
          d="M10,10 L50,10 Z"
        ></path>
        <path
          className={cn("my-1 data-[open=true]:animate-hamburger-stroke-hide")}
          data-open={isopen}
          d="M10,20 L50,20 Z"
        ></path>
        <path
          className={cn("data-[open=true]:animate-hamburger-up-rotate")}
          data-open={isopen}
          d="M10,30 L50,30 Z"
        ></path>
      </g>
    </svg>
  );
});

HamburgerIcon.displayName = "HamburgerIcon";

export default HamburgerIcon;
