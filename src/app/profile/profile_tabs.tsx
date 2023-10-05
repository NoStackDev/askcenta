import {
  FacebookCircleIcon,
  InstagramCircleIcon,
  WhatsappCircleIcon,
} from "@/components/icons";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsProps } from "@radix-ui/react-tabs";
import React from "react";

interface ProfileTabProps extends TabsProps {}

export default function ProfileTabs({ className, ...props }: ProfileTabProps) {
  return (
    <Tabs defaultValue="about" className={className} {...props}>
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger
          value="about"
          className="py-4 font-roboto font-semibold text-sm text-black opacity-60 data-[state=active]:text-[#6356E5] data-[state=active]:opacity-100 border-b-[2px] border-[#D9D9D9] data-[state=active]:border-b-[2px] data-[state=active]:border-[#6356E5]"
        >
          About
        </TabsTrigger>
        <TabsTrigger
          value="q&a"
          className="py-4 font-roboto font-semibold text-sm text-black opacity-60 data-[state=active]:text-[#6356E5] data-[state=active]:opacity-100 border-b-[2px] border-[#D9D9D9] data-[state=active]:border-b-[2px] data-[state=active]:border-[#6356E5]"
        >
          Q&A (1)
        </TabsTrigger>
        <TabsTrigger
          value="requests"
          className="py-4 font-roboto font-semibold text-sm text-black opacity-60 data-[state=active]:text-[#6356E5] data-[state=active]:opacity-100 border-b-[2px] border-[#D9D9D9] data-[state=active]:border-b-[2px] data-[state=active]:border-[#6356E5]"
        >
          Requests
        </TabsTrigger>
        <TabsTrigger
          value="responses"
          className="py-4 font-roboto font-semibold text-sm text-black opacity-60 data-[state=active]:text-[#6356E5] data-[state=active]:opacity-100 border-b-[2px] border-[#D9D9D9] data-[state=active]:border-b-[2px] data-[state=active]:border-[#6356E5]"
        >
          Responses
        </TabsTrigger>
      </TabsList>

      <TabsContent value="about" className="py-8">
        <div>
          <h3 className="ml-4 font-roboto font-medium text-sm text-black">
            Bio
          </h3>
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
    </Tabs>
  );
}
