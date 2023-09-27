import { cn } from "@/lib/utils";
import React from "react";

const ServicePackagesIcon = React.forwardRef<
  React.ElementRef<"svg">,
  React.HTMLAttributes<"svg"> & {
    width?: string | null;
    height?: string | null;
    rectHeight?: string | null;
    rectWidth?: string | null;
    pathColor?: string | null;
    pathColor1?: string | null;
    pathColor2?: string | null;
    pathColor3?: string | null;
    pathColor4?: string | null;
  }
>(
  (
    {
      className,
      width,
      height,
      rectWidth,
      rectHeight,
      pathColor,
      pathColor1,
      pathColor2,
      pathColor3,
      pathColor4,
      ...props
    },
    forwardRef
  ) => {
    return (
      <svg
        width={width ? width : "48"}
        height={height ? height : "48"}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_304_1066)">
          <path
            d="M17.6377 27.2998C17.6377 27.8095 17.2216 28.2299 16.7091 28.2299H15.7804C15.2708 28.2299 14.8504 27.8124 14.8504 27.2998V26.4965L0.461914 23.6084V33.3337C0.461914 35.3766 2.13342 37.0481 4.17637 37.0481H28.3131C30.3547 37.0481 32.0262 35.378 32.0262 33.3337V23.6084L17.6362 26.4965L17.6377 27.2998Z"
            fill={pathColor ? pathColor : "#4C4B60"}
          />
          <path
            d="M28.3148 15.5302H22.471C22.4739 15.474 22.4869 15.4207 22.4869 15.3603V13.503C22.4869 12.0936 21.3423 10.9504 19.9343 10.9504H12.5586C11.1491 10.9504 10.006 12.095 10.006 13.503V15.3588C10.006 15.4193 10.019 15.4726 10.0233 15.5287H4.17948C1.87451 15.5302 0 17.4032 0 19.7082V22.6438L14.8535 25.6269V24.5154C14.8535 24.0057 15.2725 23.5882 15.7836 23.5882H16.7122C17.2233 23.5882 17.6408 24.0057 17.6408 24.5154V25.6269L32.4914 22.6452V19.7096C32.4914 17.4018 30.6227 15.5302 28.3148 15.5302ZM21.0961 15.3588C21.0961 15.4193 21.0687 15.4726 21.0601 15.5287H11.4313C11.4227 15.4726 11.3982 15.4193 11.3982 15.3588V13.503C11.3982 12.8638 11.9165 12.3426 12.56 12.3426H19.9357C20.5778 12.3426 21.099 12.8624 21.099 13.503V15.3588H21.0961Z"
            fill={pathColor1 ? pathColor1 : "#4C4B60"}
          />
          <path
            d="M41.3659 18.2887H33.7656V19.4937H41.3659V18.2887Z"
            fill={pathColor2 ? pathColor2 : "#4C4B60"}
          />
          <path
            d="M44.683 21.505H33.7656V22.7115H44.683V21.505Z"
            fill={pathColor3 ? pathColor3 : "#4C4B60"}
          />
          <path
            d="M48.0001 24.7184H33.7656V25.9235H48.0001V24.7184Z"
            fill={pathColor4 ? pathColor4 : "#4C4B60"}
          />
        </g>
        <defs>
          <clipPath id="clip0_304_1066">
            <rect
              width={rectWidth ? rectWidth : "48"}
              height={rectHeight ? rectHeight : "48"}
              fill="white"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
);

ServicePackagesIcon.displayName = "ServicePackagesIcon";

export default ServicePackagesIcon;
