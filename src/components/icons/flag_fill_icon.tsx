import { cn } from "@/lib/utils";
import React from "react";

const FlagFillIcon = React.forwardRef<
  React.ElementRef<"svg">,
  React.HTMLAttributes<"svg"> & {
    width?: string | null;
    height?: string | null;
    pathFill?: string | null;
  }
>(({ className, width, height, pathFill, ...props }, forwardRef) => {
  return (
    <svg
      width={width ? width : "24"}
      height={height ? height : "24"}
      viewBox={`0 0 ${width ? width : 24} ${height ? height : 24}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={forwardRef}
      aria-label={props["aria-label"]}
      className={cn("", className)}
    >
      <path
        d="M5.5 20.75V4.5H13.5961L13.9961 6.5H19.5V15.5H13.4039L13.0039 13.5H6.99997V20.75H5.5ZM14.65 14H18V7.99998H12.75L12.35 5.99998H6.99997V12H14.25L14.65 14Z"
        fill={pathFill || "black"}
      />
    </svg>
  );
});

FlagFillIcon.displayName = "FlagFillIcon";

export default FlagFillIcon;
