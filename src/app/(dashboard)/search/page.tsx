import { RequestContainer } from "@/components/request";
import React from "react";
import Searchbar from "./search_bar";
import SearchTopbar from "./search_topbar";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function SearchPage({ searchParams }: Props) {
  const cityId = searchParams.city_id;

  return (
    <main className="w-full mt-10">
      <div className="px-4 md:px-0">
        {/* <Searchbar /> */}
      </div>

      {/* <SearchTopbar cityid={cityId} className="mt-10" /> */}
      {/* <RequestContainer searchparams={searchParams} /> */}
    </main>
  );
}
