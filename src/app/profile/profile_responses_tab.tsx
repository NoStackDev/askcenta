import { RequestContainer } from "@/components/request";
import { TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { TabsContentProps } from "@radix-ui/react-tabs";
import React from "react";

interface ProfileResponsesTabProps extends TabsContentProps {
  otherUserId?: string | string[] | undefined;
}

export default function ProfileResponsesTab({
  className,
  otherUserId,
  ...props
}: ProfileResponsesTabProps) {
  return (
    <TabsContent className={cn("", className)} {...props}>
      <RequestContainer
        pagetype="profile"
        requesttype="response"
        searchparams={{ user: otherUserId?.toString() }}
      />
    </TabsContent>
  );
}
