import { cn } from "@/lib/utils";
import React from "react";

const WarningFillIcon = React.forwardRef<
  React.ElementRef<"svg">,
  React.HTMLAttributes<"svg"> & {
    width?: string | null;
    height?: string | null;
    pathFillColor?: string | null;
  }
>(({ className, width, height, pathFillColor, ...props }, forwardRef) => {
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
        d="M1.86719 20.4999L12.0017 3L22.1363 20.4999H1.86719ZM4.45174 18.9999H19.5517L12.0017 5.99993L4.45174 18.9999ZM12.0017 17.8076C12.2306 17.8076 12.4224 17.7302 12.5772 17.5754C12.732 17.4206 12.8094 17.2288 12.8094 16.9999C12.8094 16.7711 12.732 16.5793 12.5772 16.4245C12.4224 16.2697 12.2306 16.1923 12.0017 16.1923C11.7729 16.1923 11.5811 16.2697 11.4263 16.4245C11.2715 16.5793 11.1941 16.7711 11.1941 16.9999C11.1941 17.2288 11.2715 17.4206 11.4263 17.5754C11.5811 17.7302 11.7729 17.8076 12.0017 17.8076ZM11.2518 15.1923H12.7517V10.1923H11.2518V15.1923Z"
        fill={pathFillColor || "black"}
      />
    </svg>
  );
});

WarningFillIcon.displayName = "WarningFillIcon";

export default WarningFillIcon;
