import { RequestContainer } from "@/components/request";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

type Props = {};

export default function SavedRequestPage({}: Props) {
  return (
    <main className="w-full">
      <Card variant="settings" className="mt-2 md:mt-0">
        <CardContent>
          <h2 className="font-poppins font-semibold text-base text-[#011B39]">
            SAVED REQUESTS
          </h2>
        </CardContent>
      </Card>

      <RequestContainer requesttype="userBookmarkedRequest" />
    </main>
  );
}
