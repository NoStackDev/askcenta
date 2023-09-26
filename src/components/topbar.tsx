import React from "react";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";

const Topbar = React.forwardRef<
  React.ElementRef<typeof Card>,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, forwardRef) => {
  return (
    <Card ref={forwardRef} className={cn("", className)} {...props}></Card>
  );
});
