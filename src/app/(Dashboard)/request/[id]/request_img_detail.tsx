import { cn, month } from "@/lib/utils";
import React from "react";
import { RequestDetailType, UserDetailsType } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import {
  LocationOnIcon,
  PersonFillIcon,
  ScheduleIcon,
  VisibilityFillIcon,
} from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";
import RequestActions from "./request_actions";
import RequestActionsUser from "./request_actions_user";

interface RequestImgDetailProps extends React.HTMLAttributes<HTMLDivElement> {
  requestDetailData: RequestDetailType;
}

export default function RequestImgDetail({
  requestDetailData,
}: RequestImgDetailProps) {
  const cookie = cookies();
  const user: UserDetailsType["data"] | null = JSON.parse(
    cookie.get("user")?.value || "null"
  );
  const date = new Date(requestDetailData.request.created_at);

  return (
    <Card variant="request_detail" className="mt-2 md:mt-0">
      <CardContent className="bg-white">
        <h2 className="font-roboto font-bold text-[22px] md:text-[28px] text-[#010E1E] mx-4 py-6 md:mx-6">
          {requestDetailData.request.title}
        </h2>

        <div className="flex justify-between items-center mx-4 md:mx-6 pb-4">
          <div className="font-roboto font-normal text-xs text-black border border-[#ADABAB] rounded-xl py-[6px] px-[26px] w-fit">
            {requestDetailData.request.category}
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 opacity-80">
              <ScheduleIcon height="16" width="16" pathColor="#000000" />

              <span className="font-roboto font-normal text-xs text-black">
                {date.getDate()} {month(date.getMonth())}
              </span>
            </div>
            <div className="flex items-center gap-2 opacity-80">
              <VisibilityFillIcon height="16" width="16" pathColor="#000000" />

              <span className="font-roboto font-normal text-xs text-black">
                {requestDetailData.request.num_of_views} views
              </span>
            </div>
          </div>
        </div>

        {requestDetailData.request.image_url && (
          <Image
            src={`https://${requestDetailData.request.image_url}`}
            height={800}
            width={800}
            className="w-full h-auto"
            alt={requestDetailData.request.title}
          />
        )}

        <div className="mt-6 mx-4 md:mx-6">
          {requestDetailData.request.description && (
            <>
              <h3 className="font-roboto font-medium text-sm text-black opacity-60">
                Additional Details
              </h3>
              <p className="font-roboto font-normal text-base text-black mt-2">
                {requestDetailData.request.description}
              </p>
            </>
          )}
        </div>

        <div className="p-4 mt-4 md:mt-6 bg-[#E8F3F7] flex flex-col gap-3">
          <span className="font-roboto font-normal text-sm text-black opacity-60">
            Request posted by:
          </span>

          {/* profile pic, username and location  */}
          <div className="flex items-center justify-between">
            {Boolean(Number(requestDetailData.request.show_profile)) && (
              <div className="flex items-center gap-2 font-roboto font-normal text-base text-black">
                <Link
                  href={`/profile?user=${requestDetailData.request.user_id}`}
                  className={cn(
                    "border border-[#9B91FD] bg-white p-[3.2px] rounded-full",
                    requestDetailData.request.user_profile_image_url && "p-0"
                  )}
                >
                  {requestDetailData.request.user_profile_image_url && (
                    <Image
                      height={19.2}
                      width={19.2}
                      alt={requestDetailData.request.user}
                      src={`https://${requestDetailData.request.user_profile_image_url}`}
                      className="rounded-full h-[20px] w-[20px] object-cover"
                    />
                  )}
                  {!requestDetailData.request.user_profile_image_url && (
                    <PersonFillIcon height="19.2" width="19.2" />
                  )}
                </Link>

                <Link
                  href={`/profile?user=${requestDetailData.request.user_id}`}
                >
                  <span className="font-medium text-sm text-[#6356E5]">
                    {requestDetailData.request.user}
                  </span>
                </Link>
              </div>
            )}

            {!Boolean(Number(requestDetailData.request.show_profile)) && (
              <div className="flex items-center gap-2 font-roboto font-normal text-base text-black">
                <div
                  className={cn(
                    "border border-[#9B91FD] bg-white p-[3.2px] rounded-full",
                    requestDetailData.request.user_profile_image_url && "p-0"
                  )}
                >
                  <PersonFillIcon height="19.2" width="19.2" />
                </div>

                <span className="font-medium text-sm text-[#6356E5]">
                  Anonymous
                </span>
              </div>
            )}

            <div className="flex items-center gap-2">
              <LocationOnIcon height="20" width="20" />
              <span className="font-roboto font-normal text-sm text-black">
                {requestDetailData.request.location}
              </span>
            </div>
          </div>

          <div className="mt-4 flex gap-1 items-center">
            <span className="font-roboto font-normal text-xs text-black opacity-60">
              People also interested:
            </span>
            <span className="font-roboto font-semibold text-xs text-black">
              0
            </span>
          </div>
        </div>
      </CardContent>

      <CardContent className="bg-white mb-4 md:mb-6 border-b border-[#CDCDD1]">
        {(!user || user.id != requestDetailData.request.user_id) && (
          <RequestActions
            user={user}
            className="px-4 md:px-6 py-6 mt-[1px] md:mt-1"
            requestDetailData={requestDetailData}
          />
        )}
        {user && user.id == requestDetailData.request.user_id && (
          <RequestActionsUser
            className="px-4 md:px-6 py-6 mt-[1px] md:mt-1"
            requestDetailData={requestDetailData}
          />
        )}
      </CardContent>
    </Card>
  );
}
