import React from "react";
import NearbyTopbar from "./nearby_topbar";
import NearbyLocation from "./nearby_location";
import { RequestContainer } from "@/components/request";
import { FeedsResponse } from "../../../types";
import { fetchFeed } from "@/api/feeds";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function NearbyPage({ searchParams }: Props) {
  const feedres: Promise<FeedsResponse> =
    searchParams && Object.keys(searchParams).length > 0
      ? fetchFeed(searchParams)
      : fetchFeed();
  const feed = await feedres;
  const cityId = searchParams.city_id;

  return (
    <main className="w-full">
      <NearbyTopbar />
      <NearbyLocation cityid={cityId} className="mt-2 md:mt-4" />
      <RequestContainer requests={feed.data} />
    </main>
  );
}

export const runtime = "edge";
