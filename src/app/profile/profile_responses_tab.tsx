import { ResponseContainer } from "@/components/response";
import { TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { TabsContentProps } from "@radix-ui/react-tabs";
import React from "react";

interface ProfileResponsesTabProps extends TabsContentProps {
  otheruser?: boolean;
}

export default function ProfileResponsesTab({
  className,
  otheruser,
  ...props
}: ProfileResponsesTabProps) {
  return (
    <TabsContent className={cn("", className)} {...props}>
      <ResponseContainer />
    </TabsContent>
  );
}
