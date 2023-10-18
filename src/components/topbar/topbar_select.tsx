"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemText,
  SelectTrigger,
  SelectTriggerIcon,
  SelectValue,
} from "../ui/select";
import { SubCategoryType } from "../../../types";
import { ChevronRightIcon } from "../icons";

interface TopbarSelectProps extends React.HTMLAttributes<typeof Select> {
  subcategoryid: string | string[] | undefined;
  subcategories: SubCategoryType[];
}

export default function TopbarSelect({
  className,
  subcategoryid,
  subcategories,
  ...props
}: TopbarSelectProps) {
  const goto = (subCategoryId: string) => {
    const url = new URL(window.location.href);
    url.searchParams.delete("category_group_id");
    url.searchParams.append("category_group_id", subCategoryId);
    window.location.href = url.href;
  };

  const subCategoryData = subcategories.find(
    (subCategory) => subCategory.id === Number(subcategoryid as string)
  );
  const category = subcategories.filter(
    (subCategory) => subCategory.category === subCategoryData?.category
  );

  return (
    <div className="flex items-center justify-between">
      <div className="font-poppins font-semibold text-base text-[#4C4B60] uppercase">
        {subCategoryData?.category.trim()}
      </div>

      <Select onValueChange={(value) => goto(value)}>
        <SelectTrigger className="group border border-[#D9D9D9] rounded-lg p-3 flex items-center gap-5 font-roboto font-medium text-sm text-[#5E5D7F] min-w-[100px] bg-[#F7F9FF]">
          <SelectValue placeholder={subCategoryData?.name.trim()} />
          <SelectTriggerIcon>
            <ChevronRightIcon className="rotate-90 group-data-[state=open]:rotate-[270deg] transition-transform duration-150 ease-in-out" />
          </SelectTriggerIcon>
        </SelectTrigger>

        <SelectContent className="z-20 bg-white">
          <SelectGroup className="flex flex-col items-start gap-2">
            {category.map((subCategory) => {
              return (
                <SelectItem
                  value={subCategory.id.toString()}
                  key={subCategory.id}
                >
                  <SelectItemText>{subCategory.name.trim()}</SelectItemText>
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
