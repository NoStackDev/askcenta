import React from "react";
import RequestImgDetail from "./request_img_detail";
import RespondToRequest from "./respond_to_request";
import { ResponseContainer, ResponseFormWrapper } from "@/components/response";
import { cookies } from "next/headers";
import { RequestDetailType, UserDetailsType } from "@/types";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Notebook_icon } from "@/components/icons";
import { getRequestDetails } from "@/actions";
import { notFound } from "next/navigation";

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
  const requestDetail: Promise<RequestDetailType> = getRequestDetails(id);
  const requestDetailData = await requestDetail;

  if (!requestDetailData) {
    notFound();
  }

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

      {user &&
        user.id.toString() !== requestDetailData.request.user_id.toString() &&
        requestDetailData.responses.length >= 5 && (
          <RespondToRequest disabled className="mt-4 md:mt-6" />
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

      <ResponseContainer
        className="mt-8 md:10"
        requestid={id}
        requestUserId={requestDetailData.request.user_id}
        responses={requestDetailData.responses}
      />

      {requestDetailData.responses.length === 0 && (
        <div className="w-full pb-12 md:pb-24 flex flex-col items-center justify-center">
          <Notebook_icon />

          <p className="mt-6 font-poppins font-medium text-base text-black">
            No Response Yet
          </p>
        </div>
      )}
    </main>
  );
}
