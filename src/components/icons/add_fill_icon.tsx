import { cn } from "@/lib/utils";
import React from "react";

const AddFillIcon = React.forwardRef<
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
      viewBox={`0 0 ${width ? width : "24"} ${height ? height : "24"}`}
      xmlns="http://www.w3.org/2000/svg"
      ref={forwardRef}
      aria-label={props["aria-label"]}
      className={cn("", className)}
    >
      <path
        d="M11 13H5V11H11V5H13V11H19V13H13V19H11V13Z"
        fill={pathColor ? pathColor : "#030116"}
      />
    </svg>
  );
});

AddFillIcon.displayName = "AddFillIcon";

export default AddFillIcon;
