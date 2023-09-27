"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { RequestType } from "../../types";
import { Card, CardContent, CardTitle } from "./ui/card";
import Image from "next/image";
import {
  CommentIcon,
  LocationIcon,
  LocationOnIcon,
  ScheduleIcon,
  StarFilledIcon,
} from "./icons";
import { Button } from "./ui/button";

export const month = (index: number) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return months[index];
};

interface RequestsContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  requests: RequestType[];
}

const RequestsContainer = React.forwardRef<
  HTMLDivElement,
  RequestsContainerProps
>(async ({ className, ...props }, forwardRef) => {
  return (
    <div ref={forwardRef} className={cn("", className)} {...props}>
      {props.requests.map((request) => {
        const date = new Date(request.created_at);

        return (
          <Card variant="request" className="w-[358px]" key={request.id}>
            <CardContent>
              {request.image_url && (
                <Image
                  width={358}
                  height={344}
                  alt={request.title}
                  src={`https://${request.image_url}`}
                  className="rounded-t-lg"
                />
              )}

              <CardTitle
                className={cn(
                  "mt-4 mx-3 text-center font-roboto font-semibold text-lg text-[#18212D]",
                  !request.image_url && "pt-4"
                )}
              >
                {request.title}
              </CardTitle>

              <hr className="mt-3 mb-5 border-t border-[#EDECF0] border-r-4 bg-none mx-[2px]" />

              <div className="w-full px-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="flex justify-center items-center gap-1">
                      <CommentIcon />
                      <span className="font-roboto font-normal text-sm text-black">
                        {request.num_of_responses}
                      </span>
                    </div>

                    <div className="flex justify-center items-center gap-1">
                      <ScheduleIcon />
                      <span className="font-roboto font-normal text-xs text-[#5E5D7F]">
                        {date.getDate()} {month(date.getMonth())}
                      </span>
                    </div>

                    <div className="flex justify-center items-center gap-1">
                      <LocationOnIcon />
                      <span className="font-roboto font-normal text-xs text-[#5E5D7F]">
                        {date.getDate()} {month(date.getMonth())}
                      </span>
                    </div>
                  </div>

                  <StarFilledIcon />
                </div>

                <Button variant="request_card_outlined" className="mt-5 mb-3">
                  Respond to Request
                </Button>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
});

RequestsContainer.displayName = "RequestsContainer";

export default RequestsContainer;
