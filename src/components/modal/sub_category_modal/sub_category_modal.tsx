import React from "react";

import { ChevronRightIcon, KeyboardBackspaceIcon } from "../../icons";
import Link from "next/link";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../../ui/dialog";
import { SubCategoryResponseType } from "../../../../types";
import SubCategoryLink from "./sub_category_link";

interface SubCategoryModalProps extends React.HTMLAttributes<typeof Dialog> {
  categorygroup: string;
}

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

export default async function SubCategoryModal({
  categorygroup,
  children,
  ...props
}: SubCategoryModalProps) {
  const subCategoriesRes: Promise<SubCategoryResponseType> =
    fetchSubCategories();
  const subCategories = await subCategoriesRes;
  const subCategoriesData = subCategories.data.filter(
    (subCategory) =>
      subCategory.category.toLowerCase() === categorygroup.toLowerCase()
  );
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="bg-white top-[72px] h-[calc(100vh_-_72px)]">
        <div className="w-full flex flex-col py-4 md:p-8 border-t-2 border-black/5">
          <div className="px-4 w-fit h-fit">
            <DialogClose>
              <KeyboardBackspaceIcon aria-label="back" />
            </DialogClose>
          </div>

          <div className="uppercase mt-6 px-4 font-poppins font-semibold text-base md:text-xl text-[#4C4B60]">
            {categorygroup}
          </div>

          <div className="mt-2 flex flex-col gap-5">
            {subCategoriesData.map((subCategory) => {
              return (
                <SubCategoryLink
                  subcategory={subCategory}
                  key={subCategory.id}
                />
              );
            })}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
