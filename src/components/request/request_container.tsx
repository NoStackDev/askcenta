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
}

async function getfeed(searchparams?: {
  [key: string]: string | string[] | undefined;
}) {
  const feedres: Promise<FeedsResponse> =
    searchparams && Object.keys(searchparams).length > 0
      ? getFeedsActions(searchparams)
      : getFeedsActions();
  return (await feedres).data;
}

async function getUserRequests(
  searchparams?: {
    [key: string]: string | string[] | undefined;
  },
  requesttype?: "request" | "response"
) {
  const res = searchparams?.user
    ? getUserDetailsAction(searchparams.user.toString())
    : getUserDetailsAction();
  if (requesttype === "request") {
    return (await res).data.request_made;
  }
  if (requesttype === "response") {
    return (await res).data.requests_responded;
  }
  return (await res).data.request_made;
}

async function getUserBookmarkedRequest() {
  return (await fetchBookmarksAction()).data;
}

function fetchData(
  searchparams?: {
    [key: string]: string | string[] | undefined;
  },
  pagetype?: "profile",
  requesttype?: "request" | "response" | "userBookmarkedRequest"
) {
  if (pagetype && pagetype === "profile") {
    if (requesttype === "request" || requesttype === "response") {
      return getUserRequests(searchparams, requesttype);
    }
  }
  if (requesttype === "userBookmarkedRequest") {
    return getUserBookmarkedRequest();
  }
  return getfeed(searchparams);
}

// request runs 4 times!!! first two return response with
// bookmarks is user has bookmarks
// last two return empty array even when first two returned
// bookmarks, using this as cache, a very crude way around
// the problem :(
let bookmarkedRequestsCache: RequestType[] = [];

export default async function RequestContainer({
  className,
  searchparams,
  userid,
  requesttype,
  pagetype,
  ...props
}: RequestContainerProps) {
  const headersList = headers();
  const pathname = headersList.get("x-pathname");
  const cookie = cookies();
  const userIsAuthorized = cookie.get("Authorization")?.value || null;
  const user: UserDetailsType["data"] | null = JSON.parse(
    cookie.get("user")?.value || "null"
  );

  let feed: RequestType[] = await fetchData(
    searchparams,
    pagetype,
    requesttype
  );
  let shuffledRequests = shuffle<RequestType>(feed);

  if (userIsAuthorized && requesttype !== "userBookmarkedRequest") {
    try {
      const bookmarkedUserRequests = await fetchBookmarksAction();
      if (bookmarkedUserRequests.data.length > 0) {
        bookmarkedRequestsCache = bookmarkedUserRequests.data;
      }
      feed = feed.map((request) => {
        const matchedBookmark = bookmarkedRequestsCache.find(
          (bookmarkedRequest) => bookmarkedRequest.id === request.id
        );
        if (matchedBookmark) {
          return matchedBookmark;
        }
        return request;
      });
    } catch (err) {
      console.log(
        `failed trying to fetch bookmarks for user with user id ${
          user && user.id
        }`,
        err
      );
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
      )}

      {feed.length === 0 && (
        <div className="w-full py-12 md:py-24 flex flex-col items-center justify-center">
          {/* no requests illustration for 'discover' 'nearby' 'custom' 'favourites' pages  */}
          {(pathname === "/" ||
            pathname === "/nearby" ||
            pathname === "/custom" ||
            pathname === "/favourites" ||
            pathname?.split("/")[1] === "profile") && <Notebook_icon />}

          {/* no requests illustration for 'search' page */}
          {pathname === "/search" && <SearchIllustration />}

          <p className="mt-6 font-poppins font-medium text-base text-black">
            {(pathname === "/" ||
              pathname === "/nearby" ||
              pathname === "/custom" ||
              pathname === "/favourites" ||
              pathname?.split("/")[1] === "profile") &&
              "Oops! No Request"}
            {pathname === "/search" && "No Result Found"}
          </p>
        </div>
      )}
    </>
  );
}
