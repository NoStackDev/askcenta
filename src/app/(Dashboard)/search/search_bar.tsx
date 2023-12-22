"use client";

import { SearchFillIcon, CloseIcon } from "@/components/icons";
import { Card, CardProps } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";

interface SearchbarProps extends CardProps {}

export default function Searchbar({ className, ...props }: SearchbarProps) {
  const onSubmit = () => {
    const searchStr: HTMLInputElement | null = document.getElementById(
      "searchStr"
    ) as HTMLInputElement | null;
    const url = new URL(window.location.href);
    url.searchParams.delete("searchStr");
    searchStr && url.searchParams.append("searchStr", searchStr.value);
    window.location.href = url.href;
  };

  return (
    <Card
      variant="settings"
      className={cn("rounded-xl py-4", className)}
      {...props}
    >
      <form onSubmit={onSubmit} className="flex items-center justify-between">
        <input
          type="text"
          name="searchStr"
          id="searchStr"
          placeholder="Search keywords for requests"
          className="p-1 font-roboto font-normal text-sm text-black opacity-80 placeholder:font-roboto placeholder:font-normal placeholder:text-sm placeholder:text-black placeholder:opacity-60 w-full"
          onChange={(e) => {
            const searchStrClear = document.getElementById("searchStrClear");
            if (e.target.value.trim().length > 0 && searchStrClear) {
              searchStrClear.dataset.show = "true";
            }
            if (e.target.value.trim().length <= 0 && searchStrClear) {
              searchStrClear.dataset.show = "false";
            }
          }}
        />

        <div className="flex items-center gap-3">
          <button
            type="button"
            data-show="false"
            id="searchStrClear"
            className="data-[show='false']:opacity-0 hover:cursor-pointer"
            onClick={() => {
              const inputEle = document.getElementById("searchStr");
              if (
                inputEle &&
                (inputEle as HTMLInputElement).value.trim().length > 0
              ) {
                (inputEle as HTMLInputElement).value = "";
              }
            }}
          >
            <CloseIcon width="16" height="16" className="opacity-40" />
          </button>

          <button className="hover:cursor-pointer">
            <SearchFillIcon />
          </button>
        </div>
      </form>
    </Card>
  );
}
