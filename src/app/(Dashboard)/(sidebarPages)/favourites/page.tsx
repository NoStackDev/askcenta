import { fetchBookmarksAction } from "@/actions";
import { Notebook_icon } from "@/components/icons";
import { RequestContainer } from "@/components/request";
import { Card, CardContent } from "@/components/ui/card";
import { RequestType } from "@/types";
import React from "react";

type Props = {};

export default async function SavedRequestPage({}: Props) {
  const bookmarkedUserRequests: { data: RequestType[] } =
    await fetchBookmarksAction();

  return (
    <main className="w-full">
      <Card variant="settings" className="mt-2 md:mt-0">
        <CardContent>
          <h2 className="font-poppins font-semibold text-base text-[#011B39]">
            FAVOURITE REQUESTS
          </h2>
        </CardContent>
      </Card>

      <RequestContainer requests={bookmarkedUserRequests.data.reverse()} />

      {bookmarkedUserRequests.data.length === 0 && (
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
