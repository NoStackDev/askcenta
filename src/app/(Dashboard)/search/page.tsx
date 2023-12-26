import { RequestContainer } from "@/components/request";
import React from "react";
import Searchbar from "./search_bar";
import SearchTopbar from "./search_topbar";
import { fetchBookmarksAction, getFeedsActions } from "@/actions";
import { FeedsResponse, RequestType, UserDetailsType } from "@/types";
import { SearchIllustration } from "@/components/icons";
import { cookies } from "next/headers";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function SearchPage({ searchParams }: Props) {
  const cookie = cookies();
  const user: UserDetailsType["data"] | null = JSON.parse(
    cookie.get("user")?.value || "null"
  );

  const cityId = searchParams.city_id;
  const feedres: Promise<FeedsResponse> = getFeedsActions(searchParams);
  const requests = (await feedres).data;

  let requestsWithBookmarks: RequestType[] = [...requests];

  if (user) {
    try {
      const bookmarkedUserRequests: { data: RequestType[] } =
        await fetchBookmarksAction();
      requestsWithBookmarks = requests.map((request) => {
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
      <div className="px-4 pt-10 md:px-0 md:pt-0 bg-linear-bg-gradient bg-[length:100%_70px] md:bg-none bg-no-repeat">
        <Searchbar />
      </div>

      <SearchTopbar cityid={cityId} className="mt-10" />
      <RequestContainer requests={requestsWithBookmarks} />

      {requestsWithBookmarks.length === 0 && (
        <div className="w-full py-12 md:py-24 flex flex-col items-center justify-center">
          <SearchIllustration />

          <p className="mt-6 font-poppins font-medium text-base text-black">
            No Result Found
          </p>
        </div>
      )}
    </main>
  );
}
