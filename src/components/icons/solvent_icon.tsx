import { cn } from "@/lib/utils";
import React from "react";

const SolventIcon = React.forwardRef<
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
        fill="none"
        width={width ? width : "24"}
        height={height ? height : "24"}
        viewBox={`0 0 ${width ? width : "24"} ${height ? height : "24"}`}
        xmlns="http://www.w3.org/2000/svg"
        ref={forwardRef}
        aria-label={props["aria-label"]}
        className={cn("", className)}
      >
        <g clipPath="url(#clip0_656_485)">
          <path
            d="M12.0001 23.5003C10.4474 23.5003 8.94149 23.1964 7.52388 22.5965C6.15466 22.0172 4.92452 21.188 3.86838 20.1319C2.81225 19.0758 1.98276 17.846 1.40379 16.4764C0.803949 15.0591 0.5 13.5525 0.5 12.0005C0.5 10.4478 0.803949 8.94121 1.40379 7.52393C1.98276 6.15433 2.81225 4.92456 3.86838 3.86843C4.92452 2.81225 6.15461 1.98314 7.52388 1.40379C8.94149 0.803949 10.4474 0.5 12.0001 0.5C13.5529 0.5 15.0587 0.803949 16.4767 1.40379C17.8456 1.98314 19.0754 2.81225 20.1315 3.86843C21.1876 4.92456 22.0175 6.15433 22.5968 7.52393C23.1959 8.94116 23.5006 10.4478 23.5006 12.0005C23.5006 13.5525 23.1959 15.0591 22.5968 16.4764C22.0175 17.846 21.1876 19.0757 20.1315 20.1319C19.0754 21.188 17.8456 22.0171 16.4767 22.5965C15.0587 23.1964 13.5529 23.5003 12.0001 23.5003Z"
            fill="#5E9CEA"
          />
          <path
            d="M12 0C5.37269 0 0 5.37232 0 12C0 18.627 5.37269 24 12 24C18.627 24 24 18.627 24 12C24 5.37232 18.627 0 12 0ZM19.7784 19.7776C18.7676 20.7884 17.5913 21.5815 16.2818 22.136C14.9261 22.7088 13.4854 22.9996 12 22.9996C10.5146 22.9996 9.07399 22.7088 7.7186 22.136C6.40867 21.5816 5.23239 20.7884 4.22163 19.7776C3.21125 18.7676 2.418 17.5906 1.86396 16.281C1.29052 14.9253 1.00012 13.4854 1.00012 12C1.00012 10.5139 1.29052 9.07399 1.86401 7.71827C2.41809 6.40867 3.2113 5.23169 4.22168 4.22168C5.23244 3.21092 6.40867 2.41772 7.71865 1.86326C9.07399 1.29052 10.5146 0.999742 12 0.999742C13.4854 0.999742 14.9261 1.29052 16.2818 1.86326C17.5913 2.41772 18.7676 3.21092 19.7784 4.22168C20.7891 5.23169 21.5816 6.40867 22.136 7.71827C22.7095 9.07399 22.9996 10.5139 22.9996 12C22.9996 13.4854 22.7095 14.9253 22.136 16.281C21.5815 17.5906 20.7891 18.7676 19.7784 19.7776Z"
            fill="#4B89DA"
          />
          <path
            d="M17.4552 16.7932L12.4554 5.79298H12.455C12.3762 5.6201 12.2023 5.5 12.0002 5.5C11.798 5.5 11.6241 5.6201 11.5453 5.79298H11.5449L6.54505 16.7932H6.54542C6.5165 16.8562 6.5 16.9258 6.5 16.9998C6.5 17.2759 6.72412 17.5 7.00027 17.5C7.2024 17.5 7.37636 17.3792 7.45507 17.2063L7.45544 17.2071L9.14038 13.5003H14.8595L16.5448 17.2071L16.5456 17.2063C16.6239 17.3792 16.7975 17.5 16.9997 17.5C17.2765 17.5 17.5006 17.2759 17.5006 16.9998C17.5006 16.9258 17.4838 16.8562 17.4552 16.7932ZM9.59486 12.4998L12.0002 7.20805L14.4054 12.4998H9.59486V12.4998Z"
            fill="#F4F6F9"
          />
        </g>
        <defs>
          <clipPath id="clip0_656_485">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);

SolventIcon.displayName = "SolventIcon";

export default SolventIcon;