"use client";

import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../ui/dialog";
import CloseIcon from "../icons/close_icon";
import { Button, ButtonProps } from "../ui/button";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CategoryType, CityType, SubCategoryType } from "../../../types";
import CategoryModal from "../modal/category_modal";
import { cn } from "@/lib/utils";
import LocationModal from "../modal/location_modal";

const requestFormSchema = z.object({
  title: z
    .string()
    .min(32, { message: "Description must be at least 32 characters." })
    .max(120, { message: "Description cannot be more than 120 characters" }),
  category: z.string().min(1, { message: "Please select a category" }),
  location: z.string().min(1, { message: "Please select a location" }),
});

interface RequestFormProps extends React.HTMLAttributes<HTMLDivElement> {
  citiesdata: CityType[];
  statesdata: { id: number; name: string }[];
  categoriesdata: CategoryType[];
  subCategoriesdata: SubCategoryType[];
}

export default function RequestForm({
  className,
  citiesdata,
  statesdata,
  categoriesdata,
  subCategoriesdata,
  children,
}: RequestFormProps) {
  const [selectedSubCategory, setSelectedSubCategory] =
    React.useState<SubCategoryType | null>(null);
  const [selectedCategory, setSelectedCategory] =
    React.useState<CategoryType | null>(null);
  const [selectedCity, setSelectedCity] = React.useState<CityType | null>(null);
  const [selectedState, setSelectedState] = React.useState<{
    id: number;
    name: string;
  } | null>(null);

  // 1. Define your form.
  const form = useForm<z.infer<typeof requestFormSchema>>({
    resolver: zodResolver(requestFormSchema),
    defaultValues: {
      title: "",
      category: "",
      location: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof requestFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  React.useEffect(() => {
    form.setValue("category", selectedSubCategory?.id.toString() || "");
    form.setValue("location", selectedCity?.id.toString() || "");
  }, [selectedSubCategory, selectedCity, form]);

  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <div className="h-full flex flex-col px-4 py-10 pb-10">
          <div className="flex justify-between items-center">
            <h2 className="font-poppins font-semibold text-base text-[#011B39]">
              PLACE A REQUEST
            </h2>

            <DialogClose>
              <Button>
                <CloseIcon />
              </Button>
            </DialogClose>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 mt-12 h-full flex flex-col justify-between overflow-y-auto"
            >
              <div>
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
                          120 char max
                        </span>
                      </div>

                      <FormMessage />
                      <FormControl>
                        <textarea
                          placeholder="You can start with... “I want”, “Who can”, “I need”, “I am looking for” etc."
                          {...field}
                          className="w-full p-4 bg-[#F7F9FF] border border-[#D9D9D9] rounded-2xl font-roboto font-normal text-lg opacity-80 text-black placeholder:font-roboto placeholder:font-normal placeholder:text-lg placeholder:opacity-50 placeholder:text-black"
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
                        subcategoriesdata={subCategoriesdata}
                        categoriesdata={categoriesdata}
                        selectedSubCategory={selectedSubCategory}
                        selectedCategory={selectedCategory}
                        setSelectedSubCategory={setSelectedSubCategory}
                        setSelectedCategory={setSelectedCategory}
                      >
                        <Button
                          className={cn(
                            "p-3 font-roboto font-normal text-base text-black justify-start opacity-70 w-full border border-[#D9D9D9] rounded-xl bg-[#F7F9FF]",
                            selectedSubCategory && "opacity-80"
                          )}
                        >
                          {selectedSubCategory
                            ? selectedSubCategory.name
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
                          Your Location
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
                        selectedCity={selectedCity}
                        selectedState={selectedState}
                        setSelectedCity={setSelectedCity}
                        setSelectedState={setSelectedState}
                      >
                        <Button
                          className={cn(
                            "p-3 font-roboto font-normal text-base text-black justify-start opacity-70 w-full border border-[#D9D9D9] rounded-xl bg-[#F7F9FF]",
                            selectedCity && "opacity-80"
                          )}
                        >
                          {selectedCity ? selectedCity.city : "Select City"}
                        </Button>
                      </LocationModal>
                    </FormItem>
                  )}
                />
              </div>

              <div className="w-full flex items-center justify-center">
                <Button
                  type="submit"
                  className="w-full rounded-[24px] bg-[#6356E5] font-roboto font-medium text-base text-white py-3 max-w-[358px]"
                >
                  Next
                </Button>
              </div>
            </form>
          </Form>
        </div>

        {/* <CategoryModal
          subcategoriesdata={subCategoriesdata}
          categoriesdata={categoriesdata}
          selectedSubCategory={selectedSubCategory}
          selectedCategory={selectedCategory}
          setSelectedSubCategory={setSelectedSubCategory}
          setSelectedCategory={setSelectedCategory}
        >
          <Button
            className={cn(
              "p-3 font-roboto font-normal text-base text-black justify-start opacity-70 w-full border border-[#D9D9D9] rounded-xl bg-[#F7F9FF] md:max-w-[70%]",
              selectedSubCategory && "opacity-80"
            )}
            ref={triggerButtonRef}
          >
            {selectedSubCategory ? selectedSubCategory.name : "Select Category"}
          </Button>
        </CategoryModal> */}
      </DialogContent>
    </Dialog>
  );
}
