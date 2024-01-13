import { cn, shuffle } from "@/lib/utils";
import React from "react";
import { RequestType, UserDetailsType } from "@/types";
import { RequestCard } from ".";
import { cookies } from "next/headers";

import NewRequestContainerClient from "./new_request_container_client";
import InfiniteScrollRequestContainer from "./infinite_scroll_request_container";

interface RequestContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  searchparams?: { [key: string]: string | string[] | undefined };
  userid?: string;
  pagetype?: "profile";
  requesttype?: "request" | "response" | "userBookmarkedRequest";
  nextPageUrl?: string | null;
  requests: RequestType[];
}

export default async function RequestContainer({
  className,
  searchparams,
  userid,
  requesttype,
  pagetype,
  nextPageUrl,
  requests,
  ...props
}: RequestContainerProps) {
  const cookie = cookies();
  const user: UserDetailsType["data"] | null = JSON.parse(
    cookie.get("user")?.value || "null"
  );
  let shuffledRequests = shuffle<RequestType>(requests);
  return (
    <>
      <div
        className={cn(
          "mx-4 md:mx-0 mt-6 gap-6 sm:hidden relative pb-14",
          className
        )}
        id="request-container"
        {...props}
      >
        <NewRequestContainerClient />
        {requests.map((request) => {
          return (
            !request.category.toLowerCase().includes("hookup") && (
              <RequestCard requestData={request} key={request.id} user={user} />
            )
          );
        })}
        <InfiniteScrollRequestContainer
          preFetchedRequests={requests}
          nextPageUrl={nextPageUrl}
          user={user}
        />
      </div>
      <div
        className={cn(
          "mx-4 md:mx-0 mt-6 sm:columns-2 gap-6 hidden sm:block relative pb-20",
          className
        )}
        id="request-container-md"
        {...props}
      >
        <InfiniteScrollRequestContainer
          preFetchedRequests={requests}
          nextPageUrl={nextPageUrl}
          user={user}
        />
      </div>
    </>
  );
}
