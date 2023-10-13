import { cn } from "@/lib/utils";
import React from "react";

const AddPhotoFillIcon = React.forwardRef<
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
      width={width ? width : "80"}
      height={height ? height : "80"}
      viewBox={`0 0 ${width ? width : "80"} ${height ? height : "80"}`}
      xmlns="http://www.w3.org/2000/svg"
      ref={forwardRef}
      aria-label={props["aria-label"]}
      className={cn("", className)}
    >
      <path d="M11 13H5V11H11V5H13V11H19V13H13V19H11V13Z" />
      <g opacity="0.5">
        <path
          d="M11.0257 68.3332C9.34189 68.3332 7.91667 67.7498 6.75 66.5832C5.58333 65.4165 5 63.9913 5 62.3075V24.359C5 22.6752 5.58333 21.25 6.75 20.0833C7.91667 18.9167 9.34189 18.3333 11.0257 18.3333H21.2051L27.3717 11.6667H46.0255V16.6666H29.5512L23.4358 23.3333H11.0257C10.7265 23.3333 10.4808 23.4294 10.2884 23.6218C10.0961 23.8141 9.99992 24.0598 9.99992 24.359V62.3075C9.99992 62.6067 10.0961 62.8524 10.2884 63.0448C10.4808 63.2371 10.7265 63.3333 11.0257 63.3333H62.3075C62.6067 63.3333 62.8524 63.2371 63.0448 63.0448C63.2371 62.8524 63.3333 62.6067 63.3333 62.3075V33.9743H68.3332V62.3075C68.3332 63.9913 67.7498 65.4165 66.5832 66.5832C65.4165 67.7498 63.9913 68.3332 62.3075 68.3332H11.0257ZM63.3333 23.3333V16.6666H56.6666V11.6667H63.3333V5H68.3332V11.6667H74.9998V16.6666H68.3332V23.3333H63.3333ZM36.6666 57.0511C40.4914 57.0511 43.7339 55.721 46.3941 53.0608C49.0543 50.4005 50.3844 47.158 50.3844 43.3333C50.3844 39.5085 49.0543 36.266 46.3941 33.6058C43.7339 30.9455 40.4914 29.6154 36.6666 29.6154C32.8418 29.6154 29.5993 30.9455 26.9391 33.6058C24.2789 36.266 22.9487 39.5085 22.9487 43.3333C22.9487 47.158 24.2789 50.4005 26.9391 53.0608C29.5993 55.721 32.8418 57.0511 36.6666 57.0511ZM36.6666 52.0513C34.205 52.0513 32.1366 51.2136 30.4614 49.5384C28.7862 47.8632 27.9486 45.7948 27.9486 43.3333C27.9486 40.8717 28.7862 38.8033 30.4614 37.1281C32.1366 35.4529 34.205 34.6153 36.6666 34.6153C39.1281 34.6153 41.1965 35.4529 42.8717 37.1281C44.547 38.8033 45.3846 40.8717 45.3846 43.3333C45.3846 45.7948 44.547 47.8632 42.8717 49.5384C41.1965 51.2136 39.1281 52.0513 36.6666 52.0513Z"
          fill={pathColor ? pathColor : "black"}
        />
      </g>
    </svg>
  );
});

AddPhotoFillIcon.displayName = "AddPhotoFillIcon";

export default AddPhotoFillIcon;