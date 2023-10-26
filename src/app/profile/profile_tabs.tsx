import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsProps } from "@radix-ui/react-tabs";
import React from "react";
import ProfileAboutTab from "./profile_about_tab";
import ProfileQandATab from "./profile_qa_tab";
import ProfileRequestsTab from "./profile_requests_tab";
import ProfileResponsesTab from "./profile_responses_tab";
import { cn } from "@/lib/utils";

interface ProfileTabProps extends TabsProps {
  otheruser?: boolean;
}

export default function ProfileTabs({
  className,
  otheruser,
  ...props
}: ProfileTabProps) {
  return (
    <Tabs defaultValue="about" className={className} {...props}>
      <TabsList
        className={cn("grid w-full grid-cols-4", otheruser && "grid-cols-3")}
      >
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
        {!otheruser && (
          <TabsTrigger
            value="requests"
            className="py-4 font-roboto font-semibold text-sm text-black opacity-60 data-[state=active]:text-[#6356E5] data-[state=active]:opacity-100 border-b-[2px] border-[#D9D9D9] data-[state=active]:border-b-[2px] data-[state=active]:border-[#6356E5]"
          >
            Requests
          </TabsTrigger>
        )}
        <TabsTrigger
          value="responses"
          className="py-4 font-roboto font-semibold text-sm text-black opacity-60 data-[state=active]:text-[#6356E5] data-[state=active]:opacity-100 border-b-[2px] border-[#D9D9D9] data-[state=active]:border-b-[2px] data-[state=active]:border-[#6356E5]"
        >
          Responses
        </TabsTrigger>
      </TabsList>

      <ProfileAboutTab value="about" className="mt-12" />

      <ProfileQandATab otheruser={otheruser} value="q&a" className="mt-12" />

      <ProfileRequestsTab value="requests" className="" />

      <ProfileResponsesTab
        otheruser={otheruser}
        value="responses"
        className=""
      />
    </Tabs>
  );
}
