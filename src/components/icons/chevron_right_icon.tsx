import { cn } from "@/lib/utils";
import React from "react";

const ChevronRightIcon = React.forwardRef<
  React.ElementRef<"svg">,
  React.HTMLAttributes<"svg"> & {
    width?: string | null;
    height?: string | null;
    pathFill?: string | null;
  }
>(({ className, width, height, pathFill, ...props }, forwardRef) => {
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
      <g opacity="0.4">
        <path
          d="M12.6 12L8 7.4L9.4 6L15.4 12L9.4 18L8 16.6L12.6 12Z"
          fill={pathFill ? pathFill : "black"}
        />
      </g>
    </svg>
  );
});

ChevronRightIcon.displayName = "ChevronRightIcon";

export default ChevronRightIcon;
