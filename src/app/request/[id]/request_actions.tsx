"use client";

import { bookmarkRequestAction, fetchBookmarksAction } from "@/actions";
import { FlagIcon, StarFilledIcon, StarIcon } from "@/components/icons";
import ShareIcon from "@/components/icons/share_icon";
import Share from "@/components/share";
import { cn } from "@/lib/utils";
import { RequestDetailType, RequestType } from "@/types";
import React from "react";

interface RequestActionsProps extends React.HTMLAttributes<HTMLDivElement> {
  requestDetailData: RequestDetailType;
}

export default function RequestActions({
  className,
  requestDetailData,
  ...props
}: RequestActionsProps) {
  const [isBookmarked, setIsBookmarked] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      try {
        const res: Promise<{ data: RequestType[] }> =
          await fetchBookmarksAction();
        (await res).data.find((ele) => {
          if (ele.id.toString() === requestDetailData.request.id.toString()) {
            setIsBookmarked(true);
          }
          return ele.id.toString() === requestDetailData.request.id.toString();
        });
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  async function onSaveClick() {
    setIsBookmarked(!isBookmarked);
    try {
      const res = await bookmarkRequestAction(
        requestDetailData.request.id.toString()
      );
    } catch (err) {
      setIsBookmarked(!isBookmarked);
      console.log(err);
    }
  }

  return (
    <div
      className={cn("flex justify-between items-center", className)}
      {...props}
    >
      <div className="flex items-center gap-1 hover:cursor-pointer">
        <FlagIcon aria-label="report" />
        <span className="font-roboto font-normal text-sm text-black opacity-80">
          Report
        </span>
      </div>

      <div
        className="flex items-center gap-1 hover:cursor-pointer"
        onClick={onSaveClick}
      >
        {!isBookmarked && (
          <StarFilledIcon width="24" height="24" aria-label="save" />
        )}
        {isBookmarked && <StarIcon width="24" height="24" />}

        <span className="font-roboto font-normal text-sm text-black opacity-90">
          Save
        </span>
      </div>

      <Share text={requestDetailData.request.title}>
        <div className="flex items-center gap-1 hover:cursor-pointer">
          <ShareIcon aria-label="share" />
          <span className="font-roboto font-normal text-sm text-black opacity-90">
            Share
          </span>
        </div>
      </Share>
    </div>
  );
}
