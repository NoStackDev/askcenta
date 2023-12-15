import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

interface RespondToRequestProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function RespondToRequest({
  className,
  ...props
}: RespondToRequestProps) {
  return (
    <div
      className={cn(
        "bg-white py-6 flex flex-col justify-center items-center gap-4",
        className
      )}
      {...props}
    >
      <Button className="mx-4 sm:mx-0 w-4/5 sm:w-fit sm:px-[108px] py-[13px] font-roboto font-medium text-base text-white bg-request-gradient rounded-3xl">
        Respond to Request
      </Button>

      <p className="font-roboto font-normal text-xs text-black opacity-60">
        Respond With an Offer Relevant to What is Requested
      </p>
    </div>
  );
}
