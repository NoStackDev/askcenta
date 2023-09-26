import React from "react";

interface DiscoverIconProps {
  width?: string;
  height?: string;
  svgColor?: string;
}

// interface DiscoverIconProps extends React.HTMLAttributes<'svg'>

const DiscoverIcon = React.forwardRef<
  React.ElementRef<"svg">,
  React.HTMLAttributes<"svg"> & {
    width?: string;
    height?: string;
    svgColor?: string;
  }
>(({ width, height, svgColor }, forwardRef) => {
  return (
    <svg
      fill={svgColor ? svgColor : "#000000"}
      width={width ? width : "800px"}
      height={height ? height : "800px"}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      ref={forwardRef}
    >
      <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM7.88 7.88l-3.54 7.78 7.78-3.54 3.54-7.78-7.78 3.54zM10 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
    </svg>
  );
});

export default DiscoverIcon;
