"use client";

import {
  DeleteIcon,
  EditIcon,
  FlagIcon,
  StarFilledIcon,
} from "@/components/icons";
import ShareIcon from "@/components/icons/share_icon";
import { cn } from "@/lib/utils";
import React from "react";

interface RequestActionsProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function RequestActionsUser({
  className,
  ...props
}: RequestActionsProps) {
  return (
    <div
      className={cn("flex justify-between items-center", className)}
      {...props}
    >
      <div className="flex items-center gap-1 hover:cursor-pointer">
        <DeleteIcon aria-label="Delete" />
        <span className="font-roboto font-normal text-sm text-black opacity-80">
          Delete
        </span>
      </div>

      <div className="flex items-center gap-1 hover:cursor-pointer">
        <EditIcon width="24" height="24" aria-label="edit" />

        <span className="font-roboto font-normal text-sm text-black opacity-90">
          Edit
        </span>
      </div>

      <div className="flex items-center gap-1 hover:cursor-pointer">
        <ShareIcon aria-label="share" />
        <span className="font-roboto font-normal text-sm text-black opacity-90">
          Share
        </span>
      </div>
    </div>
  );
}
