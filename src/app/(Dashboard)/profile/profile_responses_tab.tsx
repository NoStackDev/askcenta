import { getUserDetailsAction } from "@/actions";
import { Notebook_icon } from "@/components/icons";
import { RequestContainer } from "@/components/request";
import { TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { RequestType } from "@/types";
import { TabsContentProps } from "@radix-ui/react-tabs";
import React from "react";

interface ProfileResponsesTabProps extends TabsContentProps {
  otherUserId?: string | string[] | undefined;
}

export default async function ProfileResponsesTab({
  className,
  otherUserId,
  ...props
}: ProfileResponsesTabProps) {
  const res = getUserDetailsAction(otherUserId?.toString() || null);
  const requests: RequestType[] = (await res).data.requests_responded;

  return (
    <TabsContent className={cn("", className)} {...props}>
      <RequestContainer requests={requests} />
      {requests.length === 0 && (
        <div className="w-full py-12 md:py-24 flex flex-col items-center justify-center">
          <Notebook_icon />

          <p className="mt-6 font-poppins font-medium text-base text-black">
            Oops! No Response
          </p>
        </div>
      )}
    </TabsContent>
  );
}
