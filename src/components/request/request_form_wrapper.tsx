import React from "react";
import { RequestForm } from ".";
import { cn } from "@/lib/utils";
import {
  CategoryType,
  CitiesResponseType,
  StateResponseType,
  SubCategoryResponseType,
} from "@/types";
import { fetchCities, fetchStates } from "@/api/location";
import { fetchCategories, fetchSubCategories } from "@/api/category";
import { DialogProps } from "@radix-ui/react-dialog";

export default async function RequestFormWrapper({
  className,
  children,
  ...props
}: React.HTMLAttributes<DialogProps>) {
  const citiesRes: Promise<CitiesResponseType> = fetchCities();
  // const cities = await citiesRes;
  const statesRes: Promise<StateResponseType> = fetchStates();
  // const states = await statesRes;
  const categoriesRes: Promise<CategoryType[]> = fetchCategories();
  // const categories = await categoriesRes;
  const subCategoriesRes: Promise<SubCategoryResponseType> =
    fetchSubCategories();
  // const subCategories = await subCategoriesRes;

  const [cities, states, categories, subCategories] = await Promise.all([
    citiesRes,
    statesRes,
    categoriesRes,
    subCategoriesRes,
  ]);

  return (
    <RequestForm
      citiesdata={cities.data}
      statesdata={states.data}
      categoriesdata={categories}
      subCategoriesdata={subCategories.data}
      className={cn("", className)}
      {...props}
    >
      {children}
    </RequestForm>
  );
}
