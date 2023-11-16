"use client";

import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Form } from "@/components/ui/form";
import {
  CategoryType,
  CityType,
  RequestDetailType,
  SubCategoryType,
} from "@/types";
import RequestFormOne from "./request_form_one";
import RequestFormTwo from "./request_form_two";
import { cn } from "@/lib/utils";
import { KeyboardBackspaceIcon, CloseIcon } from "../icons";
import { DialogProps } from "@radix-ui/react-dialog";
import { placeRequestAction, updateRequestAction } from "@/actions";
import LoadingSpinner from "../load_spinner";
import { fetchCities } from "@/api/location";
import { fetchSubCategories } from "@/api/category";

const requestFormSchema = z.object({
  title: z
    .string()
    .min(8, { message: "Title must be at least 8 characters." })
    .max(140, { message: "Title cannot be more than 140 characters" }),
  category: z.string().min(1, { message: "Please select a category" }),
  location: z.string().min(1, { message: "Please select a location" }),
  description: z.string(),
});

interface RequestFormProps extends React.HTMLAttributes<DialogProps> {
  citiesdata: CityType[];
  statesdata: { id: number; name: string }[];
  categoriesdata: CategoryType[];
  subCategoriesdata: SubCategoryType[];
  prevRequestData?: RequestDetailType;
}

export default function RequestForm({
  className,
  citiesdata,
  statesdata,
  categoriesdata,
  subCategoriesdata,
  prevRequestData,
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
  const [image, setImage] = React.useState<File | null>(null);
  const [formStep, setFormStep] = React.useState(0);
  const [isPosting, setIsPosting] = React.useState(false);

  const form = useForm<z.infer<typeof requestFormSchema>>({
    resolver: zodResolver(requestFormSchema),
    defaultValues: {
      title: "",
      category: "",
      location: "",
      description: "",
    },
  });

  React.useEffect(() => {
    async function handleCity() {
      const _citiesData: Promise<{ data: CityType[] }> = fetchCities();
      setSelectedCity(
        (await _citiesData).data.find(
          (city) => city.city === prevRequestData?.request.location
        ) || null
      );
    }

    async function handleSubCategory() {
      const _subCategoryData: Promise<{ data: SubCategoryType[] }> =
        fetchSubCategories();
      setSelectedSubCategory(
        (await _subCategoryData).data.find(
          (subCategory) =>
            subCategory.name === prevRequestData?.request.category
        ) || null
      );
    }

    if (prevRequestData) {
      form.setValue("title", prevRequestData.request.title);
      form.setValue("description", prevRequestData.request.description || "");

      handleCity();
      handleSubCategory();
    }
  }, []);

  async function onSubmit(values: z.infer<typeof requestFormSchema>) {
    if (formStep < 1) {
      setFormStep(formStep + 1);
      return;
    }

    setIsPosting(true);

    const formdata = new FormData();
    formdata.append("title", values.title);
    formdata.append("category_group_id", values.category);
    formdata.append("location_id", values.location);
    formdata.append("description", values.description);
    image && formdata.append("image", image, values.title);

    try {
      const res = prevRequestData
        ? await updateRequestAction(prevRequestData.request.id, formdata)
        : await placeRequestAction(formdata);

      if (res.isError) {
        res.errors.title &&
          form.setError("title", { message: res.errors.title[0] });
        setIsPosting(false);
        return;
      }

      console.log(res);

      prevRequestData ? window.location.reload() : (window.location.href = "/");
      const timeoutId = setTimeout(() => setIsPosting(false), 3000);
      clearTimeout(timeoutId);
    } catch (err) {
      console.log(err);
      setIsPosting(false);
    }
  }

  function onBackClick() {
    setFormStep(formStep - 1);
  }

  function clearForm() {
    if (!prevRequestData) {
      form.setValue("title", "");
      form.setValue("category", selectedSubCategory?.id.toString() || "");
      setSelectedSubCategory(null);
      form.setValue("location", selectedCity?.id.toString() || "");
      setSelectedCity(null);
      form.setValue("description", "");
      setImage(null);
      setFormStep(0);
    }
  }

  React.useEffect(() => {
    form.setValue("category", selectedSubCategory?.id.toString() || "");
    form.setValue("location", selectedCity?.id.toString() || "");
  }, [selectedSubCategory, selectedCity]);

  return (
    <Dialog onOpenChange={(open) => !open && clearForm()}>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <div className="h-full flex flex-col px-4 py-10 pb-20 md:pb-10">
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
              className="space-y-8 mt-12 h-full flex flex-col justify-between"
            >
              <div className="relative overflow-x-clip overflow-y-auto h-full">
                <RequestFormOne
                  form={form}
                  subcategoriesdata={subCategoriesdata}
                  categoriesdata={categoriesdata}
                  selectedsubcategory={selectedSubCategory}
                  selectedcategory={selectedCategory}
                  setselectedsubcategory={setSelectedSubCategory}
                  setselectedcategory={setSelectedCategory}
                  citiesdata={citiesdata}
                  statesdata={statesdata}
                  selectedcity={selectedCity}
                  selectedstate={selectedState}
                  setselectedcity={setSelectedCity}
                  setselectedstate={setSelectedState}
                  className={cn(
                    "h-fit w-full absolute transition-all animate-dialogFirstContentShow",
                    formStep !== 0 && "hidden"
                  )}
                />
                <RequestFormTwo
                  form={form}
                  imageUrl={prevRequestData?.request.image_url}
                  setimage={setImage}
                  className={cn(
                    "h-fit w-full absolute left-full transition-all duration-150 ease-in-out",
                    formStep !== 0 && "left-0"
                  )}
                />
              </div>

              <div className="w-full flex items-center justify-center z-3">
                {formStep === 0 && (
                  <Button
                    type="submit"
                    className="w-full rounded-[24px] bg-request-gradient font-roboto font-medium text-base text-white py-3 max-w-[358px]"
                  >
                    Next
                  </Button>
                )}

                {formStep > 0 && (
                  <div className="w-full flex items-center justify-between">
                    <Button onClick={onBackClick}>
                      <KeyboardBackspaceIcon width="24" height="24" />
                    </Button>

                    <Button
                      type="submit"
                      className="rounded-[24px] bg-request-gradient font-roboto font-medium text-base text-white py-3 px-12 flex items-center gap-2"
                    >
                      {isPosting && <LoadingSpinner />}
                      {isPosting && !prevRequestData && "Posting Request"}
                      {!isPosting && !prevRequestData && "Post Request"}
                      {isPosting && prevRequestData && "Updating Request"}
                      {!isPosting && prevRequestData && "Update Request"}
                    </Button>
                  </div>
                )}
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
