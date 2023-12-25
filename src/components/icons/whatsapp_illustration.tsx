import { cn } from "@/lib/utils";
import React from "react";

const WhatsappIllustration = React.forwardRef<
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
      <g clipPath="url(#clip0_457_476)">
        <path
          d="M34.4458 79.9361L34.4458 79.9362C33.4352 83.3722 36.6276 86.565 40.0637 85.5542C40.0638 85.5542 40.0638 85.5542 40.0638 85.5542L46.8175 83.5677C50.7194 85.7542 55.22 87 60 87C74.9116 87 87 74.9116 87 60C87 45.0883 74.9116 33 60 33C45.0883 33 33 45.0883 33 60C33 64.78 34.2459 69.2805 36.4322 73.1824L34.4458 79.9361ZM57.1088 62.8932C58.3493 64.1337 59.9983 65.2263 61.0938 65.8527L61.0943 65.853C62.3185 66.553 63.8009 66.1189 64.5199 65.0248L64.5204 65.024L65.835 63.0215C67.5688 64.2194 69.0408 65.2541 70.1374 66.6087C69.3669 68.2513 67.5599 69.5007 66.0084 69.4436C64.6984 69.3954 60.3881 68.871 55.7597 64.2425C51.1313 59.6141 50.6068 55.3038 50.5586 53.9938C50.5014 52.4402 51.7582 50.6296 53.4103 49.8573C54.7536 50.881 55.7573 52.359 56.8066 53.9043C56.8748 54.0046 56.9431 54.1052 57.0117 54.206L54.9806 55.7143L54.98 55.7147C53.9945 56.4472 53.6078 57.8372 54.2523 59.0112L54.2525 59.0116C54.83 60.0629 55.8664 61.6508 57.1088 62.8932Z"
          fill="#67C15E"
          stroke="white"
          strokeWidth="4"
        />
      </g>
      <defs>
        <clipPath id="clip0_457_476">
          <rect
            width="60"
            height="60"
            fill="white"
            transform="translate(30 30)"
          />
        </clipPath>
      </defs>
    </svg>
  );
});

WhatsappIllustration.displayName = "WhatsappIllustration";

export default WhatsappIllustration;
