import { cn, shuffle } from "@/lib/utils";
import React from "react";
import { RequestDetailType, RequestResponsesType } from "@/types";
import { ResponseCard } from ".";
import { fetchRequestDetails } from "@/api/request";
import { getAllResponsesByUser } from "@/actions";

interface ResponseProps extends React.HTMLAttributes<HTMLDivElement> {
  requestid?: string;
  isprofilepage?: boolean;
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
  const responseRes = props.requestid
    ? await getRequestDetail(props.requestid)
    : await getUserResponses();
  const responsesShuffled = shuffle(
    props.requestid
      ? (responseRes as RequestDetailType).responses.reverse()
      : (responseRes as { data: RequestResponsesType[] }).data.reverse()
  );

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
          props.requestid && "mt-4",
          props.isprofilepage && "mt-8"
        )}
      >
        {responsesShuffled.map((response) => {
          return <ResponseCard response={response} key={response.id} />;
        })}
      </div>

      <div
        className={cn(
          "hidden sm:block sm:columns-2 gap-6",
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
