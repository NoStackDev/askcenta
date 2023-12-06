import { cn, shuffle } from "@/lib/utils";
import React from "react";
import { FeedsResponse, RequestType, UserDetailsType } from "@/types";
import Link from "next/link";
import { RequestCard } from ".";
import { fetchFeed } from "@/api/feeds";
import { Notebook_icon, SearchIllustration } from "../icons";
import { cookies, headers } from "next/headers";
import {
  fetchBookmarksAction,
  getAllRequestsByUser,
  getUserDetailsAction,
} from "@/actions";

interface RequestContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  searchparams?: { [key: string]: string | string[] | undefined };
  userid?: string;
  pagetype?: "profile";
  requesttype?: "request" | "response";
}

async function getfeed(searchparams?: {
  [key: string]: string | string[] | undefined;
}) {
  const feedres: Promise<FeedsResponse> =
    searchparams && Object.keys(searchparams).length > 0
      ? fetchFeed(searchparams)
      : fetchFeed();
  return (await feedres).data;
}

async function getUserRequests(requesttype?: "request" | "response") {
  const res = getUserDetailsAction();
  if (requesttype === "request") {
    return (await res).data.request_made;
  }
  if (requesttype === "response") {
    return (await res).data.requests_responded;
  }
  return (await res).data.request_made;
}

function fetchData(
  searchparams?: {
    [key: string]: string | string[] | undefined;
  },
  pagetype?: "profile",
  requesttype?: "request" | "response"
) {
  if (pagetype && pagetype === "profile") {
    if (requesttype === "request" || requesttype === "response") {
      return getUserRequests(requesttype);
    }
  }

  return getfeed(searchparams);
}

export default async function RequestContainer({
  className,
  searchparams,
  userid,
  requesttype,
  pagetype,
  ...props
}: RequestContainerProps) {
  const cookie = cookies();
  const headersList = headers();
  const pathname = headersList.get("x-pathname");

  const feed = await fetchData(searchparams, pagetype, requesttype);
  let shuffledRequests = shuffle<typeof feed>(feed);
  const userIsAuthorized = cookie.get("Authorization")?.value || null;

  if (userIsAuthorized) {
    try {
      const userBookmarkRes: Promise<{ data: RequestType[] }> =
        fetchBookmarksAction();
      const userBookmarkJson = await userBookmarkRes;
      shuffledRequests = shuffledRequests.map((req) => {
        const foundBookmark = userBookmarkJson.data.find(
          (ele) => req.id === ele.id
        );

        if (foundBookmark) return foundBookmark;
        return req;
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      {feed.length > 0 && (
        <>
          <div
            className={cn("mx-4 md:mx-0 mt-6 gap-6 sm:hidden", className)}
            {...props}
          >
            {feed.map((request: RequestType) => {
              return <RequestCard requestData={request} key={request.id} />;
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

              return <RequestCard requestData={request} key={request.id} />;
            })}
          </div>
        </>
      )}

      {feed.length === 0 && (
        <div className="w-full py-12 md:py-24 flex flex-col items-center justify-center">
          {/* no requests illustration for 'discover' 'nearby' 'custom' 'saved' pages  */}
          {(pathname === "/" ||
            pathname === "/nearby" ||
            pathname === "/custom" ||
            pathname === "/saved" ||
            pathname?.split("/")[1] === "profile") && <Notebook_icon />}

          {/* no requests illustration for 'search' page */}
          {pathname === "/search" && <SearchIllustration />}

          <p className="mt-6 font-poppins font-medium text-base text-black">
            {(pathname === "/" ||
              pathname === "/nearby" ||
              pathname === "/custom" ||
              pathname === "/saved" ||
              pathname?.split("/")[1] === "profile") &&
              "Oops! No Request"}
            {pathname === "/search" && "No Result Found"}
          </p>
        </div>
      )}
    </>
  );
}
