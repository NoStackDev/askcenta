import { cn } from "@/lib/utils";
import React from "react";

const LinkedinIcon = React.forwardRef<
  React.ElementRef<"svg">,
  React.HTMLAttributes<"svg"> & {
    width?: string | null;
    height?: string | null;
    pathColor?: string | null;
    pathColor1?: string | null;
    pathColor2?: string | null;
    circleFill?: string | null;
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
      circleFill,
      ...props
    },
    forwardRef
  ) => {
    return (
      <svg
        width={width ? width : "24"}
        height={height ? height : "24"}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <circle
          cx="12"
          cy="12"
          r="12"
          fill={circleFill ? circleFill : "white"}
        />
        <path
          d="M6.57733 17.6471H9.04462V9.65959H6.57733V17.6471Z"
          fill={pathColor ? pathColor : "black"}
        />
        <path
          d="M6.35303 7.10959C6.35303 7.89709 6.98854 8.53459 7.81097 8.53459C8.59602 8.53459 9.23153 7.89709 9.23153 7.10959C9.23153 6.32209 8.59602 5.64709 7.81097 5.64709C6.98854 5.64709 6.35303 6.32209 6.35303 7.10959Z"
          fill={pathColor1 ? pathColor1 : "black"}
        />
        <path
          d="M15.8484 17.6471H18.353V13.2596C18.353 11.1221 17.867 9.43459 15.3624 9.43459C14.1661 9.43459 13.3437 10.1096 13.0072 10.7471H12.9699V9.65959H10.6147V17.6471H13.082V13.7096C13.082 12.6596 13.2689 11.6471 14.5773 11.6471C15.8484 11.6471 15.8484 12.8471 15.8484 13.7471V17.6471Z"
          fill={pathColor2 ? pathColor2 : "black"}
        />
      </svg>
    );
  }
);

LinkedinIcon.displayName = "LinkedinIcon";

export default LinkedinIcon;
