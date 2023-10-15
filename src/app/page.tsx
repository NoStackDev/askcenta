import Categories from "@/components/categories";
import Topbar from "@/components/topbar";
import { Button } from "@/components/ui/button";
import DiscoverBar from "@/components/discover_bar";
import { RequestContainer, RequestFormWrapper } from "@/components/request";
import { FeedsResponse } from "../../types";
import { fetchFeed } from "@/api/feeds";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Home({ searchParams }: Props) {
  const feedres: Promise<FeedsResponse> =
    searchParams && Object.keys(searchParams).length > 0
      ? fetchFeed(searchParams)
      : fetchFeed();
  const feed = await feedres;
  const subCategoryId = searchParams.category_group_id;

  return (
    <main className="w-full">
      <Topbar className="mt-2 md:mt-0" subcategoryid={subCategoryId} />

      {!subCategoryId && <Categories className="mt-2 md:mt-4" />}

      {!subCategoryId && <DiscoverBar />}

      <RequestContainer requests={feed.data} />

      <RequestFormWrapper>
        <Button className="md:hidden" variant="place_a_request">
          Place a Request
        </Button>
      </RequestFormWrapper>
    </main>
  );
}
