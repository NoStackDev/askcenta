import { RequestContainer } from "@/components/request";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { FeedsResponse } from "../../../types";
import { fetchFeed } from "@/api/feeds";

type Props = {};

export default async function SavedRequestPage({}: Props) {
  const feedres: Promise<FeedsResponse> = fetchFeed();
  const feed = await feedres;

  return (
    <main className="w-full">
      <Card variant="settings" className="mt-2 md:mt-0">
        <CardContent>
          <h2 className="font-poppins font-semibold text-base text-[#011B39]">
            SAVED REQUESTS
          </h2>
        </CardContent>
      </Card>

      <RequestContainer requests={feed.data} />
    </main>
  );
}

export const runtime = "edge";
