import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { UseFormReturn } from "react-hook-form";
import LocationModal from "../modal/location_modal";
import { Button } from "../ui/button";
import { CityType } from "../../../types";
import { cn } from "@/lib/utils";

interface ResponseFormTwoProps extends React.HTMLAttributes<typeof FormField> {
  form: UseFormReturn<
    {
      title: string;
      location: string;
      // whatsappNum: string;
      // anonymous: boolean;
      description?: string | undefined;
    },
    any,
    undefined
  >;
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

export default function ResponseFormTwo({
  className,
  form,
  citiesdata,
  statesdata,
  selectedcity,
  selectedstate,
  setselectedcity,
  setselectedstate,
  ...props
}: ResponseFormTwoProps) {
  return (
    <div className={cn("", className)}>
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
              selectedCity={selectedcity}
              selectedState={selectedstate}
              setSelectedCity={setselectedcity}
              setSelectedState={setselectedstate}
            >
              <Button
                className={cn(
                  "p-3 font-roboto font-normal text-base text-black justify-start opacity-70 w-full border border-[#D9D9D9] rounded-xl bg-[#F7F9FF]",
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
