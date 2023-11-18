import { RequestContainer } from "@/components/request";
import { Card } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { TabsContentProps } from "@radix-ui/react-tabs";
import React from "react";
import ProfilePlaceRequest from "./profile_place_request";

interface ProfileRequestsTab extends TabsContentProps {}

export default function ProfileRequestsTab({
  className,
  ...props
}: TabsContentProps) {
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

      <RequestContainer pagetype="profile" requesttype="request" />
    </TabsContent>
  );
}
