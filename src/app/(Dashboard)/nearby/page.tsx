import React from "react";
import NearbyTopbar from "./nearby_topbar";
import NearbyLocation from "./nearby_location";
import { RequestContainer } from "@/components/request";
import { FeedsResponse } from "@/types";
import { getFeedsActions } from "@/actions";
import { Notebook_icon } from "@/components/icons";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function NearbyPage({ searchParams }: Props) {
  const cityId = searchParams.city_id;

  const feedres: Promise<FeedsResponse> = getFeedsActions(searchParams);
  const requests = (await feedres).data;

  return (
    <main className="w-full">
      <NearbyTopbar />
      <NearbyLocation cityid={cityId} className="mt-2 md:mt-4" />
      <RequestContainer requests={requests} />

      {requests.length === 0 && (
        <div className="w-full py-12 md:py-24 flex flex-col items-center justify-center">
          <Notebook_icon />

          <p className="mt-6 font-poppins font-medium text-base text-black">
            Oops! No Request
          </p>
        </div>
      )}
    </main>
  );
}
