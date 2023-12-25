import { RequestContainer } from "@/components/request";
import React from "react";
import Searchbar from "./search_bar";
import SearchTopbar from "./search_topbar";
import { getFeedsActions } from "@/actions";
import { FeedsResponse } from "@/types";
import { SearchIllustration } from "@/components/icons";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function SearchPage({ searchParams }: Props) {
  const cityId = searchParams.city_id;
  const feedres: Promise<FeedsResponse> = getFeedsActions(searchParams);
  const requests = (await feedres).data;

  return (
    <main className="w-full">
      <div className="px-4 pt-10 md:px-0 md:pt-0 bg-linear-bg-gradient bg-[length:100%_70px] md:bg-none bg-no-repeat">
        <Searchbar />
      </div>

      <SearchTopbar cityid={cityId} className="mt-10" />
      <RequestContainer requests={requests} />

      {requests.length === 0 && (
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
