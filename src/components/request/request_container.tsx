import { cn, shuffle } from "@/lib/utils";
import React from "react";
import { FeedsResponse } from "../../../types";
import Link from "next/link";
import { RequestCard } from ".";
// import { fetchFeed } from "@/helpers/feeds";

async function fetchFeed(searchParams?: {
  [key: string]: string | string[] | undefined;
}) {
  if (searchParams) {
    const params = Object.keys(searchParams).reduce(
      (previousValue, currentValue) => {
        return (previousValue += `${currentValue}=${searchParams[currentValue]}&`);
      },
      ""
    );

    const res = await fetch(
      `https://www.askcenta.ng/api/feeds?${params.slice(0, params.length - 1)}`,
      {
        method: "OPTIONS",
        next: {
          revalidate: 0,
        },
      }
    );

    if (!res.ok)
      throw new Error(
        `failed to fetch feeds from https://www.askcenta.ng/api/feeds?${params.slice(
          0,
          params.length - 1
        )}}`
      );

    return res.json();
  }

  const res = await fetch("https://www.askcenta.ng/api/feeds", {
    method: "OPTIONS",
    next: {
      revalidate: 0,
    },
  });

  if (!res.ok)
    throw new Error(
      "failed to fetch feeds from https://www.askcenta.ng/api/feeds"
    );

  return res.json();
}

interface RequestContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  searchparams?: { [key: string]: string | string[] | undefined };
}

export default async function RequestContainer({
  className,
  searchparams,
  ...props
}: RequestContainerProps) {
  const feedres: Promise<FeedsResponse> =
    searchparams && Object.keys(searchparams).length > 0
      ? fetchFeed(searchparams)
      : fetchFeed();
  const feed = await feedres;
  const shuffledRequests = shuffle(feed.data);

  return (
    <>
      <div
        className={cn("mx-4 md:mx-0 mt-6 gap-6 sm:hidden", className)}
        {...props}
      >
        {feed.data.map((request) => {
          return (
            <Link href={`/request/${request.id}`} key={request.id}>
              <RequestCard request={request} />
            </Link>
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
          const date = new Date(request.created_at);

          return (
            <Link href={`/request/${request.id}`} key={request.id}>
              <RequestCard request={request} />
            </Link>
          );
        })}
      </div>
    </>
  );
}
