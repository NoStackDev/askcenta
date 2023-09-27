import { cn } from "@/lib/utils";
import React from "react";

const SearchIcon = React.forwardRef<
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
      width={width ? width : "24"}
      height={height ? height : "24"}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      ref={forwardRef}
      aria-label={props["aria-label"]}
      className={cn("", className)}
    >
      <path
        d="M19.5427 20.5769L13.2619 14.2961C12.7619 14.7089 12.1869 15.032 11.5369 15.2653C10.8869 15.4987 10.2145 15.6153 9.51965 15.6153C7.81048 15.6153 6.36396 15.0236 5.1801 13.84C3.99623 12.6564 3.4043 11.2103 3.4043 9.50157C3.4043 7.79284 3.99608 6.34616 5.17965 5.16154C6.36321 3.97694 7.80936 3.38464 9.5181 3.38464C11.2268 3.38464 12.6735 3.97658 13.8581 5.16044C15.0427 6.34431 15.635 7.79083 15.635 9.49999C15.635 10.2141 15.5151 10.8961 15.2754 11.5461C15.0356 12.1961 14.7158 12.7615 14.3158 13.2423L20.5965 19.5231L19.5427 20.5769ZM9.51965 14.1154C10.8081 14.1154 11.8995 13.6683 12.7937 12.774C13.6879 11.8798 14.135 10.7885 14.135 9.49999C14.135 8.21153 13.6879 7.12018 12.7937 6.22594C11.8995 5.33171 10.8081 4.88459 9.51965 4.88459C8.23118 4.88459 7.13983 5.33171 6.2456 6.22594C5.35138 7.12018 4.90427 8.21153 4.90427 9.49999C4.90427 10.7885 5.35138 11.8798 6.2456 12.774C7.13983 13.6683 8.23118 14.1154 9.51965 14.1154Z"
        fill={pathColor ? pathColor : "#4C4B60"}
      />
    </svg>
  );
});

SearchIcon.displayName = "SearchIcon";

export default SearchIcon;
