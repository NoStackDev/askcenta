"use client";

import React from "react";
import { SubCategoryType } from "@/types";
import { ChevronRightIcon } from "@/components/icons";
import { DialogClose } from "@/components/ui/dialog";

interface SubCategoryLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  subcategory: SubCategoryType;
}
export default function SubCategoryLink({
  className,
  subcategory,
  ...props
}: SubCategoryLinkProps) {
  return (
    <DialogClose>
      <a
        href={`/?category_group_id=${subcategory.id}`}
        key={subcategory.id}
        className="w-full px-4 py-1 flex items-center justify-between hover:bg-primary/5 hover:scale-105"
        {...props}
      >
        <span className="block font-roboto font-normal text-base text-black">
          {subcategory.name}
        </span>
        <ChevronRightIcon className="opacity-40" />
      </a>
    </DialogClose>
  );
}
