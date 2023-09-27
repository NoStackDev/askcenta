'use client'

import { cn } from "@/lib/utils";
import React from "react";
import { RequestType } from "../../types";
import { Card, CardContent, CardTitle } from "./ui/card";
import Image from "next/image";
import { CommentIcon } from "./icons";

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

              <hr className="mt-3 mb-5" />

              <div className="flex justify-between items-center mx-3">
                <div>
                  <div className="flex justify-center items-center gap-1">
                    <CommentIcon />
                    <span className="font-roboto font-normal text-sm text-black">
                      {request.num_of_responses}
                    </span>
                  </div>
                </div>

                <div></div>
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
