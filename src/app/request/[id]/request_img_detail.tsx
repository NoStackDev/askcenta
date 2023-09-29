import { cn, month } from "@/lib/utils";
import React from "react";
import { RequestDetailType } from "../../../../types";
import { Card, CardContent } from "@/components/ui/card";
import { ScheduleIcon } from "@/components/icons";
import Image from "next/image";
import RequestActions from "./request_actions";

const fetchRequestDetails = async (requestid: string) => {
  const res = await fetch(`https://www.askcenta.ng/api/requests/${requestid}`, {
    method: "OPTIONS",
    next: {
      revalidate: 0,
    },
  });

  if (!res.ok)
    throw new Error(`failed to fetch request id ${requestid} details`);

  return res.json();
};

interface RequestImgDetailProps extends React.HTMLAttributes<HTMLDivElement> {
  requestid: string;
}

export default async function RequestImgDetail({
  requestid,
}: RequestImgDetailProps) {
  const requestDetail: Promise<RequestDetailType> =
    fetchRequestDetails(requestid);
  const requestDetailData = await requestDetail;
  const date = new Date(requestDetailData.request.created_at);

  return (
    <Card variant="request_detail" className="mt-2 md:mt-0">
      <CardContent className="bg-white pb-6">
        <h2 className="font-roboto font-bold text-[22px] md:text-[28px] text-[#010E1E] mx-4 py-6 md:mx-6">
          {requestDetailData.request.title}
        </h2>

        <div className="flex justify-between items-center mx-4 md:mx-6 pb-4">
          <div className="font-roboto font-normal text-xs text-black border border-[#ADABAB] rounded-xl py-[6px] px-[26px] w-fit">
            {requestDetailData.request.category}
          </div>

          <div className="flex items-center gap-2 opacity-80">
            <ScheduleIcon height="16" width="16" pathColor="#000000" />

            <span className="font-roboto font-normal text-xs text-black">
              {date.getDate()} {month(date.getMonth())}
            </span>
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

          <div className="flex items-center gap-2 mt-4 md:mt-6 font-roboto font-normal text-base text-black">
            <span className="opacity-60">Request by:</span>
            <span className="font-medium text-sm text-[#6356E5]">
              {requestDetailData.request.user}
            </span>
          </div>

          <div className="flex items-center gap-2 mt-4 font-roboto font-normal text-base text-black">
            <span className="opacity-60">Location:</span>
            <span className="font-medium text-sm text-black">
              {requestDetailData.request.location}
            </span>
          </div>
        </div>
      </CardContent>

      <CardContent className="bg-white mb-4 md:mb-6">
        <RequestActions className="px-4 md:px-6 py-6 mt-[1px] md:mt-1" />
      </CardContent>
    </Card>
  );
}
