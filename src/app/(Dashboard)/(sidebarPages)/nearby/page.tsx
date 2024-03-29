import React from "react";
import NearbyTopbar from "./nearby_topbar";
import NearbyLocation from "./nearby_location";
import { RequestContainer } from "@/components/request";
import { FeedsResponse, RequestType, UserDetailsType } from "@/types";
import { fetchBookmarksAction, getFeedsActions } from "@/actions";
import { Notebook_icon } from "@/components/icons";
import { cookies } from "next/headers";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function NearbyPage({ searchParams }: Props) {
  const cookie = cookies();
  const user: UserDetailsType["data"] | null = JSON.parse(
    cookie.get("user")?.value || "null"
  );
  const cityId = searchParams.city_id;

  const feeds: FeedsResponse = await getFeedsActions(searchParams);
  let bookmarkedRequests: RequestType[] = [];
  let requestsWithBookmarks: RequestType[] = [...feeds.data];

  if (user) {
    try {
      const bookmarkedUserRequests: { data: RequestType[] } =
        await fetchBookmarksAction();
      bookmarkedRequests = bookmarkedUserRequests.data;
      requestsWithBookmarks = feeds.data.map((request) => {
        const matchedBookmark = bookmarkedUserRequests.data.find(
          (bookmarkedRequest) => bookmarkedRequest.id === request.id
        );
        if (matchedBookmark) {
          return matchedBookmark;
        }
        return request;
      });
    } catch (err) {
      console.log(`failed trying to fetch bookmarks for user `, err);
    }
  }

  return (
    <main className="w-full">
      <NearbyTopbar />
      <NearbyLocation cityid={cityId} className="mt-2 md:mt-4" />
      <RequestContainer
        requests={requestsWithBookmarks}
        nextPageUrl={feeds.links.next}
        bookmarkedRequests={bookmarkedRequests}
      />

      {requestsWithBookmarks.length === 0 && (
        <div className="w-full py-12 md:py-24 flex flex-col items-center justify-center">
          <Notebook_icon />

          <p className="mt-6 font-poppins font-medium text-base text-black">
            Oops! No Request
          </p>
        </div>
      )}
    </main>
  );
}
