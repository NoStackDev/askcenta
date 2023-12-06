import React from "react";

import { CancelIcon } from "../../icons";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../../ui/dialog";
import { SubCategoryResponseType } from "@/types";
import SubCategoryLink from "./sub_category_link";
import { fetchSubCategories } from "@/api/category";

interface SubCategoryModalProps extends React.HTMLAttributes<typeof Dialog> {
  categorygroup: string;
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
      <DialogTrigger>{children}</DialogTrigger>

      <DialogContent className="bg-white top-[72px] h-[calc(100vh_-_72px)] md:h-4/5 flex flex-col pb-4 md:pb-8 border-t-2 border-black/5 overflow-y-auto overflow-x-hidden">
        <div className="bg-white w-full py-4 md:pt-8 md:p flex justify-between items-start sticky top-0 z-40">
          <h3 className="uppercase px-4 font-poppins font-semibold text-base md:text-xl text-[#4C4B60]">
            {categorygroup}
          </h3>

          <div className="px-4 w-fit h-fit">
            <DialogClose>
              <CancelIcon aria-label="back" />
            </DialogClose>
          </div>
        </div>

        <div className="mt-5 mb-20 flex flex-col gap-5">
          {subCategoriesData.map((subCategory) => {
            return (
              <SubCategoryLink subcategory={subCategory} key={subCategory.id} />
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
}
