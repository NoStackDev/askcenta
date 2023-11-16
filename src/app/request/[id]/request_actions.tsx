"use client";

import { FlagIcon, StarFilledIcon } from "@/components/icons";
import ShareIcon from "@/components/icons/share_icon";
import Share from "@/components/share";
import { cn } from "@/lib/utils";
import React from "react";

interface RequestActionsProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function RequestActions({
  className,
  ...props
}: RequestActionsProps) {
  return (
    <div
      className={cn("flex justify-between items-center", className)}
      {...props}
    >
      <div className="flex items-center gap-1 hover:cursor-pointer">
        <FlagIcon aria-label="report" />
        <span className="font-roboto font-normal text-sm text-black opacity-80">
          Report
        </span>
      </div>

      <div className="flex items-center gap-1 hover:cursor-pointer">
        <StarFilledIcon width="24" height="24" aria-label="save" />

        <span className="font-roboto font-normal text-sm text-black opacity-90">
          Save
        </span>
      </div>

      <Share>
        <div className="flex items-center gap-1 hover:cursor-pointer">
          <ShareIcon aria-label="share" />
          <span className="font-roboto font-normal text-sm text-black opacity-90">
            Share
          </span>
        </div>
      </Share>
    </div>
  );
}
