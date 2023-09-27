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

      <RequestsContainer requests={feed.data} />
    </main>
  );
}
