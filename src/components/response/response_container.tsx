import { cn, shuffle } from "@/lib/utils";
import React from "react";
import { RequestDetailType } from "../../../types";
import { ResponseCard } from ".";
import { fetchRequestDetails } from "@/api/request";

interface ResponseProps extends React.HTMLAttributes<HTMLDivElement> {
  requestid?: string;
  isprofilepage?: boolean;
}

export default async function ResponseContainer({
  className,
  ...props
}: ResponseProps) {
  const requestDetail: Promise<RequestDetailType> | null = props.requestid
    ? fetchRequestDetails(props.requestid)
    : null;
  const requestDetailData = requestDetail
    ? await requestDetail
    : { responses: [] };
  const responsesShuffled = shuffle(requestDetailData.responses);

  return (
    <div className={cn("mx-4 md:mx-0 mb-16", className)} {...props}>
      <h2 className="font-poppins font-semibold text-base text-black">
        RESPONSES ({requestDetailData?.responses.length})
      </h2>

      <div
        className={cn(
          "sm:columns-2 gap-6",
          props.requestid && "mt-4",
          props.isprofilepage && "mt-8"
        )}
      >
        {responsesShuffled.map((response) => {
          return <ResponseCard response={response} key={response.id} />;
        })}
      </div>
    </div>
  );
}
