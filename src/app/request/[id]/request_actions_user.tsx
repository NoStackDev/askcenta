import { EditIcon } from "@/components/icons";
import ShareIcon from "@/components/icons/share_icon";
import { RequestFormWrapper } from "@/components/request";
import Share from "@/components/share";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RequestDetailType } from "@/types";
import React from "react";
import RequestDeleteBtn from "./request_delete_btn";

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
      <RequestDeleteBtn requestid={request.request.id} />

      <RequestFormWrapper prevRequestData={request}>
        <Button className="flex items-center gap-1 hover:cursor-pointer">
          <EditIcon width="24" height="24" aria-label="edit" />

          <span className="font-roboto font-normal text-sm text-black opacity-90">
            Edit
          </span>
        </Button>
      </RequestFormWrapper>

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
