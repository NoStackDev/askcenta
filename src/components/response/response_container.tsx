import { cn, shuffle } from "@/lib/utils";
import React from "react";
import {
  RequestDetailType,
  RequestResponsesType,
  UserDetailsType,
} from "@/types";
import { ResponseCard } from ".";
import { fetchRequestDetails } from "@/api/request";
import { cookies } from "next/headers";

interface ResponseProps extends React.HTMLAttributes<HTMLDivElement> {
  requestid: string;
  responses: RequestResponsesType[];
  requestUserId: number;
}

export default async function ResponseContainer({
  className,
  responses,
  requestUserId,
  ...props
}: ResponseProps) {
  const cookie = cookies();
  const user: UserDetailsType["data"] | null = JSON.parse(
    cookie.get("user")?.value || "null"
  );

  const responsesShuffled = shuffle(responses.reverse());

  return (
    <div className={cn("mx-4 md:mx-0 mb-16", className)} {...props}>
      {props.requestid && (
        <h2 className="font-poppins font-semibold text-base text-black">
          RESPONSES ({responses.length})
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
            (user && user.id == requestUserId) ||
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
            (user && user.id == requestUserId) ||
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
