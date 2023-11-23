import { cn } from "@/lib/utils";
import React from "react";

const WhatsappIcon = React.forwardRef<
  React.ElementRef<"svg">,
  React.HTMLAttributes<"svg"> & {
    width?: string | null;
    height?: string | null;
    circleFill?: string | null;
    pathFill?: string | null;
  }
>(
  (
    {
      className,
      width,
      height,
      pathFill,

      circleFill,
      ...props
    },
    forwardRef
  ) => {
    return (
      <svg
        width={width || "32"}
        height={height || "32"}
        viewBox={`0 0 ${width || "32"} ${height || "32"}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={forwardRef}
        aria-label={props["aria-label"]}
        className={cn("", className)}
      >
        <g clipPath="url(#clip0_797_746)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.3428 25.2044H16.3466C21.5722 25.2044 25.8252 20.9527 25.8274 15.7266C25.8283 13.1942 24.8431 10.8129 23.0531 9.02144C21.2631 7.23 18.8827 6.24281 16.3504 6.24181C11.1208 6.24181 6.8677 10.4933 6.86564 15.719C6.86495 17.5098 7.36614 19.2539 8.31514 20.763L8.54064 21.1215L7.58283 24.6189L11.1711 23.6779L11.5173 23.8834C12.973 24.7469 14.6415 25.2038 16.3428 25.2044ZM19.5995 17.1791C19.8608 17.2742 21.262 17.9635 21.547 18.1061C21.6026 18.1339 21.6545 18.159 21.7027 18.1823C21.9016 18.2784 22.0359 18.3432 22.0933 18.4389C22.1645 18.5578 22.1645 19.1283 21.9271 19.7938C21.6895 20.4593 20.5508 21.0668 20.0033 21.1486C19.5122 21.222 18.8908 21.2526 18.2081 21.0357C17.7941 20.9044 17.2633 20.7291 16.5833 20.4356C13.912 19.2825 12.1066 16.6945 11.7646 16.2044C11.7406 16.1699 11.7238 16.1458 11.7144 16.1333L11.7119 16.13C11.5606 15.9281 10.5506 14.5805 10.5506 13.1859C10.5506 11.8733 11.1956 11.1854 11.4924 10.8688C11.5127 10.8471 11.5314 10.8272 11.5481 10.8089C11.8095 10.5237 12.1181 10.4524 12.3082 10.4524C12.4982 10.4524 12.6884 10.4541 12.8545 10.4624C12.8749 10.4634 12.8962 10.4633 12.9182 10.4631C13.0843 10.4622 13.2915 10.4609 13.4957 10.9515C13.5742 11.14 13.6889 11.4193 13.81 11.714C14.0554 12.3112 14.3267 12.9715 14.3745 13.067C14.4457 13.2096 14.4932 13.3761 14.3982 13.5662C14.384 13.5946 14.3709 13.6214 14.3583 13.6471C14.2869 13.7929 14.2344 13.9001 14.1132 14.0416C14.0657 14.097 14.0166 14.1568 13.9675 14.2166C13.8693 14.3361 13.7712 14.4557 13.6857 14.5407C13.543 14.6828 13.3945 14.8369 13.5607 15.1222C13.727 15.4074 14.299 16.3406 15.1463 17.096C16.0572 17.9083 16.8489 18.2516 17.2501 18.4255C17.3284 18.4594 17.3917 18.4869 17.4383 18.5102C17.7233 18.6529 17.8895 18.6291 18.0558 18.4389C18.222 18.2488 18.7682 17.607 18.9583 17.3218C19.1483 17.0365 19.3382 17.0841 19.5995 17.1791Z"
            fill="#25D366"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM16.3465 4.31594C19.3979 4.31719 22.2619 5.50475 24.4155 7.66013C26.5691 9.8155 27.7545 12.6804 27.7533 15.7274C27.7507 22.0146 22.6333 27.1304 16.3466 27.1304H16.342C14.4328 27.1296 12.557 26.6509 10.891 25.7424L4.84408 27.3281L6.46233 21.419C5.46414 19.6899 4.93895 17.728 4.93976 15.7183C4.94226 9.431 10.0593 4.31594 16.3465 4.31594Z"
            fill="#25D366"
          />
        </g>
        <defs>
          <clipPath id="clip0_797_746">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);

WhatsappIcon.displayName = "WhatsappIcon";

export default WhatsappIcon;
