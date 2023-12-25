import { cn, shuffle } from "@/lib/utils";
import React from "react";
import { FeedsResponse, RequestType, UserDetailsType } from "@/types";
import { RequestCard } from ".";
import { Notebook_icon, SearchIllustration } from "../icons";
import { cookies, headers } from "next/headers";
import {
  fetchBookmarksAction,
  getAllRequestsByUser,
  getFeedsActions,
  getUserDetailsAction,
} from "@/actions";

interface RequestContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  searchparams?: { [key: string]: string | string[] | undefined };
  userid?: string;
  pagetype?: "profile";
  requesttype?: "request" | "response" | "userBookmarkedRequest";
  requests: RequestType[];
}

export default async function RequestContainer({
  className,
  searchparams,
  userid,
  requesttype,
  pagetype,
  requests,
  ...props
}: RequestContainerProps) {
  let shuffledRequests = shuffle<RequestType>(requests);

  return (
    <>
      <div
        className={cn("mx-4 md:mx-0 mt-6 gap-6 sm:hidden", className)}
        {...props}
      >
        {requests.map((request) => {
          return (
            !request.category.toLowerCase().includes("hookup") && (
              <RequestCard requestData={request} key={request.id} />
            )
          );
        })}
      </div>
      <div
        className={cn(
          "mx-4 md:mx-0 mt-6 sm:columns-2 gap-6 hidden sm:block",
          className
        )}
        {...props}
      >
        {shuffledRequests.map((request, index) => {
          return (
            !request.category.toLowerCase().includes("hookup") && (
              <RequestCard requestData={request} key={request.id} />
            )
          );
        })}
      </div>
    </>
  );
}
