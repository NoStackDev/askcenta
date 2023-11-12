import {
  FacebookCircleIcon,
  InstagramCircleIcon,
  WhatsappCircleIcon,
} from "@/components/icons";
import { Card } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { TabsContentProps } from "@radix-ui/react-tabs";
import React from "react";

interface ProfileAboutTabProps extends TabsContentProps {}

export default function ProfileAboutTab({
  className,
  ...props
}: ProfileAboutTabProps) {
  return (
    <TabsContent className={cn("pb-8", className)} {...props}>
      <div>
        <h3 className="ml-4 font-roboto font-medium text-sm text-black">Bio</h3>
        <Card
          variant="settings"
          className="mt-2 font-roboto font-medium text-base text-[#010E1E]"
        >
          Lorem ipsum dolor sit amet consectetur. In malesuada fringilla
          molestie dis sapien posuere porttitor. Varius vitae mauris felis sem
          turpis turpis eu sed.
        </Card>
      </div>

      <div className="mt-8">
        <h3 className="ml-4 font-roboto font-medium text-sm text-black">
          Contact
        </h3>
        <Card
          variant="settings"
          className="mt-2 font-roboto font-medium text-base text-[#010E1E]"
        >
          <div>
            <h4 className="font-roboto font-normal text-sm text-[#48466D] opacity-80">
              Business Address
            </h4>

            <p className="mt-2">
              molestie dis sapien posuere porttitor. Varius vitae mauris felis
              sem turpis turpis eu sed.
            </p>
          </div>

          <div className="mt-6 flex gap-3 items-center">
            <h4 className="font-roboto font-normal text-base text-[#48466D] opacity-60">
              City:
            </h4>

            <span className="">08054423423</span>
          </div>

          <div className="mt-6">
            <h4 className="font-roboto font-normal text-sm text-[#48466D] opacity-80">
              Phone Number
            </h4>

            <p className="mt-2">08054423423</p>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <h4 className="font-roboto font-normal text-sm text-[#48466D] opacity-80">
              My Social Media Links:
            </h4>

            <div className="flex items-center gap-6">
              <FacebookCircleIcon />
              <InstagramCircleIcon />
              <WhatsappCircleIcon />
            </div>
          </div>
        </Card>
      </div>
    </TabsContent>
  );
}
