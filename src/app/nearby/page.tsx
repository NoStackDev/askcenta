import React from "react";
import NearbyTopbar from "./nearby_topbar";
import NearbyLocation from "./nearby_location";
import { RequestContainer } from "@/components/request";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function NearbyPage({ searchParams }: Props) {
  const cityId = searchParams.city_id;

  return (
    <main className="w-full">
      <NearbyTopbar />
      <NearbyLocation cityid={cityId} className="mt-2 md:mt-4" />
      <RequestContainer searchparams={searchParams} />
    </main>
  );
}
