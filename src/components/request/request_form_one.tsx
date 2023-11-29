import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { UseFormReturn } from "react-hook-form";
import CategoryModal from "../modal/category_modal";
import { CategoryType, CityType, SubCategoryType } from "@/types";
import LocationModal from "../modal/location_modal";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface RequestFormOneProps extends React.HTMLAttributes<typeof FormField> {
  form: UseFormReturn<
    {
      title: string;
      description: string;
      category: string;
      location: string;
    },
    any,
    undefined
  >;
  selectedcategory: CategoryType | null;
  setselectedcategory: React.Dispatch<
    React.SetStateAction<CategoryType | null>
  >;
  selectedsubcategory: SubCategoryType | null;
  setselectedsubcategory: React.Dispatch<
    React.SetStateAction<SubCategoryType | null>
  >;
  subcategoriesdata: SubCategoryType[];
  categoriesdata: CategoryType[];
  selectedstate: {
    id: number;
    name: string;
  } | null;
  setselectedstate: React.Dispatch<
    React.SetStateAction<{
      id: number;
      name: string;
    } | null>
  >;
  selectedcity: CityType | null;
  setselectedcity: React.Dispatch<React.SetStateAction<CityType | null>>;
  citiesdata: CityType[];
  statesdata: { id: number; name: string }[];
}

export default function RequestFormOne({
  className,
  form,
  citiesdata,
  statesdata,
  categoriesdata,
  subcategoriesdata,
  selectedcategory,
  selectedcity,
  selectedstate,
  selectedsubcategory,
  setselectedcategory,
  setselectedcity,
  setselectedstate,
  setselectedsubcategory,
  ...props
}: RequestFormOneProps) {
  return (
    <div className={cn("", className)}>
      <FormField
        control={form.control}
        name="title"
        render={({ field }) => (
          <FormItem>
            <div className="flex justify-between items-center">
              <FormLabel className="font-roboto font-medium text-base text-black">
                Briefly Describe what you need
              </FormLabel>

              <span className="font-roboto font-normal text-xs text-black opacity-60">
                140 char max
              </span>
            </div>

            <FormMessage />
            <FormControl>
              <textarea
                placeholder="You can start with... “I want”, “Who can”, “I need”, “I am looking for” etc."
                {...field}
                className="mt-2 w-full p-4 bg-[#F7F9FF] border border-[#D9D9D9] rounded-2xl font-roboto font-normal text-lg opacity-80 text-black placeholder:font-roboto placeholder:font-normal placeholder:text-lg placeholder:opacity-50 placeholder:text-black"
                rows={4}
              />
            </FormControl>
          </FormItem>
        )}
      />

      {/* category  */}
      <FormField
        control={form.control}
        name="category"
        render={({ field }) => (
          <FormItem className="mt-8">
            <div className="flex justify-between items-center">
              <FormLabel className="font-roboto font-medium text-base text-black">
                Category
              </FormLabel>
            </div>

            <FormMessage />
            <FormControl>
              <input
                type="text"
                className="hidden"
                {...field}
                name="category"
              />
            </FormControl>
            <CategoryModal
              subcategoriesdata={subcategoriesdata}
              categoriesdata={categoriesdata}
              selectedSubCategory={selectedsubcategory}
              selectedCategory={selectedcategory}
              setSelectedSubCategory={setselectedsubcategory}
              setSelectedCategory={setselectedcategory}
            >
              <Button
                className={cn(
                  "mt-2 p-3 font-roboto font-normal text-base text-black justify-start opacity-70 w-full border border-[#D9D9D9] rounded-xl bg-[#F7F9FF]",
                  selectedsubcategory && "opacity-80"
                )}
              >
                {selectedsubcategory
                  ? selectedsubcategory.name
                  : "Select Category"}
              </Button>
            </CategoryModal>
          </FormItem>
        )}
      />

      {/* location  */}
      <FormField
        control={form.control}
        name="location"
        render={({ field }) => (
          <FormItem className="mt-8">
            <div className="flex justify-between items-center">
              <FormLabel className="font-roboto font-medium text-base text-black">
                Location
              </FormLabel>
            </div>

            <FormMessage />
            <FormControl>
              <input
                type="text"
                className="hidden"
                {...field}
                name="location"
              />
            </FormControl>
            <LocationModal
              citiesdata={citiesdata}
              statesdata={statesdata}
              selectedCity={selectedcity}
              selectedState={selectedstate}
              setSelectedCity={setselectedcity}
              setSelectedState={setselectedstate}
            >
              <Button
                className={cn(
                  "mt-2 p-3 font-roboto font-normal text-base text-black justify-start opacity-70 w-full border border-[#D9D9D9] rounded-xl bg-[#F7F9FF]",
                  selectedcity && "opacity-80"
                )}
              >
                {selectedcity ? selectedcity.city : "Select City"}
              </Button>
            </LocationModal>
          </FormItem>
        )}
      />
    </div>
  );
}
