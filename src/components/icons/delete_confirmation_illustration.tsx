import { cn } from "@/lib/utils";
import React from "react";

const DeleteConfirmationIllustration = React.forwardRef<
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M60 120C93.1371 120 120 93.1371 120 60C120 26.8629 93.1371 0 60 0C45.133 0 39.4818 17.8318 29 26.7868C16.1188 37.7917 0 41.7299 0 60C0 93.1371 26.8629 120 60 120Z"
        fill="#EEF0F6"
      />
      <g filter="url(#filter0_f_457_455)">
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
      <g clipPath="url(#clip0_457_455)">
        <path
          d="M64.7622 72.9995L70.7444 67.017C70.9089 66.8524 70.9997 66.6327 71 66.3984C71 66.164 70.9092 65.944 70.7444 65.7796L70.2202 65.2555C70.0553 65.0904 69.8356 65 69.6011 65C69.367 65 69.1473 65.0904 68.9824 65.2555L63.0003 71.2375L57.0178 65.2555C56.8533 65.0904 56.6334 65 56.399 65C56.1649 65 55.945 65.0904 55.7805 65.2555L55.256 65.7796C54.9147 66.1209 54.9147 66.6761 55.256 67.017L61.2383 72.9995L55.256 78.9817C55.0913 79.1466 55.0007 79.3663 55.0007 79.6006C55.0007 79.8349 55.0913 80.0546 55.256 80.2194L55.7804 80.7435C55.9449 80.9084 56.1649 80.999 56.3989 80.999C56.6333 80.999 56.8531 80.9084 57.0177 80.7435L63.0001 74.7613L68.9823 80.7435C69.1471 80.9084 69.3668 80.999 69.601 80.999H69.6012C69.8355 80.999 70.0552 80.9084 70.22 80.7435L70.7443 80.2194C70.9088 80.0547 70.9996 79.8349 70.9996 79.6006C70.9996 79.3663 70.9088 79.1466 70.7443 78.9818L64.7622 72.9995Z"
          fill="#AB0808"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_457_455"
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
            result="effect1_foregroundBlur_457_455"
          />
        </filter>
        <clipPath id="clip0_457_455">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(55 65)"
          />
        </clipPath>
      </defs>
    </svg>
  );
});

DeleteConfirmationIllustration.displayName = "DeleteConfirmationIllustration";

export default DeleteConfirmationIllustration;
