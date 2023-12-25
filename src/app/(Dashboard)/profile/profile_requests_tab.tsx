import { RequestContainer } from "@/components/request";
import { Card } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { TabsContentProps } from "@radix-ui/react-tabs";
import React from "react";
import ProfilePlaceRequest from "./profile_place_request";
import { getUserDetailsAction } from "@/actions";
import { RequestType } from "@/types";
import { Notebook_icon } from "@/components/icons";

interface ProfileRequestsTab extends TabsContentProps {
  otherUserId?: string | string[] | undefined;
}

export default async function ProfileRequestsTab({
  className,
  otherUserId,
  ...props
}: ProfileRequestsTab) {
  const res = getUserDetailsAction(otherUserId?.toString() || null);
  const requests: RequestType[] = (await res).data.request_made;

  return (
    <TabsContent className={cn("flex flex-col gap-4", className)} {...props}>
      <div className="px-4 md:px-0">
        <Card className="w-full py-6 bg-white flex flex-col justify-center items-center gap-4 rounded-lg shadow-category-card">
          <div className="font-roboto font-normal text-base text-black opacity-60">
            What are you looking for?
          </div>

          <ProfilePlaceRequest />
        </Card>
      </div>

      <RequestContainer requests={requests} />

      {requests.length === 0 && (
        <div className="w-full py-12 md:py-24 flex flex-col items-center justify-center">
          <Notebook_icon />

          <p className="mt-6 font-poppins font-medium text-base text-black">
            Oops! No Request
          </p>
        </div>
      )}
    </TabsContent>
  );
}
