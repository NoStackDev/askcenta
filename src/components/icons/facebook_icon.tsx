import { cn } from "@/lib/utils";
import React from "react";

const FacebookIcon = React.forwardRef<
  React.ElementRef<"svg">,
  React.HTMLAttributes<"svg"> & {
    width?: string | null;
    height?: string | null;
    pathColor?: string | null;
    circleFill?: string | null;
  }
>(
  (
    { className, width, height, pathColor, circleFill, ...props },
    forwardRef
  ) => {
    return (
      <svg
        width={width ? width : "24"}
        height={height ? height : "24"}
        fill=""
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <circle
          cx="12"
          cy="12"
          r="12"
          fill={circleFill ? circleFill : "black"}
        />
        <path
          d="M24 12.073C24 5.40365 18.629 0 12 0C5.37097 0 0 5.40365 0 12.073C0 18.1095 4.35484 23.1237 10.1129 24V15.5781H7.06452V12.073H10.1129V9.44422C10.1129 6.42596 11.9032 4.72211 14.6129 4.72211C15.9677 4.72211 17.3226 4.96552 17.3226 4.96552V7.93509H15.8226C14.3226 7.93509 13.8387 8.86004 13.8387 9.83367V12.073H17.1774L16.6452 15.5781H13.8387V24C19.5968 23.1237 24 18.1095 24 12.073Z"
          fill={pathColor ? pathColor : "white"}
        />
      </svg>
    );
  }
);

FacebookIcon.displayName = "FacebookIcon";

export default FacebookIcon;
