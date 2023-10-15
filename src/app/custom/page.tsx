import React from "react";
import CustomTopbar from "./custom_topbar";
import { RequestContainer } from "@/components/request";
import { FeedsResponse } from "../../../types";
import { fetchFeed } from "@/api/feeds";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function CustomPage({ searchParams }: Props) {
  const feedres: Promise<FeedsResponse> =
    searchParams && Object.keys(searchParams).length > 0
      ? fetchFeed(searchParams)
      : fetchFeed();
  const feed = await feedres;

  return (
    <main className="w-full">
      <CustomTopbar searchparams={searchParams} className="mt-2 md:mt-0" />

      <RequestContainer requests={feed.data} />
    </main>
  );
}
