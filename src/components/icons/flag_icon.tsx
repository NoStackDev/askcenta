import { cn } from "@/lib/utils";
import React from "react";

const FlagIcon = React.forwardRef<
  React.ElementRef<"svg">,
  React.HTMLAttributes<"svg"> & {
    width?: string | null;
    height?: string | null;
    strokeColor?: string | null;
  }
>(({ className, width, height, strokeColor, ...props }, forwardRef) => {
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
        d="M6.5 14V20.5H5.5V4.5H13.5901L13.9097 6.09806L13.9901 6.5H14.4H19.5V15.5H13.4099L13.0903 13.9019L13.0099 13.5H12.6H7H6.5V14Z"
        stroke={strokeColor ? strokeColor : "black"}
      />
    </svg>
  );
});

FlagIcon.displayName = "FlagIcon";

export default FlagIcon;
