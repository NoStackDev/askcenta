import React from "react";

const HamburgerIcon = React.forwardRef<
  React.ElementRef<"svg">,
  React.HTMLAttributes<"svg"> & {
    width?: string | null;
    height?: string | null;
    pathColor?: string | null;
  }
>(({ width, height, pathColor, ...props }, forwardRef) => {
  return (
    <svg
      fill="none"
      width={width ? width : "24"}
      height={height ? height : "24"}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      ref={forwardRef}
      aria-label={props["aria-label"]}
    >
      <path
        d="M3.25 17.6364V16.1364H20.75V17.6364H3.25ZM3.25 12.7518V11.2518H20.75V12.7518H3.25ZM3.25 7.86716V6.36719H20.75V7.86716H3.25Z"
        fill={pathColor ? pathColor : "#9696A0"}
      />
    </svg>
  );
});

HamburgerIcon.displayName = "HamburgerIcon";

export default HamburgerIcon;
