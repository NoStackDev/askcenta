import { cn } from "@/lib/utils";
import React from "react";

const TuneIcon = React.forwardRef<
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
        d="M11.25 20.75V15.25H12.75V17.25H20.75V18.75H12.75V20.75H11.25ZM3.25 18.75V17.25H8.74995V18.75H3.25ZM7.25 14.75V12.75H3.25V11.25H7.25V9.25H8.74995V14.75H7.25ZM11.25 12.75V11.25H20.75V12.75H11.25ZM15.25 8.74995V3.25H16.75V5.25H20.75V6.74995H16.75V8.74995H15.25ZM3.25 6.74995V5.25H12.75V6.74995H3.25Z"
        fill={pathColor ? pathColor : "#6356E5"}
      />
    </svg>
  );
});

TuneIcon.displayName = "TuneIcon";

export default TuneIcon;
