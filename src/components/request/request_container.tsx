import { cn, shuffle } from "@/lib/utils";
import React from "react";
import {
  CitiesResponseType,
  RequestType,
  StateResponseType,
  UserDetailsType,
} from "@/types";
import { RequestCard } from ".";
import { cookies } from "next/headers";

import NewRequestContainerClient from "./new_request_container_client";
import InfiniteScrollRequestContainer from "./infinite_scroll_request_container";
import { fetchCities, fetchStates } from "@/api/location";

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
  const citiesRes: Promise<CitiesResponseType> = fetchCities();
  const statesRes: Promise<StateResponseType> = fetchStates();

  const [cities, states] = await Promise.all([citiesRes, statesRes]);
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
        <NewRequestContainerClient cities={cities.data} states={states.data} />
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
          cities={cities.data}
          states={states.data}
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
          cities={cities.data}
          states={states.data}
        />
      </div>
    </>
  );
}
