import { RequestContainer } from "@/components/request";
import { TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { TabsContentProps } from "@radix-ui/react-tabs";
import React from "react";
import { FeedsResponse } from "../../../types";
import { fetchFeed } from "@/api/feeds";

interface ProfileResponsesTabProps extends TabsContentProps {}

export default async function ProfileResponsesTab({
  className,
  ...props
}: ProfileResponsesTabProps) {
  const feedres: Promise<FeedsResponse> = fetchFeed();
  const feed = await feedres;

  return (
    <TabsContent className={cn("", className)} {...props}>
      <RequestContainer requests={feed.data} />
    </TabsContent>
  );
}
