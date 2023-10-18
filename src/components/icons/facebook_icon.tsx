import { cn } from "@/lib/utils";
import React from "react";

const FacebookIcon = React.forwardRef<
  React.ElementRef<"svg">,
  React.HTMLAttributes<HTMLOrSVGElement> & {
    width?: string | null;
    height?: string | null;
    pathColor?: string | null;
    clipPathColor?: string | null;
  }
>(
  (
    { className, width, height, pathColor, clipPathColor, ...props },
    forwardRef
  ) => {
    return (
      <svg
        width={height ? height : "24"}
        height={height ? height : "24"}
        viewBox={`0 0 ${width ? width : 24} ${height ? height : 24}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("", className)}
        {...props}
      >
        <g clipPath="url(#clip0_668_401)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 0C18.6274 0 24 5.37258 24 12C24 17.9895 19.6118 22.954 13.875 23.8542V15.4688H16.6711L17.2031 12H13.875V9.74897C13.875 9.49416 13.9085 9.24109 13.9864 9.00718C14.1623 8.47884 14.5647 8.04831 15.3186 7.9166C15.4739 7.88945 15.6442 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9165 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C4.38825 22.954 0 17.9895 0 12C0 5.37258 5.37258 0 12 0Z"
            fill={pathColor ? pathColor : "#687076"}
          />
        </g>
        <defs>
          <clipPath id="clip0_668_401">
            <rect
              width={height ? height : "24"}
              height={height ? height : "24"}
              fill={clipPathColor ? clipPathColor : "white"}
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
);

FacebookIcon.displayName = "FacebookIcon";

export default FacebookIcon;
