import { cn, shuffle } from "@/lib/utils";
import React from "react";
import {
  RequestDetailType,
  RequestResponsesType,
  UserDetailsType,
} from "@/types";
import { ResponseCard } from ".";
import { fetchRequestDetails } from "@/api/request";
import { getAllResponsesByUser } from "@/actions";
import { cookies } from "next/headers";

interface ResponseProps extends React.HTMLAttributes<HTMLDivElement> {
  requestid: string;
}

async function getRequestDetail(requestid: string) {
  const requestDetail: Promise<RequestDetailType> =
    fetchRequestDetails(requestid);

  return await requestDetail;
}

async function getUserResponses() {
  const userResponses = getAllResponsesByUser();

  return await userResponses;
}

export default async function ResponseContainer({
  className,
  ...props
}: ResponseProps) {
  const cookie = cookies();
  const user: UserDetailsType["data"] | null = JSON.parse(
    cookie.get("user")?.value || "null"
  );
  const responseRes: RequestDetailType = await getRequestDetail(
    props.requestid
  );
  const responsesShuffled = shuffle(responseRes.responses.reverse());

  return (
    <div className={cn("mx-4 md:mx-0 mb-16", className)} {...props}>
      {props.requestid && (
        <h2 className="font-poppins font-semibold text-base text-black">
          RESPONSES ({(responseRes as RequestDetailType)?.responses.length})
        </h2>
      )}

      <div
        className={cn(
          "flex flex-col gap-6 sm:hidden",
          props.requestid && "mt-4"
        )}
      >
        {responsesShuffled.map((response) => {
          const showResponse =
            (user && user.id == response.user_id) ||
            (user && user.id == responseRes.request.user_id) ||
            response.visibility === "public";
          return (
            showResponse && (
              <ResponseCard response={response} key={response.id} />
            )
          );
        })}
      </div>

      <div
        className={cn(
          "hidden sm:block sm:columns-2 gap-6",
          props.requestid && "mt-4"
        )}
      >
        {responsesShuffled.map((response) => {
          const showResponse =
            (user && user.id == response.user_id) ||
            (user && user.id == responseRes.request.user_id) ||
            response.visibility === "public";
          return (
            showResponse && (
              <ResponseCard response={response} key={response.id} />
            )
          );
        })}
      </div>
    </div>
  );
}
