import { cn } from "@/lib/utils";
import React from "react";

const BookmarkFillIcon = React.forwardRef<
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
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      ref={forwardRef}
      aria-label={props["aria-label"]}
      className={cn("", className)}
    >
      <path
        d="M5 6c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C6.9 2 7.6 2 9 2h6c1.4 0 2.1 0 2.635.272a2.5 2.5 0 0 1 1.092 1.093C19 3.9 19 4.6 19 6v13.208c0 1.056 0 1.583-.217 1.856a1 1 0 0 1-.778.378c-.349.002-.764-.324-1.593-.976L12 17l-4.411 3.466c-.83.652-1.245.978-1.594.976a1 1 0 0 1-.778-.378C5 20.791 5 20.264 5 19.208V6z"
        fill={pathColor ? pathColor : "#6356E5"}
      />
    </svg>
  );
});

BookmarkFillIcon.displayName = "BookmarkFillIcon";

export default BookmarkFillIcon;
