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
import { CityType } from "@/types";
import { cn } from "@/lib/utils";
import { RadioGroup, RadioGroupItem } from "../ui/radio";
import { WarningFillIcon } from "../icons";

interface ResponseFormTwoProps extends React.HTMLAttributes<typeof FormField> {
  form: UseFormReturn<
    {
      title: string;
      location: string;
      anonymous: "true" | "false";
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

      {/* anonymous  */}
      <FormField
        control={form.control}
        name="anonymous"
        render={({ field }) => (
          <FormItem className="mt-10">
            <FormLabel className="font-roboto font-medium text-base text-black">
              Who can see this response?
            </FormLabel>
            <FormControl className="mt-4 flex flex-col gap-4">
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className=""
              >
                <FormItem className="flex items-center gap-3">
                  <FormControl>
                    <RadioGroupItem value="false" />
                  </FormControl>
                  <FormLabel className="font-roboto font-normal text-base text-black">
                    Everyone
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center gap-3">
                  <FormControl>
                    <RadioGroupItem value="true" />
                  </FormControl>
                  <FormLabel className="font-roboto font-normal text-base text-black">
                    Only the owner of the request
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="flex flex-col mt-8">
        <div className="flex items-center gap-3">
          <WarningFillIcon />
          <span className="font-roboto font-normal text-sm text-black">
            NOTICE
          </span>
        </div>

        <p className="mt-3 font-roboto font-normal text-xs text-black">
          By responding, users that are interested in your offer will have
          permission to contact you on your{" "}
          <span className="text-[#05A0D7]">WhatsApp Messenger</span>.
        </p>
      </div>
    </div>
  );
}
