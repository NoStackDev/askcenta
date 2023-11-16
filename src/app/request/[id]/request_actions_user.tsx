import { DeleteIcon, EditIcon } from "@/components/icons";
import ShareIcon from "@/components/icons/share_icon";
import { RequestFormWrapper } from "@/components/request";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RequestDetailType } from "@/types";
import React from "react";

interface RequestActionsProps extends React.HTMLAttributes<HTMLDivElement> {
  request: RequestDetailType;
}

export default function RequestActionsUser({
  className,
  request,
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

      <RequestFormWrapper prevRequestData={request}>
        <Button className="flex items-center gap-1 hover:cursor-pointer">
          <EditIcon width="24" height="24" aria-label="edit" />

          <span className="font-roboto font-normal text-sm text-black opacity-90">
            Edit
          </span>
        </Button>
      </RequestFormWrapper>

      <div className="flex items-center gap-1 hover:cursor-pointer">
        <ShareIcon aria-label="share" />
        <span className="font-roboto font-normal text-sm text-black opacity-90">
          Share
        </span>
      </div>
    </div>
  );
}
