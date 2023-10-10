import { KeyboardBackspaceIcon, TuneIcon } from "@/components/icons";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import {
  CategoryType,
  CitiesResponseType,
  StateResponseType,
  SubCategoryResponseType,
} from "../../../types";
import CustomCustomizeForm from "./custom_customize_form";
import { Button } from "@/components/ui/button";

async function fetchCities() {
  const res = await fetch("https://www.askcenta.ng/api/cities", {
    method: "OPTIONS",
    next: {
      revalidate: 3600 * 6,
    },
  });

  if (!res.ok) throw new Error("failed to fetch cities");

  return res.json();
}

async function fetchStates() {
  const res = await fetch("https://askcenta.ng/api/states", {
    method: "OPTIONS",
    next: {
      revalidate: 3600 * 6,
    },
  });

  if (!res.ok) throw new Error("failed to fetch states");

  return res.json();
}

async function fetchCategories() {
  const res = await fetch("https://askcenta.ng/api/categories", {
    method: "OPTIONS",
    next: {
      revalidate: 3600 * 6,
    },
  });

  if (!res.ok) throw new Error("failed to fetch categories");

  return res.json();
}

async function fetchSubCategories() {
  const res = await fetch("https://askcenta.ng/api/categoryGroups", {
    method: "OPTIONS",
    next: {
      revalidate: 3600 * 6,
    },
  });

  if (!res.ok) throw new Error("failed to fetch categories");

  return res.json();
}

interface CustomTopbarProps extends React.HTMLAttributes<HTMLDivElement> {
  searchparams: { [key: string]: string | string[] | undefined };
}

export default async function CustomTopbar({
  className,
  searchparams,
  ...props
}: CustomTopbarProps) {
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
    <Card variant="settings" className={cn("", className)} {...props}>
      <Link href="/">
        <KeyboardBackspaceIcon />
      </Link>

      <div className="flex justify-between items-center mt-6">
        <span className="font-poppins font-semibold text-base text-[#4C4B60]">
          CUSTOM REQUESTS
        </span>

        <CustomCustomizeForm
          citiesdata={cities.data}
          statesdata={states.data}
          categoriesdata={categories}
          subCategoriesdata={subCategories.data}
          searchparams={searchparams}
        >
          <Button
            aria-label="customize requests"
            className={cn("flex items-center gap-2")}
          >
            <TuneIcon />

            <span className="font-roboto font-medium text-base text-[#6356E5]">
              Customize
            </span>
          </Button>
        </CustomCustomizeForm>
      </div>
    </Card>
  );
}
