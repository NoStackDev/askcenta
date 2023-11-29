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
    <main className="w-full">
      <div className="px-4 pt-10 md:px-0 md:pt-0 bg-linear-bg-gradient bg-[length:100%_70px] md:bg-none bg-no-repeat">
        <Searchbar />
      </div>

      <SearchTopbar cityid={cityId} className="mt-10" />
      <RequestContainer searchparams={searchParams} />
    </main>
  );
}
