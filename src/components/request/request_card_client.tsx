"use client";

import React from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import Image from "next/image";
import {
  CommentIcon,
  LocationOnIcon,
  ScheduleIcon,
  StarFilledIcon,
  StarIcon,
} from "../icons";
import { cn, month } from "@/lib/utils";
import CardTitleDynamic from "./card_title_dynamic";
import Link from "next/link";
import { UserDetailsType } from "@/types";
import { Button } from "../ui/button";
import { addBookmarkAction } from "@/actions";

interface RequestCardProps extends React.HTMLAttributes<HTMLDivElement> {
  requestData: {
    category: string;
    created_at: string;
    title: string;
    id: number;
    image_url: string | null;
    location: string;
    user: string;
    user_id: number;
    num_of_responses: number;
    bookmark: boolean;
  };
  user: UserDetailsType["data"] | null;
}

export default function RequestCardClient({
  className,
  requestData,
  user,
  ...props
}: RequestCardProps) {
  const [bookmarked, setBookmarked] = React.useState(requestData.bookmark);

  const date = new Date(requestData.created_at);

  React.useEffect(() => {
    if (requestData.bookmark) {
      setBookmarked(true);
    }
  }, []);

  async function onSaveClick() {
    setBookmarked(!bookmarked);
    try {
      const res = await addBookmarkAction(requestData.id.toString());
    } catch (err) {
      setBookmarked(!bookmarked);
      console.log(err);
    }
  }

  return (
    <Card
      variant="request"
      className={cn(
        "w-full rounded-2xl break-inside-avoid mb-6 overflow-clip",
        className
      )}
    >
      <CardContent>
        {requestData.image_url && (
          <Link href={`/request/${requestData.id}`}>
            <Image
              width={358}
              height={344}
              alt={requestData.title}
              src={`https://${requestData.image_url}`}
              className="w-full max-h-[344px] object-cover"
            />
          </Link>
        )}

        {requestData.image_url && (
          <Link href={`/request/${requestData.id}`}>
            <CardTitle
              className={cn(
                "px-3 py-4 text-center font-roboto font-semibold text-lg text-[#18212D] leading-[30px] h-[100px] flex items-center justify-center"
              )}
            >
              {requestData.title.length > 78
                ? requestData.title.slice(0, 78).trim() + "..."
                : requestData.title}
            </CardTitle>
          </Link>
        )}

        {!requestData.image_url && (
          <Link href={`/request/${requestData.id}`}>
            <CardTitleDynamic
              className={cn(
                "px-3 pt-[9px] pb-4 text-center font-roboto font-semibold text-lg text-[#18212D] leading-[30px]",
                `min-h-[223px] flex items-center justify-center py-6 text-[22px] leading-[35px] no-img-request-card`
              )}
            >
              {/* {requestData.title.length > 78
                ? requestData.title.slice(0, 78).trim() + "..."
                : requestData.title} */}
              {requestData.title}
            </CardTitleDynamic>
          </Link>
        )}

        <hr
          className="border-t border-[#EDECF0] border-r-4 bg-none"
          role="separator"
        />

        <div className="w-full px-3 pt-4 pb-5 flex flex-col gap-4">
          <div className={cn("flex justify-between items-center")}>
            <div className="flex items-center gap-4">
              <div className="flex justify-center items-center gap-1">
                <CommentIcon />
                <span className="font-roboto font-normal text-sm text-black">
                  {requestData.num_of_responses}
                </span>
              </div>

              <div className="flex justify-center items-center gap-1">
                <ScheduleIcon aria-label="date" />
                <span className="font-roboto font-normal text-xs text-[#5E5D7F]">
                  {date.getDate()} {month(date.getMonth())}
                </span>
              </div>

              <div className="flex justify-center items-center gap-1">
                <LocationOnIcon aria-label="locaion" />
                <span className="font-roboto font-normal text-xs text-[#5E5D7F]">
                  {requestData.location}
                </span>
              </div>
            </div>

            {user && user.id.toString() !== requestData.user_id.toString() && (
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onSaveClick();
                }}
                aria-label="bookmark"
                className="hover:scale-105 hover:shadow-sm"
              >
                {!bookmarked && (
                  <StarFilledIcon className="hover:cursor-pointer" />
                )}
                {bookmarked && (
                  <StarIcon
                    className="hover:cursor-pointer"
                    width={"32"}
                    height={"32"}
                  />
                )}
              </Button>
            )}

            {!user && (
              <Link href={"/login"}>
                <StarFilledIcon className="hover:cursor-pointer" />
              </Link>
            )}
          </div>

          {user &&
            user.id.toString() !== requestData.user_id.toString() &&
            requestData.num_of_responses < 5 && <></>}

          {!user && (
            <Link href={"/login"}>
              <Button
                variant="request_card_outlined"
                className={cn(
                  "hover:cursor-pointer font-roboto font-normal text-sm",
                  className
                )}
              >
                Respond to Request
              </Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
}