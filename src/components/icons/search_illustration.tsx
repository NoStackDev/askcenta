import { cn } from "@/lib/utils";
import React from "react";

const SearchIllustration = React.forwardRef<
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
      <g clipPath="url(#clip0_457_190)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M60 120C93.1371 120 120 93.1371 120 60C120 26.8629 93.1371 0 60 0C45.133 0 39.4818 17.8318 29 26.7868C16.1188 37.7917 0 41.7299 0 60C0 93.1371 26.8629 120 60 120Z"
          fill="#EEF0F6"
        />
        <g filter="url(#filter0_f_457_190)">
          <path
            d="M92 40H40C38.3431 40 37 41.1485 37 42.5652V96.4348C37 97.8515 38.3431 99 40 99H92C93.6569 99 95 97.8515 95 96.4348V42.5652C95 41.1485 93.6569 40 92 40Z"
            fill="white"
          />
          <path
            d="M92 40H40C38.3431 40 37 41.1485 37 42.5652V96.4348C37 97.8515 38.3431 99 40 99H92C93.6569 99 95 97.8515 95 96.4348V42.5652C95 41.1485 93.6569 40 92 40Z"
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
          d="M84.6609 87.8685C85.6929 86.9512 85.7858 85.371 84.8686 84.3391L76.8686 75.3391C75.9513 74.3071 74.3711 74.2142 73.3391 75.1315C72.3072 76.0487 72.2142 77.6289 73.1315 78.6609L81.1315 87.6609C82.0488 88.6928 83.629 88.7858 84.6609 87.8685Z"
          fill="#676C93"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M66 54.5C60.201 54.5 55.5 59.201 55.5 65C55.5 70.799 60.201 75.5 66 75.5C71.799 75.5 76.5 70.799 76.5 65C76.5 59.201 71.799 54.5 66 54.5ZM50.5 65C50.5 56.4396 57.4396 49.5 66 49.5C74.5604 49.5 81.5 56.4396 81.5 65C81.5 73.5604 74.5604 80.5 66 80.5C57.4396 80.5 50.5 73.5604 50.5 65Z"
          fill="#676C93"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_457_190"
          x="20.5"
          y="23.5"
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
            result="effect1_foregroundBlur_457_190"
          />
        </filter>
        <clipPath id="clip0_457_190">
          <rect width="120" height="120" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
});

SearchIllustration.displayName = "SearchIllustration";

export default SearchIllustration;
