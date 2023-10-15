import { cn, shuffle } from "@/lib/utils";
import React from "react";
import { RequestType } from "../../../types";
import Link from "next/link";
import { RequestCard } from ".";

interface RequestContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  requests: RequestType[];
}

export default async function RequestContainer({
  className,
  requests,
  ...props
}: RequestContainerProps) {
  const shuffledRequests = shuffle(requests);

  return (
    <>
      <div
        className={cn("mx-4 md:mx-0 mt-6 gap-6 sm:hidden", className)}
        {...props}
      >
        {requests.map((request) => {
          return (
            <Link href={`/request/${request.id}`} key={request.id}>
              <RequestCard request={request} />
            </Link>
          );
        })}
      </div>

      <div
        className={cn(
          "mx-4 md:mx-0 mt-6 sm:columns-2 gap-6 hidden sm:block",
          className
        )}
        {...props}
      >
        {shuffledRequests.map((request, index) => {
          const date = new Date(request.created_at);

          return (
            <Link href={`/request/${request.id}`} key={request.id}>
              <RequestCard request={request} />
            </Link>
          );
        })}
      </div>
    </>
  );
}
