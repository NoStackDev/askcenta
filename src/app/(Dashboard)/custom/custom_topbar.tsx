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
} from "@/types";
import CustomCustomizeForm from "./custom_customize_form";
import { Button } from "@/components/ui/button";
import { fetchCities, fetchStates } from "@/api/location";
import { fetchCategories, fetchSubCategories } from "@/api/category";
import { cookies } from "next/headers";

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
  const cookie = cookies();
  const user = JSON.parse(cookie.get("user")?.value || "null");

  const [cities, states, categories, subCategories] = await Promise.all([
    citiesRes,
    statesRes,
    categoriesRes,
    subCategoriesRes,
  ]);

  return (
    <Card
      variant="settings"
      className={cn("bg-linear-bg-gradient bg-no-repeat bg-cover", className)}
      {...props}
    >
      <Link href="/">
        <KeyboardBackspaceIcon />
      </Link>

      <div className="flex justify-between items-center mt-6">
        <span className="font-poppins font-semibold text-base text-black">
          CUSTOM REQUESTS
        </span>

        <CustomCustomizeForm
          citiesdata={cities.data}
          statesdata={states.data}
          categoriesdata={categories}
          subCategoriesdata={subCategories.data}
          searchparams={searchparams}
          user={user}
        >
          <Button
            aria-label="customize requests"
            className={cn("flex items-center gap-2 bg-white rounded h-10 w-10")}
          >
            <TuneIcon />

            {/* <span className="font-roboto font-medium text-base text-[#6356E5]">
              Customize
            </span> */}
          </Button>
        </CustomCustomizeForm>
      </div>
    </Card>
  );
}
