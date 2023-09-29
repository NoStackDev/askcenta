import { cn } from "@/lib/utils";
import React from "react";

const DeleteIcon = React.forwardRef<
  React.ElementRef<"svg">,
  React.HTMLAttributes<"svg"> & {
    width?: string | null;
    height?: string | null;
    pathFill?: string | null;
  }
>(({ className, width, height, pathFill, ...props }, forwardRef) => {
  return (
    <svg
      fill="none"
      width={width ? width : "24"}
      height={height ? height : "24"}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      ref={forwardRef}
      aria-label={props["aria-label"]}
      className={cn("", className)}
    >
      <path
        d="M7.3077 20.5017C6.80898 20.5017 6.38302 20.3251 6.02982 19.9719C5.67661 19.6187 5.5 19.1928 5.5 18.694V6.00176H4.5V4.50179H8.99997V3.61719H15V4.50179H19.5V6.00176H18.5V18.694C18.5 19.1992 18.325 19.6267 17.975 19.9767C17.625 20.3267 17.1974 20.5017 16.6922 20.5017H7.3077ZM17 6.00176H6.99997V18.694C6.99997 18.7838 7.02883 18.8575 7.08652 18.9152C7.14423 18.9729 7.21795 19.0018 7.3077 19.0018H16.6922C16.7692 19.0018 16.8397 18.9697 16.9038 18.9056C16.9679 18.8415 17 18.771 17 18.694V6.00176ZM9.40385 17.0018H10.9038V8.00176H9.40385V17.0018ZM13.0961 17.0018H14.5961V8.00176H13.0961V17.0018Z"
        fill={pathFill ? pathFill : "black"}
      />
    </svg>
  );
});

DeleteIcon.displayName = "DeleteIcon";

export default DeleteIcon;
