import { cn } from "@/lib/utils";
import React from "react";

const TwitterXIcon = React.forwardRef<
  React.ElementRef<"svg">,
  React.HTMLAttributes<"svg"> & {
    width?: string | null;
    height?: string | null;
    pathFill?: string | null;
    rectFill?: string | null;
  }
>(({ className, width, height, pathFill, rectFill, ...props }, forwardRef) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_568_69)">
        <path
          d="M6.6875 6.19531L15.3546 17.7813H17.3172L8.65011 6.19531H6.6875Z"
          fill={pathFill ? pathFill : "#687076"}
        />
        <path
          d="M11.9875 0.132812C5.44029 0.132812 0.132812 5.44029 0.132812 11.9875C0.132812 18.5347 5.44029 23.8422 11.9875 23.8422C18.5347 23.8422 23.8422 18.5347 23.8422 11.9875C23.8422 5.44029 18.5347 0.132812 11.9875 0.132812ZM14.8937 18.7062L10.948 13.4303L6.06437 18.7062H4.80909L10.3871 12.6803L4.84413 5.26879H9.11629L12.7502 10.1276L17.2476 5.26879H18.5028L13.311 10.8779L19.1659 18.7062H14.8937Z"
          fill={pathFill ? pathFill : "#687076"}
        />
      </g>
      <defs>
        <clipPath id="clip0_568_69">
          <rect width="24" height="24" fill={rectFill ? rectFill : "white"} />
        </clipPath>
      </defs>
    </svg>
  );
});

TwitterXIcon.displayName = "TwitterXIcon";

export default TwitterXIcon;
