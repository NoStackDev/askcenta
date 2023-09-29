import { cn } from "@/lib/utils";
import React from "react";

const EditIcon = React.forwardRef<
  React.ElementRef<"svg">,
  React.HTMLAttributes<"svg"> & {
    width?: string | null;
    height?: string | null;
    pathFill?: string | null;
  }
>(({ className, width, height, pathFill, ...props }, forwardRef) => {
  return (
    <svg
      width={width ? width : "32"}
      height={height ? height : "32"}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={forwardRef}
      aria-label={props["aria-label"]}
      className={cn("", className)}
    >
      <path
        d="M5.1562 19.0029H6.39272L15.6524 9.74329L14.4159 8.50674L5.1562 17.7664V19.0029ZM18.86 8.65869L15.4851 5.31451L16.7889 4.01069C17.0825 3.7171 17.4395 3.57031 17.86 3.57031C18.2806 3.57031 18.6376 3.7171 18.9312 4.01069L20.1485 5.22796C20.4421 5.52155 20.594 5.87346 20.6042 6.28371C20.6145 6.69396 20.4728 7.04588 20.1792 7.33946L18.86 8.65869ZM17.7754 9.75866L7.03118 20.5029H3.65625V17.128L14.4005 6.38371L17.7754 9.75866ZM15.0293 9.12021L14.4159 8.50674L15.6524 9.74329L15.0293 9.12021Z"
        fill={pathFill ? pathFill : "black"}
      />
    </svg>
  );
});

EditIcon.displayName = "EditIcon";

export default EditIcon;
