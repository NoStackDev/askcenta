import Categories from "@/components/categories";
import RequestsContainer from "@/components/requests_container";
import Topbar from "@/components/topbar";
import { FeedsResponse } from "../../types";

async function fetchFeed() {
  const res = await fetch("https://www.askcenta.ng/api/feeds", {
    method: "OPTIONS",
    next: {
      revalidate: 0,
    },
  });

  return res.json();
}

export default async function Home() {
  const feed: FeedsResponse = await fetchFeed();

  return (
    <main className="w-full">
      <Topbar className="mt-2 md:mt-0" />
      <Categories className="mt-2 md:mt-4" />

      <RequestsContainer requests={feed.data} />
    </main>
  );
}
