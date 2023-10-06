import { cn } from "@/lib/utils";
import React from "react";

const SearchFillIcon = React.forwardRef<
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
        d="M19.5447 20.5751L13.2639 14.2943C12.7639 14.7071 12.1889 15.0302 11.5389 15.2635C10.8889 15.4968 10.2165 15.6135 9.5216 15.6135C7.81243 15.6135 6.36592 15.0217 5.18205 13.8382C3.99818 12.6546 3.40625 11.2085 3.40625 9.49974C3.40625 7.791 3.99803 6.34433 5.1816 5.15971C6.36517 3.97511 7.81132 3.38281 9.52005 3.38281C11.2288 3.38281 12.6754 3.97475 13.8601 5.15861C15.0447 6.34248 15.637 7.789 15.637 9.49816C15.637 10.2123 15.5171 10.8943 15.2774 11.5443C15.0376 12.1943 14.7177 12.7597 14.3177 13.2405L20.5985 19.5212L19.5447 20.5751ZM9.5216 14.1136C10.8101 14.1136 11.9014 13.6664 12.7956 12.7722C13.6899 11.878 14.137 10.7866 14.137 9.49816C14.137 8.2097 13.6899 7.11835 12.7956 6.22411C11.9014 5.32988 10.8101 4.88276 9.5216 4.88276C8.23313 4.88276 7.14178 5.32988 6.24755 6.22411C5.35333 7.11835 4.90623 8.2097 4.90623 9.49816C4.90623 10.7866 5.35333 11.878 6.24755 12.7722C7.14178 13.6664 8.23313 14.1136 9.5216 14.1136Z"
        fill={pathColor ? pathColor : "#4C4B60"}
      />
    </svg>
  );
});

SearchFillIcon.displayName = "SearchFillIcon";

export default SearchFillIcon;
