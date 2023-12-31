import { cn } from "@/lib/utils";
import React from "react";

const TwitterIcon = React.forwardRef<
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
          fill={circleFill ? circleFill : "white"}
        />
        <path
          d="M17.5967 9.19322C18.1482 8.77962 18.6445 8.2833 19.0305 7.70425C18.5342 7.92484 17.9551 8.09028 17.3761 8.14543C17.9827 7.78697 18.4239 7.2355 18.6445 6.54616C18.093 6.87705 17.4588 7.12521 16.8246 7.26308C16.2732 6.68403 15.5287 6.35315 14.7015 6.35315C13.1022 6.35315 11.8062 7.64911 11.8062 9.24837C11.8062 9.46896 11.8338 9.68955 11.889 9.91013C9.49006 9.77227 7.33933 8.61418 5.9055 6.87705C5.65734 7.29065 5.51947 7.78697 5.51947 8.33844C5.51947 9.33109 6.0158 10.2134 6.81543 10.7373C6.34668 10.7098 5.87793 10.5995 5.4919 10.3789V10.4065C5.4919 11.8127 6.48455 12.9708 7.80808 13.2465C7.58749 13.3017 7.31175 13.3568 7.06359 13.3568C6.87058 13.3568 6.70514 13.3293 6.51212 13.3017C6.87058 14.4598 7.94594 15.287 9.21433 15.3145C8.22168 16.0866 6.98087 16.5554 5.62977 16.5554C5.38161 16.5554 5.16102 16.5278 4.94043 16.5002C6.20881 17.3274 7.72536 17.7962 9.37977 17.7962C14.7015 17.7962 17.5967 13.412 17.5967 9.57925C17.5967 9.44138 17.5967 9.33109 17.5967 9.19322Z"
          fill={pathColor ? pathColor : "black"}
        />
      </svg>
    );
  }
);

TwitterIcon.displayName = "TwitterIcon";

export default TwitterIcon;
