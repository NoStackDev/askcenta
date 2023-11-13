import React from "react";
import CustomTopbar from "./custom_topbar";
import { RequestContainer } from "@/components/request";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function CustomPage({ searchParams }: Props) {
  return (
    <main className="w-full">
      <CustomTopbar searchparams={searchParams} className="mt-2 md:mt-0" />

      <RequestContainer searchparams={searchParams} />
    </main>
  );
}
