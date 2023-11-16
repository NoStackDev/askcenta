import React from "react";
import RequestImgDetail from "./request_img_detail";
import RespondToRequest from "./respond_to_request";
import { ResponseContainer, ResponseFormWrapper } from "@/components/response";
import { cookies } from "next/headers";
import { RequestDetailType } from "@/types";
import { fetchRequestDetails } from "@/api/request";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function RequestPage({ params }: Props) {
  const cookie = cookies();
  const userId = cookie.get("userId")?.value;
  const id = params.id;
  const requestDetail: Promise<RequestDetailType> = fetchRequestDetails(id);
  const requestDetailData = await requestDetail;
  return (
    <main className="w-full">
      <RequestImgDetail requestDetailData={requestDetailData} />

      {(!userId || userId !== requestDetailData.request.user_id.toString()) && (
        <ResponseFormWrapper requestid={id}>
          <RespondToRequest className="mt-4 md:mt-6" />
        </ResponseFormWrapper>
      )}

      <ResponseContainer className="mt-8 md:10" requestid={id} />
    </main>
  );
}
