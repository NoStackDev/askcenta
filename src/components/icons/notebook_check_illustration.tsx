import { cn } from "@/lib/utils";
import React from "react";

const NotebookCheckIllustration = React.forwardRef<
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
      <g clipPath="url(#clip0_457_440)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M60 120C93.1371 120 120 93.1371 120 60C120 26.8629 93.1371 0 60 0C45.133 0 39.4818 17.8318 29 26.7868C16.1188 37.7917 0 41.7299 0 60C0 93.1371 26.8629 120 60 120Z"
          fill="#EEF0F6"
        />
        <g filter="url(#filter0_f_457_440)">
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M47 35C47 31.134 50.134 28 54 28H72C75.866 28 79 31.134 79 35V40C79 41.6569 77.6569 43 76 43C74.3431 43 73 41.6569 73 40V35C73 34.4477 72.5523 34 72 34H54C53.4477 34 53 34.4477 53 35V40C53 41.6569 51.6569 43 50 43C48.3431 43 47 41.6569 47 40V35Z"
          fill="#676C93"
        />
        <path
          d="M92.1618 53.8254L68.6654 77.3588L62.2863 70.9797C62.0802 70.7321 61.8259 70.529 61.5387 70.3828C61.2434 70.2324 60.92 70.1455 60.5891 70.1276C60.2582 70.1097 59.9273 70.1613 59.6175 70.2789C59.3078 70.3966 59.0261 70.5778 58.7905 70.8108C58.555 71.0439 58.3708 71.3236 58.2498 71.6321C58.1289 71.9406 58.0738 72.271 58.0882 72.602C58.1025 72.9331 58.186 73.2574 58.3332 73.5543C58.4768 73.8439 58.678 74.101 58.9243 74.31L66.9798 82.3655L67.3344 82.013L66.9809 82.3666L66.9807 82.3664C67.2014 82.5883 67.4639 82.7643 67.7529 82.8844C68.0423 83.0046 68.3527 83.0664 68.666 83.0662L68.6702 83.0661C68.9825 83.0633 69.2911 82.9989 69.5784 82.8766C69.8648 82.7547 70.1245 82.5777 70.3427 82.3556C70.3433 82.355 70.344 82.3543 70.3446 82.3536L95.513 57.1853L95.5213 57.177L95.5293 57.1682C95.9395 56.7171 96.1605 56.1256 96.1466 55.5161C96.1327 54.9066 95.8849 54.3258 95.4546 53.8939C95.0242 53.462 94.4443 53.2122 93.8348 53.1961C93.2254 53.1801 92.6331 53.399 92.1806 53.8076L92.171 53.8162L92.1618 53.8254Z"
          fill="#49BB8F"
          stroke="#49BB8F"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_457_440"
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
            result="effect1_foregroundBlur_457_440"
          />
        </filter>
        <clipPath id="clip0_457_440">
          <rect width="120" height="120" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
});

NotebookCheckIllustration.displayName = "NotebookCheckIllustration";

export default NotebookCheckIllustration;
