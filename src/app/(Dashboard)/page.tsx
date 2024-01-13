import Categories from "@/components/categories";
import Topbar from "@/components/topbar";
import DiscoverBar from "@/components/discover_bar";
import { RequestContainer } from "@/components/request";
import DiscoverPlaceRequestBtn from "@/components/request/discover_place_request_btn";
import TopbarLocationFilterWrapper from "@/components/topbar/topbar_location_filter_wrapper";
import { cookies } from "next/headers";
import { FeedsResponse, RequestType, UserDetailsType } from "@/types";
import { fetchBookmarksAction, getFeedsActions } from "@/actions";
import { Notebook_icon } from "@/components/icons";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Home({ searchParams }: Props) {
  const subCategoryId = searchParams.category_group_id;
  const cityId = searchParams.city_id;
  const cookie = cookies();
  const user: UserDetailsType["data"] | null = JSON.parse(
    cookie.get("user")?.value || "null"
  );

  const feedres: Promise<FeedsResponse> = getFeedsActions(searchParams);
  const feeds = await feedres;
  const requests = feeds.data;
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
      <Topbar className="mt-2 md:mt-0" subcategoryid={subCategoryId} />

      {subCategoryId && (
        <TopbarLocationFilterWrapper className="mt-2 md:mt-4" cityid={cityId} />
      )}

      {!subCategoryId && <Categories className="mt-6" />}

      {!subCategoryId && <DiscoverBar />}

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

      <DiscoverPlaceRequestBtn user={user} />
    </main>
  );
}
