import { cn } from "@/lib/utils";
import React from "react";

const CommentIcon = React.forwardRef<
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
      width={width ? width : "20"}
      height={height ? height : "20"}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      ref={forwardRef}
      aria-label={props["aria-label"]}
      className={cn("", className)}
    >
      <path
        d="M17.9192 17.5346L14.9705 14.5859H3.59235C3.17141 14.5859 2.8151 14.4401 2.52344 14.1484C2.23177 13.8567 2.08594 13.5004 2.08594 13.0795V3.59236C2.08594 3.17141 2.23177 2.8151 2.52344 2.52344C2.8151 2.23177 3.17141 2.08594 3.59235 2.08594H16.4128C16.8338 2.08594 17.1901 2.23177 17.4817 2.52344C17.7734 2.8151 17.9192 3.17141 17.9192 3.59236V17.5346ZM15.5026 13.3359L16.6693 14.4898V3.59236C16.6693 3.52824 16.6425 3.46947 16.5891 3.41604C16.5357 3.36263 16.4769 3.33592 16.4128 3.33592H3.59235C3.52824 3.33592 3.46947 3.36263 3.41604 3.41604C3.36263 3.46947 3.33592 3.52824 3.33592 3.59236V13.0795C3.33592 13.1436 3.36263 13.2024 3.41604 13.2558C3.46947 13.3092 3.52824 13.3359 3.59235 13.3359H15.5026Z"
        fill={pathColor ? pathColor : "#000000"}
      />
    </svg>
  );
});

CommentIcon.displayName = "CommentIcon";

export default CommentIcon;
