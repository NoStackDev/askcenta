import { AddFillIcon } from "@/components/icons";
import { RequestContainer } from "@/components/request";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { TabsContentProps } from "@radix-ui/react-tabs";
import React from "react";

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

          <Button className="flex gap-[6px] justify-center items-center">
            <span className="font-roboto font-semibold text-lg text-black">
              Place a Request
            </span>

            <AddFillIcon />
          </Button>
        </Card>
      </div>

      <RequestContainer />
    </TabsContent>
  );
}
