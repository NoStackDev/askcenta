"use client";

import { getFeedsActions } from "@/actions";
import { useIntersectionObserver, useMediaQuery } from "@/hooks";
import {
  CityType,
  RequestType,
  StateResponseType,
  UserDetailsType,
} from "@/types";
import React from "react";
import RequestCardClient from "./request_card_client";
import { cn, shuffle } from "@/lib/utils";
import { useRequestContext } from "@/context/request_context";
import LoadingDots from "../loading_dots";

type Props = {
  preFetchedRequests: RequestType[];
  user: UserDetailsType["data"] | null;
  nextPageUrl?: string | null;
};

export default function InfiniteScrollRequestContainer({
  preFetchedRequests,
  user,
  nextPageUrl,
}: Props) {
  const [requests, setRequests] = React.useState<RequestType[]>([]);
  const [shuffled, setShuffled] = React.useState<any[]>([]);
  const [nextUrl, setNextUrl] = React.useState<string | null | undefined>(
    nextPageUrl
  );
  const [loading, setLoading] = React.useState(false);
  const container = React.useRef<HTMLDivElement | null>(null);
  const { requestData } = useRequestContext();
  const { isInView } = useIntersectionObserver(container);
  const isSm = useMediaQuery("(min-width: 640px)");

  React.useEffect(() => {
    async function fetchNextPage() {
      try {
        const res = await fetch(nextPageUrl!, {
          method: "OPTIONS",
        });

        if (!res.ok) {
          throw `failed to fetch next page ${nextPageUrl}`;
        }
        const resData = await res.json();
        setRequests([...requests, ...resData.data]);
        setNextUrl(resData.links.next);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    if (isInView && nextUrl) {
      setLoading(true);
      fetchNextPage();
    }
  }, [isInView]);

  React.useEffect(() => {
    if (isSm) {
      setShuffled(
        shuffle([...requestData, ...preFetchedRequests, ...requests])
      );
    }
  }, [isSm, requests, requestData]);

  return (
    <>
      {!isSm &&
        requests.map((request) => {
          return (
            <RequestCardClient
              key={request.id}
              requestData={request}
              user={user}
              cities={cities}
              states={states}
            />
          );
        })}

      {isSm &&
        shuffled.map((request) => {
          return (
            <RequestCardClient
              key={request.id}
              requestData={request}
              user={user}
              cities={cities}
              states={states}
            />
          );
        })}

      <div ref={container}></div>
      {loading && (
        <LoadingDots
          className={cn("absolute left-1/2 -translate-x-1/2 bottom-0")}
        />
      )}
    </>
  );
}
