import React from "react";
import CustomTopbar from "./custom_topbar";
import { RequestContainer } from "@/components/request";
import { FeedsResponse } from "@/types";
import { getFeedsActions } from "@/actions";
import { Notebook_icon } from "@/components/icons";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function CustomPage({ searchParams }: Props) {
  const feedres: Promise<FeedsResponse> = getFeedsActions(searchParams);
  const requests = (await feedres).data;
  return (
    <main className="w-full">
      <CustomTopbar searchparams={searchParams} className="mt-2 md:mt-0" />

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
