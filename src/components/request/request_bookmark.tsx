"use client";

import React from "react";
import { BookmarkFillIcon, BookmarkIcon, StarFilledIcon } from "../icons";
import { Button } from "../ui/button";

type Props = {};

export default function RequestBookmark({}: Props) {
  const [bookmark, setBookmark] = React.useState(false);

  return (
    <Button
      onClick={(e) => {
        console.log("lllll");
        e.preventDefault();
        e.stopPropagation();
        setBookmark(!bookmark);
      }}
      aria-label="bookmark"
      className="hover:scale-105 hover:shadow-sm"
    >
      {!bookmark ? (
        <StarFilledIcon className="hover:cursor-pointer" />
      ) : (
        <StarFilledIcon className="hover:cursor-pointer" />
      )}
    </Button>
  );
}
