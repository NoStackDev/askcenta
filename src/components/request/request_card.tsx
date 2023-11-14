import React from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import Image from "next/image";
import { CommentIcon, LocationOnIcon, ScheduleIcon } from "../icons";
import { cn, month } from "@/lib/utils";
import { RequestType } from "@/types";
import { RequestBookmark, RespondToRequestBtn } from ".";
import { cookies } from "next/headers";

interface RequestCardProps extends React.HTMLAttributes<HTMLDivElement> {
  request: RequestType;
}

export default function RequestCard({
  className,
  request,
  ...props
}: RequestCardProps) {
  const cookie = cookies();
  const userId = cookie.get("userId")?.value;
  const date = new Date(request.created_at);

  return (
    <Card
      variant="request"
      className={cn("w-full h-fit break-inside-avoid mb-6", className)}
    >
      <CardContent>
        {request.image_url && (
          <Image
            width={358}
            height={344}
            alt={request.title}
            src={`https://${request.image_url}`}
            className="rounded-t-lg w-full h-auto max-h-[392px]"
          />
        )}

        <CardTitle
          className={cn(
            "mb-4 mx-3 pt-[14px] text-center font-roboto font-semibold text-lg text-[#18212D]",
            !request.image_url && "py-6"
          )}
        >
          {request.title}
        </CardTitle>

        <hr className="mt-3 mb-5 border-t border-[#EDECF0] border-r-4 bg-none mx-[2px]" />

        <div className="w-full px-3">
          <div
            className={cn(
              "flex justify-between items-center",
              userId === request.user_id.toString() && "pb-3"
            )}
          >
            <div className="flex items-center gap-4">
              <div className="flex justify-center items-center gap-1">
                <CommentIcon />
                <span className="font-roboto font-normal text-sm text-black">
                  {request.num_of_responses}
                </span>
              </div>

              <div className="flex justify-center items-center gap-1">
                <ScheduleIcon aria-label="date" />
                <span className="font-roboto font-normal text-xs text-[#5E5D7F]">
                  {date.getDate()} {month(date.getMonth())}
                </span>
              </div>

              <div className="flex justify-center items-center gap-1">
                <LocationOnIcon aria-label="locaion" />
                <span className="font-roboto font-normal text-xs text-[#5E5D7F]">
                  {request.location}
                </span>
              </div>
            </div>

            {(!userId || userId !== request.user_id.toString()) && (
              <RequestBookmark />
            )}
          </div>

          {(!userId || userId !== request.user_id.toString()) && (
            <RespondToRequestBtn className="mt-5 mb-3" />
          )}
        </div>
      </CardContent>
    </Card>
  );
}
