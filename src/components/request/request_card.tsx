import React from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import Image from "next/image";
import { CommentIcon, LocationOnIcon, ScheduleIcon } from "../icons";
import { cn, month } from "@/lib/utils";
import { RequestType } from "@/types";
import { RequestBookmark, RespondToRequestBtn } from ".";
import { cookies } from "next/headers";
import { ResponseFormWrapper } from "../response";
import CardTitleDynamic from "./card_title_dynamic";

interface RequestCardProps extends React.HTMLAttributes<HTMLDivElement> {
  requestData: RequestType;
}

export default function RequestCard({
  className,
  requestData,
  ...props
}: RequestCardProps) {
  const cookie = cookies();
  const userId = cookie.get("userId")?.value;
  const date = new Date(requestData.created_at);
  return (
    <Card
      variant="request"
      className={cn(
        "w-full rounded-2xl break-inside-avoid mb-6 overflow-clip",
        className
      )}
    >
      <CardContent>
        {requestData.image_url && (
          <Image
            width={358}
            height={344}
            alt={requestData.title}
            src={`https://${requestData.image_url}`}
            className="w-full max-h-[344px] object-cover"
          />
        )}

        {requestData.image_url && (
          <CardTitle
            className={cn(
              "px-3 pt-[9px] pb-4 text-center font-roboto font-semibold text-lg text-[#18212D] leading-[30px]",
              !requestData.image_url &&
                `min-h-[223px] flex items-center justify-center py-6 text-[22px] leading-[35px] no-img-request-card`
            )}
          >
            {requestData.title}
          </CardTitle>
        )}

        {!requestData.image_url && (
          <CardTitleDynamic
            className={cn(
              "px-3 pt-[9px] pb-4 text-center font-roboto font-semibold text-lg text-[#18212D] leading-[30px]",
              `min-h-[223px] flex items-center justify-center py-6 text-[22px] leading-[35px] no-img-request-card`
            )}
          >
            {requestData.title}
          </CardTitleDynamic>
        )}

        <hr
          className="border-t border-[#EDECF0] border-r-4 bg-none"
          role="separator"
        />

        <div className="w-full px-3 pt-4 pb-5 flex flex-col gap-4">
          <div
            className={cn(
              "flex justify-between items-center"
              // userId === requestData.user_id.toString() && "pb-6"
            )}
          >
            <div className="flex items-center gap-4">
              <div className="flex justify-center items-center gap-1">
                <CommentIcon />
                <span className="font-roboto font-normal text-sm text-black">
                  {requestData.num_of_responses}
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
                  {requestData.location}
                </span>
              </div>
            </div>

            {(!userId || userId !== requestData.user_id.toString()) && (
              <RequestBookmark requestData={requestData} />
            )}
          </div>

          {(!userId || userId !== requestData.user_id.toString()) && (
            <ResponseFormWrapper requestid={requestData.id.toString()}>
              <RespondToRequestBtn className="" />
            </ResponseFormWrapper>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
