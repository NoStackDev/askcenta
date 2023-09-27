import { cn } from "@/lib/utils";
import React from "react";

const StarFilledIcon = React.forwardRef<
  React.ElementRef<"svg">,
  React.HTMLAttributes<"svg"> & {
    width?: string | null;
    height?: string | null;
    pathColor?: string | null;
  }
>(({ className, width, height, pathColor, ...props }, forwardRef) => {
  return (
    <svg
      fill="none"
      width={width ? width : "32"}
      height={height ? height : "32"}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={forwardRef}
      aria-label={props["aria-label"]}
      className={cn("", className)}
    >
      <path
        d="M11.8019 23.7645L16.0019 21.2312L20.2019 23.7979L19.1019 18.9979L22.8019 15.7979L17.9352 15.3645L16.0019 10.8312L14.0685 15.3312L9.20188 15.7645L12.9019 18.9979L11.8019 23.7645ZM8.76861 27.9465L10.6788 19.7209L4.29688 14.1902L12.7173 13.4595L16.0019 5.70312L19.2864 13.4595L27.7069 14.1902L21.3249 19.7209L23.2351 27.9465L16.0019 23.5824L8.76861 27.9465Z"
        fill={pathColor ? pathColor : "black"}
      />
    </svg>
  );
});

StarFilledIcon.displayName = "StarFilledIcon";

export default StarFilledIcon;
