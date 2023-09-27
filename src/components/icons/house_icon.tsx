import React from "react";

const HouseIcon = React.forwardRef<
  React.ElementRef<"svg">,
  React.HTMLAttributes<"svg"> & {
    width?: string | null;
    height?: string | null;
    pathColor?: string | null;
    pathColor1?: string | null;
  }
>(
  (
    { className, width, height, pathColor, pathColor1, ...props },
    forwardRef
  ) => {
    return (
      <svg
        width={width ? width : "48"}
        height={height ? height : "48"}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={forwardRef}
        aria-label={props["aria-label"]}
        className={className}
      >
        <path
          d="M41.4873 20.4375L32.3276 11.2779L24 2.95023L15.6724 11.2779L6.50981 20.4419L0 26.9502L3.7485 30.6987L10.2568 24.1904L19.4209 15.0264L24 10.4473L28.5791 15.0264L37.7373 24.186L44.2515 30.6987L48 26.9502L41.4873 20.4375Z"
          fill={pathColor ? pathColor : "#4C4B60"}
        />
        <path
          d="M8.03613 30.9727V45.0498H25.7578V33.895H32.2104V45.0498H39.9638V30.9683L24.0015 15.0059L8.03613 30.9727Z"
          fill={pathColor1 ? pathColor1 : "#4C4B60"}
        />
      </svg>
    );
  }
);

HouseIcon.displayName = "HouseIcon";

export default HouseIcon;
