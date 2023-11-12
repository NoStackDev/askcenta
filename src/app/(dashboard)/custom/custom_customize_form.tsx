"use client";

import { CloseIcon } from "@/components/icons";
import LocationModal from "@/components/modal/location_modal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import React from "react";
import CategoryModal from "@/components/modal/category_modal";
import { DialogProps } from "@radix-ui/react-dialog";
import { CategoryType, CityType, SubCategoryType } from "../../../../types";

interface CustomCustomizeFormProps extends DialogProps {
  citiesdata: CityType[];
  statesdata: { id: number; name: string }[];
  categoriesdata: CategoryType[];
  subCategoriesdata: SubCategoryType[];
  searchparams: { [key: string]: string | string[] | undefined };
}
export default function CustomCustomizeForm({
  children,
  citiesdata,
  statesdata,
  categoriesdata,
  subCategoriesdata,
  searchparams,
  ...props
}: CustomCustomizeFormProps) {
  const [selectedSubCategory, setSelectedSubCategory] =
    React.useState<SubCategoryType | null>(null);
  const [selectedCategory, setSelectedCategory] =
    React.useState<CategoryType | null>(null);
  const [selectedSubcategories, setSelectedSubcategories] = React.useState<
    SubCategoryType[]
  >([]);
  const [selectedCity, setSelectedCity] = React.useState<CityType | null>(null);
  const [selectedState, setSelectedState] = React.useState<{
    id: number;
    name: string;
  } | null>(null);
  const [selectedCities, setSelectedCities] = React.useState<CityType[]>([]);

  React.useEffect(() => {
    let preSelectedCities: CityType[] = [];
    let preSelectedSubCategories: SubCategoryType[] = [];
    if (searchparams["city_id"]) {
      (searchparams["city_id"] as string).split(",").forEach((id) => {
        let foundCity = citiesdata.find((city) => city.id.toString() === id);
        foundCity ? preSelectedCities.push(foundCity) : null;
      });
    }
    if (searchparams["category_group_id"]) {
      (searchparams["category_group_id"] as string).split(",").forEach((id) => {
        let foundSubCategory = subCategoriesdata.find(
          (subCategory) => subCategory.id.toString() === id
        );
        foundSubCategory
          ? preSelectedSubCategories.push(foundSubCategory)
          : null;
      });
    }

    setSelectedCities([...preSelectedCities]);
    setSelectedSubcategories([...preSelectedSubCategories]);
  }, []);

  const addCity = () => {
    if (selectedCity) {
      const newSelectedCities = selectedCities.find(
        (city) => city.id === selectedCity.id
      );

      !newSelectedCities
        ? setSelectedCities([...selectedCities, selectedCity])
        : null;

      setSelectedCity(null);
      return;
    }
    return;
  };

  const addSubCategory = () => {
    if (selectedSubCategory) {
      const newSelectedSubCategories = selectedSubcategories.find(
        (subCategory) => subCategory.id === selectedSubCategory.id
      );

      !newSelectedSubCategories
        ? setSelectedSubcategories([
            ...selectedSubcategories,
            selectedSubCategory,
          ])
        : null;

      setSelectedSubCategory(null);
      return;
    }
    return;
  };

  const removeCity = (city: CityType) => {
    const newSelectedCities = selectedCities.filter(
      (oldCity) => oldCity.id !== city.id
    );
    setSelectedCities(newSelectedCities);
  };

  const removeSubCategory = (subCategory: SubCategoryType) => {
    const newSelectedSubCategories = selectedSubcategories.filter(
      (oldSubCategory) => oldSubCategory.id !== subCategory.id
    );
    setSelectedSubcategories(newSelectedSubCategories);
  };

  const onSave = () => {
    const url = new URL(window.location.href);
    url.searchParams.delete("city_id");
    url.searchParams.delete("category_group_id");
    if (selectedCities.length > 0) {
      url.searchParams.append(
        "city_id",
        selectedCities.map((city) => city.id.toString()).toString()
      );
    }
    if (selectedSubcategories.length > 0) {
      url.searchParams.append(
        "category_group_id",
        selectedSubcategories
          .map((subCategory) => subCategory.id.toString())
          .toString()
      );
    }
    window.location.href = url.href;
  };

  return (
    <Dialog {...props}>
      <DialogTrigger>{children}</DialogTrigger>

      <DialogContent className="bg-[#F7F7F9] flex flex-col justify-between pb-20 overflow-y-auto">
        <div>
          <Card variant="settings" className="pt-10 sticky top-0 z-40">
            <CardContent>
              <div className="flex justify-between items-center">
                <h2 className="font-poppins font-semibold text-base text-black">
                  CUSTOMIZE REQUESTS
                </h2>

                <DialogClose>
                  <div>
                    <CloseIcon />
                  </div>
                </DialogClose>
              </div>

              <p className="font-roboto font-normal text-xs text-black opacity-70 mt-5">
                Choose requests made on what you do or sell and get notified on
                people seeking for your offer in real time
              </p>
            </CardContent>
          </Card>

          {/* category  */}
          <Card variant="settings" className="mt-2">
            <CardContent>
              <h3 className="font-roboto font-medium text-base text-black">
                Category
              </h3>

              <p className="font-roboto font-normal text-xs text-black opacity-70 mt-2">
                Select the categories of what you deal on
              </p>

              <div className="flex items-center gap-6 md:justify-between mt-4">
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
                      "p-3 font-roboto font-normal text-base text-black justify-start opacity-70 w-full border border-[#D9D9D9] rounded-xl bg-[#F7F9FF] md:max-w-[70%]",
                      selectedSubCategory && "opacity-80"
                    )}
                  >
                    {selectedSubCategory
                      ? selectedSubCategory.name
                      : "Select Category"}
                  </Button>
                </CategoryModal>

                <Button
                  className="font-roboto font-medium text-base text-[#6356E5] border border-[#6356E5] p-3 rounded-xl"
                  onClick={addSubCategory}
                >
                  Add
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-10">
                {selectedSubcategories.map((subCategory) => {
                  return (
                    <div
                      className="bg-[#F3F6F6] rounded-[15px] py-2 px-3 font-roboto font-normal text-sm text-black opacity-70 flex items-center gap-3 w-fit hover:cursor-pointer"
                      key={subCategory.id}
                      onClick={() => removeSubCategory(subCategory)}
                    >
                      <span>{subCategory.name}</span>
                      <CloseIcon width="12" height="12" />
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* location  */}
          <Card variant="settings" className="mt-2">
            <CardContent>
              <h3 className="font-roboto font-medium text-base text-black">
                Location
              </h3>

              <p className="font-roboto font-normal text-xs text-black opacity-70 mt-2">
                Choose locations your services can easily reach
              </p>

              <div className="flex items-center gap-6 md:justify-between mt-4">
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
                      "p-3 font-roboto font-normal text-base text-black justify-start opacity-70 w-full border border-[#D9D9D9] rounded-xl bg-[#F7F9FF] md:max-w-[70%]",
                      selectedCity && "opacity-80"
                    )}
                  >
                    {selectedCity ? selectedCity.city : "Select City"}
                  </Button>
                </LocationModal>

                <Button
                  className="font-roboto font-medium text-base text-[#6356E5] border border-[#6356E5] p-3 rounded-xl"
                  onClick={addCity}
                >
                  Add
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-10">
                {selectedCities.map((city) => {
                  return (
                    <div
                      className="bg-[#F3F6F6] rounded-[15px] py-2 px-3 font-roboto font-normal text-sm text-black opacity-70 flex items-center gap-3 w-fit hover:cursor-pointer"
                      key={city.id}
                      onClick={() => removeCity(city)}
                    >
                      <span>{city.city}</span>
                      <CloseIcon width="12" height="12" />
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="px-4">
          <DialogClose>
            <Button
              variant="request"
              className="py-4 w-full md:max-w-[500px]"
              onClick={onSave}
            >
              Save & Continue
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
