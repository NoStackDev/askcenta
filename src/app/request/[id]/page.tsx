import React from "react";
import RequestImgDetail from "./request_img_detail";
import RespondToRequest from "./respond_to_request";
import { ResponseContainer, ResponseFormWrapper } from "@/components/response";
import { cookies } from "next/headers";
import { RequestDetailType, UserDetailsType } from "@/types";
import { fetchRequestDetails } from "@/api/request";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function RequestPage({ params }: Props) {
  const cookie = cookies();
  const user: UserDetailsType["data"] | null = JSON.parse(
    cookie.get("user")?.value || "null"
  );
  const id = params.id;
  const requestDetail: Promise<RequestDetailType> = fetchRequestDetails(id);
  const requestDetailData = await requestDetail;
  return (
    <main className="w-full">
      <RequestImgDetail requestDetailData={requestDetailData} />

      {(!user ||
        user.id.toString() !== requestDetailData.request.user_id.toString()) &&
        requestDetailData.responses.length < 5 && (
          <ResponseFormWrapper requestid={id}>
            <RespondToRequest className="mt-4 md:mt-6" />
          </ResponseFormWrapper>
        )}

      <ResponseContainer className="mt-8 md:10" requestid={id} />
    </main>
  );
}
