import { cn } from "@/lib/utils";
import React from "react";

interface PreferredLocationProps
  extends React.HTMLAttributes<HTMLSpanElement> {}

export default function PreferredLocation({
  className,
  ...props
}: PreferredLocationProps) {
  return (
    <span
      className={cn("font-medium text-xs text-black opacity-60", className)}
      {...props}
    >
      Port Harcourt
    </span>
  );
}
