import React from "react";

const PersonIcon = React.forwardRef<
  React.ElementRef<"svg">,
  React.HTMLAttributes<"svg"> & {
    width?: string | null;
    height?: string | null;
    pathColor?: string | null;
    strokeColor?: string | null;
  }
>(
  (
    { className, width, height, pathColor, strokeColor, ...props },
    forwardRef
  ) => {
    return (
      <svg
        width={width ? width : "32"}
        height={height ? height : "32"}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={forwardRef}
        aria-label={props["aria-label"]}
        className={className}
      >
        <circle
          cx="16"
          cy="16"
          r="15.5"
          fill="white"
          stroke={strokeColor ? strokeColor : "#9B91FD"}
        />
        <path
          d="M16.0011 16.0014C14.8278 16.0014 13.8233 15.5836 12.9878 14.748C12.1522 13.9125 11.7344 12.908 11.7344 11.7347C11.7344 10.5614 12.1522 9.55691 12.9878 8.72135C13.8233 7.8858 14.8278 7.46802 16.0011 7.46802C17.1744 7.46802 18.1789 7.8858 19.0144 8.72135C19.85 9.55691 20.2678 10.5614 20.2678 11.7347C20.2678 12.908 19.85 13.9125 19.0144 14.748C18.1789 15.5836 17.1744 16.0014 16.0011 16.0014ZM7.46777 24.5347V21.548C7.46777 20.9436 7.62333 20.388 7.93444 19.8814C8.24555 19.3747 8.65888 18.988 9.17444 18.7214C10.2767 18.1702 11.3967 17.7569 12.5344 17.4814C13.6722 17.2058 14.8278 17.068 16.0011 17.068C17.1744 17.068 18.33 17.2058 19.4678 17.4814C20.6056 17.7569 21.7256 18.1702 22.8278 18.7214C23.3433 18.988 23.7567 19.3747 24.0678 19.8814C24.3789 20.388 24.5344 20.9436 24.5344 21.548V24.5347H7.46777Z"
          fill={pathColor ? pathColor : "#9087E7"}
        />
      </svg>
    );
  }
);

PersonIcon.displayName = "PersonIcon";

export default PersonIcon;
