import { cn } from "@/lib/utils";
import React from "react";

const KeyboardBackspaceIcon = React.forwardRef<
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
      width={width ? width : "24"}
      height={height ? height : "24"}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      ref={forwardRef}
      aria-label={props["aria-label"]}
      className={cn("", className)}
    >
      <path
        d="M9 18L3 12L9 6L10.4 7.4L6.8 11H21V13H6.8L10.4 16.6L9 18Z"
        fill={pathColor ? pathColor : "black"}
      />
    </svg>
  );
});

KeyboardBackspaceIcon.displayName = "KeyboardBackspaceIcon";

export default KeyboardBackspaceIcon;
