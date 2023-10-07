"use client";

import React from "react";
import { BookmarkFillIcon, BookmarkIcon } from "../icons";
import { Button } from "../ui/button";

type Props = {};

export default function request_bookmark({}: Props) {
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
    >
      {!bookmark ? (
        <BookmarkIcon className="hover:cursor-pointer" />
      ) : (
        <BookmarkFillIcon className="hover:cursor-pointer" />
      )}
    </Button>
  );
}
