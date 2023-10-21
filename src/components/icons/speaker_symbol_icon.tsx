import { cn } from "@/lib/utils";
import React from "react";

const SpeakerSymbolIcon = React.forwardRef<
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
        <g clipPath="url(#clip0_656_545)">
          <path
            d="M8.50057 16.4924C8.50057 16.7686 8.27647 16.9927 8.00029 16.9927C7.72415 16.9927 7.5 16.7686 7.5 16.4924C7.5 16.2163 7.72415 15.9922 8.00029 15.9922C8.27647 15.9922 8.50057 16.2163 8.50057 16.4924Z"
            fill="#E6E9ED"
          />
          <path
            d="M9.49828 20.5072H4.99809L3.35156 13.4844L9.5071 13.5276L8.08834 16.4589L9.49828 20.5072Z"
            fill="#434A54"
          />
          <path
            d="M20.0002 10.9454C20.0002 12.6022 18.6569 13.9456 17.0001 13.9456C15.3433 13.9456 14 12.6022 14 10.9454C14 9.28789 15.3433 7.94531 17.0001 7.94531C18.6569 7.94531 20.0002 9.28789 20.0002 10.9454Z"
            fill="#434A54"
          />
          <path
            d="M0.999824 10.4925C0.999824 10.2163 0.775717 9.99219 0.499537 9.99219C0.223356 9.99219 0 10.2163 0 10.4925V11.4923V11.493C0 11.7684 0.223403 11.9925 0.499537 11.9925C0.775671 11.9925 0.999824 11.7684 0.999824 11.493V11.4923V10.4925Z"
            fill="#434A54"
          />
          <path
            d="M18.5003 17.9923L9 14.9922V6.99232L18.5003 3.99219V17.9923Z"
            fill="#C4D7F0"
          />
          <path
            d="M5.96779 12.9923C5.96779 13.2677 5.74368 13.4919 5.46755 13.4919H1.00029C0.724154 13.4919 0.5 13.2677 0.5 12.9923V8.99168C0.5 8.71554 0.724107 8.49219 1.00029 8.49219H5.46755C5.74368 8.49219 5.96779 8.71559 5.96779 8.99168V12.9923Z"
            fill="#6356E5"
          />
          <path
            d="M9.50004 14.4925C9.50004 14.7679 9.27593 14.992 8.99975 14.992H3.00029C2.7234 14.992 2.5 14.7679 2.5 14.4925V7.49172C2.5 7.21559 2.7234 6.99219 3.00029 6.99219H8.99979C9.27593 6.99219 9.50008 7.21559 9.50008 7.49172L9.50004 14.4925Z"
            fill="#434A54"
          />
          <path
            d="M17.9995 3.49219C17.7234 3.49219 17.5 3.71629 17.5 3.99247V17.9926C17.5 18.2687 17.7234 18.4928 17.9995 18.4928C18.2757 18.4928 18.4998 18.2687 18.4998 17.9926V3.99247C18.4998 3.71634 18.2756 3.49219 17.9995 3.49219Z"
            fill="#CCD1D9"
          />
          <path
            d="M20.9995 10.4922C20.7234 10.4922 20.5 10.7163 20.5 10.9924C20.5 11.2686 20.7234 11.4927 20.9995 11.4927H23.5001C23.7763 11.4927 23.9996 11.2686 23.9996 10.9924C23.9996 10.7163 23.7762 10.4922 23.5001 10.4922H20.9995Z"
            fill="#08D787"
          />
          <path
            d="M21.0003 9.49261C21.0618 9.49261 21.1248 9.48088 21.1856 9.45668L23.6855 8.45685C23.9418 8.3543 24.0663 8.06282 23.9638 7.80644C23.8612 7.55011 23.5705 7.42555 23.3141 7.5281L20.8142 8.52793C20.5579 8.63048 20.4334 8.922 20.5359 9.17834C20.6136 9.37397 20.8018 9.49261 21.0003 9.49261Z"
            fill="#08D787"
          />
          <path
            d="M23.6855 13.5279L21.1856 12.5281C20.9292 12.4255 20.6385 12.5501 20.5359 12.8064C20.4333 13.0628 20.5579 13.3536 20.8142 13.4561L23.3141 14.4567C23.3749 14.4809 23.4379 14.4926 23.4994 14.4926C23.6979 14.4926 23.8861 14.3732 23.9638 14.1776C24.0663 13.9213 23.9418 13.6305 23.6855 13.5279Z"
            fill="#08D787"
          />
        </g>
        <defs>
          <clipPath id="clip0_656_545">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);

SpeakerSymbolIcon.displayName = "SpeakerSymbolIcon";

export default SpeakerSymbolIcon;
