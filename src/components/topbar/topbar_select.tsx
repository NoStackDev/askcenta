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
import { SubCategoryResponseType } from "../../../types";
import { ChevronRightIcon } from "../icons";
import TopbarSelectLink from "./topbar_select_link";

async function fetchSubCategories() {
  const res = await fetch("https://www.askcenta.ng/api/categoryGroups", {
    method: "OPTIONS",
    next: {
      revalidate: 3600 * 6,
    },
  });

  if (!res.ok) {
    throw new Error("failed to fetch feed");
  }

  return res.json();
}

interface TopbarSelectProps extends React.HTMLAttributes<typeof Select> {
  subcategoryid: string | string[] | undefined;
}

export default async function TopbarSelect({
  className,
  subcategoryid,
  ...props
}: TopbarSelectProps) {
  const subCategoriesRes: Promise<SubCategoryResponseType> =
    fetchSubCategories();
  const subCategories = await subCategoriesRes;
  const subCategoryData = subCategories.data.find(
    (subCategory) => subCategory.id === Number(subcategoryid as string)
  );
  const category = subCategories.data.filter(
    (subCategory) => subCategory.category === subCategoryData?.category
  );

  return (
    <div className="flex items-center justify-between">
      <div className="font-poppins font-semibold text-base text-[#4C4B60]">
        {subCategoryData?.category.trim()}
      </div>

      <Select>
        <SelectTrigger className="group border border-[#D9D9D9] rounded-lg p-3 flex items-center gap-5 font-roboto font-medium text-sm text-[#5E5D7F] min-w-[100px]">
          <SelectValue placeholder={subCategoryData?.name.trim()} />
          <SelectTriggerIcon>
            <ChevronRightIcon className="rotate-90 group-data-[state=open]:rotate-[270deg] transition-transform duration-150 ease-in-out" />
          </SelectTriggerIcon>
        </SelectTrigger>

        <SelectContent className="z-20 bg-white">
          <SelectGroup className="flex flex-col items-start gap-2">
            {category.map((subCategory) => {
              return (
                <TopbarSelectLink
                  subcategory={subCategory}
                  key={subCategory.id}
                />
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
