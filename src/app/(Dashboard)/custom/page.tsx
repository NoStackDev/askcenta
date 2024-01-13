import React from "react";
import CustomTopbar from "./custom_topbar";
import { RequestContainer } from "@/components/request";
import { FeedsResponse, RequestType, UserDetailsType } from "@/types";
import { fetchBookmarksAction, getFeedsActions } from "@/actions";
import { Notebook_icon } from "@/components/icons";
import { cookies } from "next/headers";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function CustomPage({ searchParams }: Props) {
  const cookie = cookies();
  const user: UserDetailsType["data"] | null = JSON.parse(
    cookie.get("user")?.value || "null"
  );
  const feeds: FeedsResponse = await getFeedsActions(searchParams);
  let requestsWithBookmarks: RequestType[] = [...feeds.data];

  if (user) {
    try {
      const bookmarkedUserRequests: { data: RequestType[] } =
        await fetchBookmarksAction();
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
      <CustomTopbar searchparams={searchParams} className="mt-2 md:mt-0" />

      <RequestContainer
        requests={requestsWithBookmarks}
        nextPageUrl={feeds.links.next}
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
