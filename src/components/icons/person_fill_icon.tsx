import React from "react";

const PersonFillIcon = React.forwardRef<
  React.ElementRef<"svg">,
  React.HTMLAttributes<"svg"> & {
    width?: string | null;
    height?: string | null;
    pathFill?: string | null;
  }
>(({ className, width, height, pathFill, ...props }, forwardRef) => {
  return (
    <svg
      width={width ? width : "58"}
      height={height ? height : "58"}
      viewBox="0 0 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      ref={forwardRef}
    >
      <path
        d="M29.0047 29.0047C26.3647 29.0047 24.1047 28.0647 22.2247 26.1847C20.3447 24.3047 19.4047 22.0447 19.4047 19.4047C19.4047 16.7647 20.3447 14.5047 22.2247 12.6247C24.1047 10.7447 26.3647 9.80469 29.0047 9.80469C31.6447 9.80469 33.9047 10.7447 35.7847 12.6247C37.6647 14.5047 38.6047 16.7647 38.6047 19.4047C38.6047 22.0447 37.6647 24.3047 35.7847 26.1847C33.9047 28.0647 31.6447 29.0047 29.0047 29.0047ZM9.80469 48.2047V41.4847C9.80469 40.1247 10.1547 38.8747 10.8547 37.7347C11.5547 36.5947 12.4847 35.7247 13.6447 35.1247C16.1247 33.8847 18.6447 32.9547 21.2047 32.3347C23.7647 31.7147 26.3647 31.4047 29.0047 31.4047C31.6447 31.4047 34.2447 31.7147 36.8047 32.3347C39.3647 32.9547 41.8847 33.8847 44.3647 35.1247C45.5247 35.7247 46.4547 36.5947 47.1547 37.7347C47.8547 38.8747 48.2047 40.1247 48.2047 41.4847V48.2047H9.80469Z"
        fill={pathFill ? pathFill : "#9087E7"}
      />
    </svg>
  );
});

PersonFillIcon.displayName = "PersonFillIcon";

export default PersonFillIcon;
