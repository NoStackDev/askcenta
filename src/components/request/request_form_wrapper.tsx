import React from "react";
import { RequestForm } from ".";
import { cn } from "@/lib/utils";
import {
  CategoryType,
  CitiesResponseType,
  StateResponseType,
  SubCategoryResponseType,
} from "../../../types";
import { fetchCities, fetchStates } from "@/api/location";
import { fetchCategories, fetchSubCategories } from "@/api/categories";

export default async function RequestFormWrapper({
  className,
  children,
}: React.HTMLAttributes<typeof RequestForm>) {
  const citiesRes: Promise<CitiesResponseType> = fetchCities();
  const statesRes: Promise<StateResponseType> = fetchStates();
  const categoriesRes: Promise<CategoryType[]> = fetchCategories();
  const subCategoriesRes: Promise<SubCategoryResponseType> =
    fetchSubCategories();

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
    >
      {children}
    </RequestForm>
  );
}
