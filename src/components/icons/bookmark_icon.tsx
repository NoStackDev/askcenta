import { cn } from "@/lib/utils";
import React from "react";

const BookmarkIcon = React.forwardRef<
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
        d="M7.33594 26.9973V7.07433C7.33594 6.40082 7.56927 5.83073 8.03594 5.36406C8.5026 4.8974 9.07269 4.66406 9.7462 4.66406H22.2589C22.9324 4.66406 23.5025 4.8974 23.9692 5.36406C24.4359 5.83073 24.6692 6.40082 24.6692 7.07433V26.9973L16.0026 23.2794L7.33594 26.9973ZM9.3359 23.9307L16.0026 21.064L22.6692 23.9307V7.07433C22.6692 6.97175 22.6265 6.87772 22.541 6.79223C22.4555 6.70676 22.3615 6.66403 22.2589 6.66403H9.7462C9.64363 6.66403 9.54959 6.70676 9.4641 6.79223C9.37864 6.87772 9.3359 6.97175 9.3359 7.07433V23.9307Z"
        fill={pathColor ? pathColor : "#6356E5"}
      />
    </svg>
  );
});

BookmarkIcon.displayName = "BookmarkIcon";

export default BookmarkIcon;
