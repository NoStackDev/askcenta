import React from "react";
import { Card, CardContent } from "./ui/card";
import { cn } from "@/lib/utils";
import { LocationIcon, PersonIcon } from "./icons";
import { Button } from "./ui/button";

const Topbar = React.forwardRef<
  React.ElementRef<typeof Card>,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, forwardRef) => {
  return (
    <Card
      ref={forwardRef}
      className={cn("", className)}
      {...props}
      variant="card1"
    >
      <CardContent className="flex flex-col gap-5">
        <div className="w-full bg-[#F2F4F8] h-12 rounded-3xl flex items-center px-3 gap-2">
          <PersonIcon className="" />

          <div className="font-roboto font-medium text-base opacity-60 text-black">
            What do you need?
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <LocationIcon className="mx-2" aria-label="location" />

            <span className="font-roboto font-normal text-xs text-black opacity-60">
              Nationwide
            </span>
          </div>

          <Button variant="request_outlined">Post request</Button>
        </div>
      </CardContent>
    </Card>
  );
});

Topbar.displayName = "Topbar";

export default Topbar;