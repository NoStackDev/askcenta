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
  lastPage?: number | undefined;
  cities: CityType[];
  states: StateResponseType["data"];
};

export default function InfiniteScrollRequestContainer({
  preFetchedRequests,
  user,
  lastPage,
  cities,
  states,
}: Props) {
  const [requests, setRequests] = React.useState<RequestType[]>([]);
  const [shuffled, setShuffled] = React.useState<any[]>([]);
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [loading, setLoading] = React.useState(false);
  const container = React.useRef<HTMLDivElement | null>(null);
  const { requestData } = useRequestContext();
  const { isInView } = useIntersectionObserver(container);
  const isSm = useMediaQuery("(min-width: 640px)");

  React.useEffect(() => {
    async function fetchNextPage() {
      try {
        const res = await getFeedsActions({ page: `${currentPage + 1}` });
        setRequests([...requests, ...res.data]);
        setCurrentPage(currentPage + 1);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    if (isInView && lastPage && currentPage < lastPage) {
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
