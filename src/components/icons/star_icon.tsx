import React from "react";

const StarIcon = React.forwardRef<
  React.ElementRef<"svg">,
  React.HTMLAttributes<"svg"> & {
    width?: string | null;
    height?: string | null;
    pathColor?: string | null;
  }
>(({ width, height, pathColor }, forwardRef) => {
  return (
    <svg
      fill="none"
      width={width ? width : "24"}
      height={height ? height : "24"}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      ref={forwardRef}
    >
      <path
        d="M6.57499 20.9615L8.00767 14.7923L3.22119 10.6443L9.53652 10.0962L11.9999 4.27896L14.4634 10.0962L20.7787 10.6443L15.9922 14.7923L17.4249 20.9615L11.9999 17.6884L6.57499 20.9615Z"
        fill={pathColor ? pathColor : "#1B1839"}
      />
    </svg>
  );
});

StarIcon.displayName = "StarIcon";

export default StarIcon;
