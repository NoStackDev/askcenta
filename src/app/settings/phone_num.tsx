import { cn } from "@/lib/utils";
import React from "react";

interface PhoneNumProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function PhoneNum({ className, ...props }: PhoneNumProps) {
  return (
    <div
      className={cn(
        "font-normal text-base text-black opacity-60 w-fit",
        className
      )}
      {...props}
    >
      +2348011112222
    </div>
  );
}
