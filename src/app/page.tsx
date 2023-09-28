import Categories from "@/components/categories";
import RequestsContainer from "@/components/requests_container";
import Topbar from "@/components/topbar";
import { FeedsResponse } from "../../types";
import { Button } from "@/components/ui/button";
import DiscoverBar from "@/components/discover_bar";

async function fetchFeed() {
  const res = await fetch("https://www.askcenta.ng/api/feeds", {
    method: "OPTIONS",
    next: {
      revalidate: 0,
    },
  });

  if (!res.ok) throw new Error("failed to fetch feeds");

  return res.json();
}

export default async function Home() {
  const feedres: Promise<FeedsResponse> = fetchFeed();
  const feed = await feedres;

  return (
    <main className="w-full">
      <Topbar className="mt-2 md:mt-0" />

      <Categories className="mt-2 md:mt-4" />

      <DiscoverBar />

      <RequestsContainer requests={feed.data} />

      <Button className="md:hidden" variant="place_a_request">
        Place a Request
      </Button>
    </main>
  );
}
