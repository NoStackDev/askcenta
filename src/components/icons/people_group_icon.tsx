import { cn } from "@/lib/utils";
import React from "react";

const PeopleGroupIcon = React.forwardRef<
  React.ElementRef<"svg">,
  React.HTMLAttributes<"svg"> & {
    width?: string | null;
    height?: string | null;
    pathColor?: string | null;
    pathColor1?: string | null;
    pathColor2?: string | null;
    pathColor3?: string | null;
  }
>(
  (
    {
      className,
      width,
      height,
      pathColor,
      pathColor1,
      pathColor2,
      pathColor3,
      ...props
    },
    forwardRef
  ) => {
    return (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_304_1057)">
          <path
            d="M25.5557 40.6433L25.4619 39.1434C32.6252 38.7078 38.6832 33.6862 40.4402 26.7284L41.8936 27.0974C39.979 34.6889 33.3707 40.1678 25.5557 40.6433Z"
            fill={pathColor ? pathColor : "#A9A4A4"}
          />
          <path
            d="M5.54676 23.5202C5.52951 23.1924 5.52051 22.8618 5.52051 22.5303C5.53251 12.3335 13.7952 4.07087 23.9912 4.05887C24.7081 4.05887 25.4242 4.10012 26.1367 4.18262L25.9642 5.67195C25.3095 5.5962 24.6503 5.5587 23.9911 5.5587C14.623 5.5692 7.03074 13.1607 7.01949 22.5295C7.01949 22.8348 7.02774 23.1384 7.04424 23.4392L5.54676 23.5202Z"
            fill={pathColor1 ? pathColor1 : "#A9A4A4"}
          />
          <path
            d="M15.5544 38.6019V36.6806C18.6801 34.9107 19.7788 30.9422 18.0089 27.8172C16.2391 24.6922 12.2705 23.5928 9.14552 25.3627C6.02051 27.1325 4.92119 31.1003 6.69102 34.2261C7.27143 35.2512 8.12035 36.1002 9.14552 36.6806V38.6004C3.0846 38.8854 0.00244141 42.98 0.00244141 45.7382V48H24.6968V45.7382C24.6968 42.98 21.6146 38.8854 15.5544 38.6019Z"
            fill={pathColor2 ? pathColor2 : "#4C4B60"}
          />
          <path
            d="M38.8554 14.0828V12.163C41.9811 10.3931 43.0798 6.42457 41.3099 3.29956C39.5401 0.174649 35.5715 -0.92477 32.4465 0.845063C29.3215 2.6149 28.2222 6.58347 29.992 9.70848C30.5724 10.7336 31.4214 11.5826 32.4465 12.163V14.0828C26.3856 14.3663 23.3042 18.4639 23.3042 21.2184V23.4816H47.9978V21.2191C47.9978 18.4639 44.9156 14.3662 38.8554 14.0828Z"
            fill={pathColor3 ? pathColor3 : "#4C4B60"}
          />
        </g>
        <defs>
          <clipPath id="clip0_304_1057">
            <rect width="48" height="48" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);

PeopleGroupIcon.displayName = "PeopleGroupIcon";

export default PeopleGroupIcon;
