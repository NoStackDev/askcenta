import React from "react";
import { Card, CardContent } from "./ui/card";
import { cn } from "@/lib/utils";
import { PersonIcon } from "./icons";

const Topbar = React.forwardRef<
  React.ElementRef<typeof Card>,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, forwardRef) => {
  return (
    <Card
      ref={forwardRef}
      className={cn("", className)}
      {...props}
      variant="topbar"
    >
      <CardContent className="flex flex-col gap-5">
        <div className="w-full bg-[#F2F4F8] h-12 rounded-3xl flex items-center px-3 gap-2">
          <PersonIcon className="" />

          <div className="font-roboto font-medium text-base opacity-60 text-black">
            What do you need?
          </div>
        </div>
      </CardContent>
    </Card>
  );
});

Topbar.displayName = "Topbar";

export default Topbar;
