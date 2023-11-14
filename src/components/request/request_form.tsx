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
import { CategoryType, CityType, SubCategoryType } from "@/types";
import RequestFormOne from "./request_form_one";
import RequestFormTwo from "./request_form_two";
import { cn } from "@/lib/utils";
import { KeyboardBackspaceIcon, CloseIcon } from "../icons";
import { DialogProps } from "@radix-ui/react-dialog";
import { placeRequestAction } from "@/actions";
import LoadingSpinner from "../load_spinner";
import { redirect } from "next/navigation";

const requestFormSchema = z.object({
  title: z
    .string()
    .min(20, { message: "Description must be at least 20 characters." })
    .max(140, { message: "Description cannot be more than 140 characters" }),
  category: z.string().min(1, { message: "Please select a category" }),
  location: z.string().min(1, { message: "Please select a location" }),
  description: z.string(),
});

interface RequestFormProps extends React.HTMLAttributes<DialogProps> {
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
      const res = await placeRequestAction(formdata);

      if (res.isError) {
        res.errors.title &&
          form.setError("title", { message: res.errors.title[0] });
        setIsPosting(false);
        return;
      }

      console.log(res);
      setIsPosting(false);
      const triggerBtn = document.getElementById("request_form_modal_trigger");
      if (triggerBtn) {
        triggerBtn.click();
      }

      window.location.href = "/";
    } catch (err) {
      console.log(err);
      setIsPosting(false);
    }
  }

  function onBackClick() {
    setFormStep(formStep - 1);
  }

  function clearForm() {
    form.setValue("title", "");
    form.setValue("category", selectedSubCategory?.id.toString() || "");
    setSelectedSubCategory(null);
    form.setValue("location", selectedCity?.id.toString() || "");
    setSelectedCity(null);
    form.setValue("description", "");
    setImage(null);
    setFormStep(0);
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
                      {isPosting && "Posting Request"}
                      {!isPosting && "Post Request"}
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
