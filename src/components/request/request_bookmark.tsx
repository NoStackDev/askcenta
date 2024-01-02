"use client";

import React from "react";

import { Button } from "../ui/button";
import { RequestType } from "@/types";
import { StarFilledIcon, StarIcon } from "../icons";
import { addBookmarkAction } from "@/actions";

type Props = {
  requestData: { id: RequestType["id"]; bookmark: RequestType["bookmark"] };
};

export default function RequestBookmark({ requestData }: Props) {
  const [bookmarked, setBookmarked] = React.useState(requestData.bookmark);

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
    <Button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onSaveClick();
      }}
      aria-label="bookmark"
      className="hover:scale-105 hover:shadow-sm"
    >
      {!bookmarked && <StarFilledIcon className="hover:cursor-pointer" />}
      {bookmarked && (
        <StarIcon className="hover:cursor-pointer" width={"32"} height={"32"} />
      )}
    </Button>
  );
}
