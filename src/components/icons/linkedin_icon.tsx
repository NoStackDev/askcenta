import { cn } from "@/lib/utils";
import React from "react";

const LinkedinIcon = React.forwardRef<
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
        <g clipPath="url(#clip0_668_400)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM5.23125 19H8.13375V9.65292H5.23125V19ZM5 6.68097C5 7.60912 5.75281 8.37789 6.68094 8.37789C7.60875 8.37789 8.36188 7.60912 8.36188 6.68097C8.36188 6.23515 8.18478 5.80759 7.86954 5.49235C7.5543 5.1771 7.12675 5 6.68094 5C6.23513 5 5.80757 5.1771 5.49234 5.49235C5.1771 5.80759 5 6.23515 5 6.68097ZM16.1006 19H19V13.8655C19 11.353 18.46 9.41854 15.5225 9.41854C14.1103 9.41854 13.1637 10.1936 12.7762 10.9279H12.7356V9.65292H9.95188V19H12.8512V14.3718C12.8512 13.153 13.0825 11.9748 14.5916 11.9748C16.0788 11.9748 16.1006 13.3655 16.1006 14.4499V19Z"
            fill={pathColor ? pathColor : "#687076"}
          />
        </g>
        <defs>
          <clipPath id="clip0_668_400">
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

LinkedinIcon.displayName = "LinkedinIcon";

export default LinkedinIcon;
