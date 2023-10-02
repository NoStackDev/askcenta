import React from "react";
import { Card, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";
import { KeyboardBackspaceIcon, LocationIcon, PersonIcon } from "../icons";
import { Button } from "../ui/button";
import Link from "next/link";
import TopbarSelect from "./topbar_select";

interface TopbarProps extends React.HTMLAttributes<HTMLDivElement> {
  subcategoryid: string | string[] | undefined;
}
const Topbar = React.forwardRef<React.ElementRef<typeof Card>, TopbarProps>(
  ({ className, subcategoryid, ...props }, forwardRef) => {
    return (
      <>
        {!subcategoryid && (
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
        )}

        {subcategoryid && (
          <Card variant="card1">
            <Link href="/" className="flex w-fit h-fit">
              <KeyboardBackspaceIcon aria-label="back" />
            </Link>

            <TopbarSelect subcategoryid={subcategoryid}></TopbarSelect>
          </Card>
        )}
      </>
    );
  }
);

Topbar.displayName = "Topbar";

export default Topbar;
