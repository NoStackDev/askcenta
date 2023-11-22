import { cn } from "@/lib/utils";
import React from "react";

const CancelIcon = React.forwardRef<
  React.ElementRef<"svg">,
  React.HTMLAttributes<"svg"> & {
    width?: string | null;
    height?: string | null;
    pathColor?: string | null;
  }
>(({ className, width, height, pathColor, ...props }, forwardRef) => {
  return (
    <svg
      fill="none"
      width={width || "32"}
      height={height || "32"}
      viewBox={`0 0 ${width || "32"} ${height || "32"}`}
      xmlns="http://www.w3.org/2000/svg"
      ref={forwardRef}
      aria-label={props["aria-label"]}
      className={cn("", className)}
    >
      <path
        d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M11.5 11.5L20.5 20.5"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M20.5 11.5L11.5 20.5"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
    </svg>
  );
});

CancelIcon.displayName = "CancelIcon";

export default CancelIcon;
