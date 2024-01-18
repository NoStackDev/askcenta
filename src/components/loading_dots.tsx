import { cn } from "@/lib/utils";
import React from "react";

interface LoadingDotsProps extends React.HTMLAttributes<HTMLDivElement> {
  dotDiameter?: string;
}

export default function LoadingDots({
  className,
  dotDiameter,
}: LoadingDotsProps) {
  return (
    <div
      className={cn(
        "p-5 rounded-full flex space-x-3 justify-center items-center",
        className
      )}
    >
      <div
        className={cn(
          "w-5 h-5 bg-gray-800 rounded-full animate-bounce duration-500 delay-100",
          dotDiameter && `h-[${dotDiameter}] w-[${dotDiameter}]`
        )}
      ></div>
      <div
        className={cn(
          "w-5 h-5 bg-gray-800 rounded-full animate-bounce duration-500 delay-300",
          dotDiameter && `h-[${dotDiameter}] w-[${dotDiameter}]`
        )}
      ></div>
      <div
        className={cn(
          "w-5 h-5 bg-gray-800 rounded-full animate-bounce duration-500 delay-600",
          dotDiameter && `h-[${dotDiameter}] w-[${dotDiameter}]`
        )}
      ></div>
    </div>
  );
}
