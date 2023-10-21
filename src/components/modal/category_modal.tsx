"use client";

import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { ChevronRightIcon, KeyboardBackspaceIcon } from "../icons";
import { CategoryType, SubCategoryType } from "../../../types";
import { cn } from "@/lib/utils";
import { DialogProps } from "@radix-ui/react-dialog";

interface CategoryModalProps extends DialogProps {
  selectedCategory: CategoryType | null;
  setSelectedCategory: React.Dispatch<
    React.SetStateAction<CategoryType | null>
  >;
  selectedSubCategory: SubCategoryType | null;
  setSelectedSubCategory: React.Dispatch<
    React.SetStateAction<SubCategoryType | null>
  >;
  subcategoriesdata: SubCategoryType[];
  categoriesdata: CategoryType[];
}

export default function CategoryModal({
  children,
  subcategoriesdata,
  categoriesdata,
  selectedCategory,
  selectedSubCategory,
  setSelectedCategory,
  setSelectedSubCategory,
  ...props
}: CategoryModalProps) {
  const contentDivRef = React.useRef<HTMLDivElement>(null);

  const selectedCategorySubs = selectedCategory
    ? subcategoriesdata.filter(
        (subCategory) => subCategory.category === selectedCategory.title
      )
    : [];

  const scrollToTop = () => {
    if (contentDivRef.current) {
      contentDivRef.current.scrollTop = 0;
    }
  };

  return (
    <Dialog
      onOpenChange={(open) => {
        open && setSelectedCategory(null);
      }}
      {...props}
    >
      <DialogTrigger>{children}</DialogTrigger>

      <DialogContent className="md:h-4/5 py-8">
        <div
          className="h-full relative overflow-y-auto overflow-x-hidden"
          ref={contentDivRef}
          {...props}
        >
          <div className="mb-4 border-b border-[#D9D9D9] sticky top-0 bg-white z-40">
            <h2 className="font-poppins font-semibold text-base text-black px-6">
              SELECT CATEGORY
            </h2>

            <div className="flex items-center gap-4 px-6 mt-8 mb-4">
              {!selectedCategory && (
                <DialogClose>
                  <Button>
                    <KeyboardBackspaceIcon aria-label="back" />
                  </Button>
                </DialogClose>
              )}

              {selectedCategory && (
                <Button
                  onClick={() => {
                    setSelectedCategory(null);
                    scrollToTop();
                  }}
                >
                  <KeyboardBackspaceIcon aria-label="back" />
                </Button>
              )}

              <h3 className="font-roboto font-medium text-base text-black">
                {selectedCategory ? selectedCategory.title : "Categories"}
              </h3>
            </div>
          </div>

          <div className="h-full relative z-30">
            <div
              className={cn(
                "h-fit w-full flex flex-col gap-8 items-start px-6 pb-20 absolute transition-all animate-dialogFirstContentShow",
                selectedCategory && "hidden"
              )}
            >
              {categoriesdata
                .filter(
                  (category) =>
                    category.title.toLowerCase().trim() !== "missing item"
                )
                .map((category) => {
                  return (
                    <Button
                      key={category.id}
                      className="w-full py-2 flex items-center justify-between hover:scale-105"
                      onClick={() => {
                        setSelectedCategory(category);
                        scrollToTop();
                      }}
                    >
                      <span className="font-roboto font-normal text-lg text-black">
                        {category.title}
                      </span>
                      <ChevronRightIcon
                        aria-label={`${category.title} button`}
                        className="opacity-40"
                        width="24"
                        height="24"
                      />
                    </Button>
                  );
                })}
            </div>

            <div
              className={cn(
                "h-fit w-full flex flex-col gap-8 items-start px-6 pb-20 absolute left-full transition-all duration-150 ease-in-out",
                selectedCategory && "left-0"
              )}
            >
              {selectedCategorySubs.map((subCategory) => {
                return (
                  <DialogClose key={subCategory.id}>
                    <Button
                      className="w-full py-2 flex items-center justify-between hover:scale-105"
                      onClick={() => setSelectedSubCategory(subCategory)}
                    >
                      <span className="font-roboto font-normal text-lg text-black">
                        {subCategory.name}
                      </span>
                      <ChevronRightIcon
                        aria-label={`${subCategory.name} button`}
                        className="opacity-40"
                        width="24"
                        height="24"
                      />
                    </Button>
                  </DialogClose>
                );
              })}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
