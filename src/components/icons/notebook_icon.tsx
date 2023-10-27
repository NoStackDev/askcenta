import { cn } from "@/lib/utils";
import React from "react";

const Notebook_icon = React.forwardRef<
  React.ElementRef<"svg">,
  React.HTMLAttributes<"svg"> & {
    width?: string | null;
    height?: string | null;
    pathFill?: string | null;
  }
>(({ className, width, height, pathFill, ...props }, forwardRef) => {
  return (
    <svg
      width={width || "120"}
      height={height || "120"}
      viewBox={`0 0 ${width || 120} ${height || 120}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={forwardRef}
      aria-label={props["aria-label"]}
      className={cn("", className)}
    >
      <g clip-path="url(#clip0_457_120)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M60 120C93.1371 120 120 93.1371 120 60C120 26.8629 93.1371 0 60 0C45.133 0 39.4818 17.8318 29 26.7868C16.1188 37.7917 0 41.7299 0 60C0 93.1371 26.8629 120 60 120Z"
          fill="#EEF0F6"
        />
        <g filter="url(#filter0_f_457_120)">
          <path
            d="M96 39H44C42.3431 39 41 40.1485 41 41.5652V95.4348C41 96.8515 42.3431 98 44 98H96C97.6569 98 99 96.8515 99 95.4348V41.5652C99 40.1485 97.6569 39 96 39Z"
            fill="white"
          />
          <path
            d="M96 39H44C42.3431 39 41 40.1485 41 41.5652V95.4348C41 96.8515 42.3431 98 44 98H96C97.6569 98 99 96.8515 99 95.4348V41.5652C99 40.1485 97.6569 39 96 39Z"
            fill="#E1E5EF"
          />
        </g>
        <path
          d="M36 41C36 36.5817 39.5817 33 44 33H82C86.4183 33 90 36.5817 90 41V84C90 88.4183 86.4183 92 82 92H44C39.5817 92 36 88.4183 36 84V41Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M47 35C47 31.134 50.134 28 54 28H72C75.866 28 79 31.134 79 35V40C79 41.6569 77.6569 43 76 43C74.3431 43 73 41.6569 73 40V35C73 34.4477 72.5523 34 72 34H54C53.4477 34 53 34.4477 53 35V40C53 41.6569 51.6569 43 50 43C48.3431 43 47 41.6569 47 40V35Z"
          fill="#676C93"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_457_120"
          x="24.5"
          y="22.5"
          width="91"
          height="92"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="8.25"
            result="effect1_foregroundBlur_457_120"
          />
        </filter>
        <clipPath id="clip0_457_120">
          <rect width="120" height="120" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
});

Notebook_icon.displayName = "Notebook_icon";

export default Notebook_icon;
