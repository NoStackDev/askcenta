import React from "react";
import { RequestForm } from ".";
import { cn } from "@/lib/utils";
import {
  CategoryType,
  CitiesResponseType,
  StateResponseType,
  SubCategoryResponseType,
} from "../../../types";
// import { fetchCities, fetchStates } from "@/helpers/location";
// import { fetchCategories, fetchSubCategories } from "@/helpers/category";

async function fetchCategories() {
  const res = await fetch("https://askcenta.ng/api/categories", {
    method: "OPTIONS",
    next: {
      revalidate: 3600 * 6,
    },
  });

  if (!res.ok)
    throw new Error(
      "failed to fetch categories from https://askcenta.ng/api/categories"
    );

  return res.json();
}

async function fetchSubCategories() {
  const res = await fetch("https://askcenta.ng/api/categoryGroups", {
    method: "OPTIONS",
    next: {
      revalidate: 3600 * 6,
    },
  });

  if (!res.ok)
    throw new Error(
      "failed to fetch categories from https://askcenta.ng/api/categoryGroups"
    );

  return res.json();
}

async function fetchCities() {
  const res = await fetch("https://www.askcenta.ng/api/cities", {
    method: "OPTIONS",
    next: {
      revalidate: 3600 * 6,
    },
  });

  if (!res.ok)
    throw new Error(
      "failed to fetch cities from https://www.askcenta.ng/api/cities"
    );

  return res.json();
}

async function fetchStates() {
  const res = await fetch("https://askcenta.ng/api/states", {
    method: "OPTIONS",
    next: {
      revalidate: 3600 * 6,
    },
  });

  if (!res.ok)
    throw new Error(
      "failed to fetch states from https://askcenta.ng/api/states"
    );

  return res.json();
}

export default  function RequestFormWrapper({
  className,
  children,
}: React.HTMLAttributes<typeof RequestForm>) {
  // const citiesRes: Promise<CitiesResponseType> = fetchCities();
  // const statesRes: Promise<StateResponseType> = fetchStates();
  // const categoriesRes: Promise<CategoryType[]> = fetchCategories();
  // const subCategoriesRes: Promise<SubCategoryResponseType> =
  //   fetchSubCategories();

  // const [cities, states, categories, subCategories] = await Promise.all([
  //   citiesRes,
  //   statesRes,
  //   categoriesRes,
  //   subCategoriesRes,
  // ]);

  return (
    // <RequestForm
    //   citiesdata={cities.data}
    //   statesdata={states.data}
    //   categoriesdata={categories}
    //   subCategoriesdata={subCategories.data}
    //   className={cn("", className)}
    // >
    //   {children}
    // </RequestForm>
    <div>lllll</div>
  );
}
