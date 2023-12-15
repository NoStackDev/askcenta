import React from "react";
import RequestImgDetail from "./request_img_detail";
import RespondToRequest from "./respond_to_request";
import { ResponseContainer, ResponseFormWrapper } from "@/components/response";
import { cookies } from "next/headers";
import { RequestDetailType, UserDetailsType } from "@/types";
import { fetchRequestDetails } from "@/api/request";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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

      {user &&
        user.id.toString() !== requestDetailData.request.user_id.toString() &&
        requestDetailData.responses.length < 5 && (
          <ResponseFormWrapper requestid={id}>
            <RespondToRequest className="mt-4 md:mt-6" />
          </ResponseFormWrapper>
        )}

      {!user && (
        <div
          className={cn(
            "bg-white py-6 flex flex-col justify-center items-center gap-4"
          )}
        >
          <Link href={"/login"} className="mx-4 sm:mx-0 w-4/5 sm:w-fit h-fit">
            <Button className="w-full sm:px-[108px] py-[13px] font-roboto font-medium text-base text-white bg-request-gradient rounded-3xl">
              Respond to Request
            </Button>
          </Link>

          <p className="font-roboto font-normal text-xs text-black opacity-60">
            Respond With an Offer Relevant to What is Requested
          </p>
        </div>
      )}

      <ResponseContainer className="mt-8 md:10" requestid={id} />
    </main>
  );
}
