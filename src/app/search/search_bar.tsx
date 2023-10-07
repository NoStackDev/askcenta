import { SearchFillIcon } from "@/components/icons";
import CloseIcon from "@/components/icons/close_icon";
import { Card, CardProps } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";

interface SearchbarProps extends CardProps {}

export default function Searchbar({ className, ...props }: SearchbarProps) {
  return (
    <Card
      variant="settings"
      className={cn("rounded-xl py-4", className)}
      {...props}
    >
      <form className="flex items-center justify-between">
        <input
          type="text"
          name="str"
          id=""
          placeholder="Search keywords for requests"
          className="p-1 font-roboto font-normal text-sm text-black opacity-80 placeholder:font-roboto placeholder:font-normal placeholder:text-sm placeholder:text-black placeholder:opacity-60 w-full"
        />

        <div className="flex items-center gap-3">
          <CloseIcon width="16" height="16" className="opacity-40" />
          <SearchFillIcon />
        </div>
      </form>
    </Card>
  );
}