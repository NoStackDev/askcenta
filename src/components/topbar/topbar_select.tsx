import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { cn } from "@/lib/utils";
import { SubCategoryResponseType } from "../../../types";
import Link from "next/link";

async function fetchSubCategories() {
  const res = await fetch("https://www.askcenta.ng/api/categoryGroups", {
    method: "OPTIONS",
    next: {
      revalidate: 3600 * 6,
    },
  });

  if (!res.ok) throw new Error("failed to fetch categories");

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
      <div>{subCategoryData?.category.trim()}</div>

      <Select>
        <SelectTrigger className="w-fit">
          <SelectValue placeholder={subCategoryData?.name.trim()} />
        </SelectTrigger>

        <SelectContent className="z-20 bg-white">
          <SelectGroup className="flex flex-col items-start gap-2">
            {category.map((subCategory) => {
              return (
                <a
                  href={`/?category_group_id=${subCategory.id}`}
                  className="w-fit"
                  key={subCategory.id}
                >
                  <SelectItem value={subCategory.id.toString()}>
                    <div>{subCategory.name.trim()}</div>
                  </SelectItem>
                </a>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
