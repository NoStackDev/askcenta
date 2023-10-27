import { cn } from "@/lib/utils";
import React from "react";

const SketchIllustration = React.forwardRef<
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
      <g clipPath="url(#clip0_457_428)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M60 120C93.1371 120 120 93.1371 120 60C120 26.8629 93.1371 0 60 0C45.133 0 39.4818 17.8318 29 26.7868C16.1188 37.7917 0 41.7299 0 60C0 93.1371 26.8629 120 60 120Z"
          fill="#EEF0F6"
        />
        <g filter="url(#filter0_f_457_428)">
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
          d="M35 40C35 35.5817 38.5817 32 43 32H81C85.4183 32 89 35.5817 89 40V83C89 87.4183 85.4183 91 81 91H43C38.5817 91 35 87.4183 35 83V40Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M93.7861 43.8177C94.9913 44.9546 95.0467 46.8533 93.9098 48.0585L68.1823 75.333C67.0454 76.5382 65.1467 76.5936 63.9415 75.4567C62.7362 74.3198 62.6808 72.4211 63.8177 71.2159L89.5452 43.9415C90.6821 42.7362 92.5808 42.6808 93.7861 43.8177Z"
          fill="#676C93"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_457_428"
          x="24.5"
          y="22.5"
          width="91"
          height="92"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="8.25"
            result="effect1_foregroundBlur_457_428"
          />
        </filter>
        <clipPath id="clip0_457_428">
          <rect width="120" height="120" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
});

SketchIllustration.displayName = "SketchIllustration";

export default SketchIllustration;
