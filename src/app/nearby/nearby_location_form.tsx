"use client";

import {
  ChevronRightIcon,
  LocationOnIcon,
  CloseIcon,
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import { CityType } from "../../../types";
import LocationModal from "@/components/modal/location_modal";

type Props = {
  cityid: string | string[] | undefined;
  citiesdata: CityType[];
  statesdata: { id: number; name: string }[];
};

export default function NearbyLocationForm({
  cityid,
  statesdata,
  citiesdata,
}: Props) {
  const [selectedCity, setSelectedCity] = React.useState<CityType | null>(null);
  const [selectedState, setSelectedState] = React.useState<{
    id: number;
    name: string;
  } | null>(null);

  const preSelectedLocation = citiesdata.find(
    (city) => city.id === Number(cityid)
  );

  return (
    <>
      <div className="flex gap-2 items-center font-roboto font-normal text-sm">
        <LocationOnIcon
          pathColor="#000000"
          aria-label="location"
          width="24"
          height="24"
        />

        {(preSelectedLocation || selectedCity) && (
          <span className="font-roboto font-normal text-sm text-black">
            {selectedCity ? selectedCity?.city : preSelectedLocation?.city}
          </span>
        )}
      </div>

      <Dialog>
        <DialogTrigger>
          <Button className="font-roboto font-medium text-xs text-[#6356E5]">
            Change Preferred Location
          </Button>
        </DialogTrigger>

        <DialogContent className="md:h-4/5">
          <div className="flex flex-col h-full pb-20">
            <div>
              <div className="flex items-center justify-between px-4 pt-10">
                <span className="font-poppins font-semibold text-base text-black">
                  PREFERRED LOCATION
                </span>
                <DialogClose>
                  <Button>
                    <CloseIcon aria-label="close" />
                  </Button>
                </DialogClose>
              </div>

              <div className="mt-10 flex flex-col px-4 gap-2">
                <span className="font-roboto font-medium text-sm text-black opacity-70">
                  Selected
                </span>

                {(preSelectedLocation || (selectedState && selectedCity)) && (
                  <span className="font-roboto font-medium text-base text-black">
                    {selectedState && selectedCity
                      ? `${selectedState.name}, ${selectedCity.city}`
                      : `${preSelectedLocation?.state}, ${preSelectedLocation?.city}`}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col justify-between px-4 gap-2 h-full mt-10">
              <div className="w-full">
                <p className="font-roboto font-medium text-base text-black">
                  Your Location
                </p>

                <LocationModal
                  citiesdata={citiesdata}
                  statesdata={statesdata}
                  selectedCity={selectedCity}
                  selectedState={selectedState}
                  setSelectedCity={setSelectedCity}
                  setSelectedState={setSelectedState}
                >
                  <Button className="px-4 py-3 w-full flex items-center justify-between bg-[#F7F9FF] border border-[#D9D9D9] rounded-xl font-roboto font-normal text-base text-black opacity-60">
                    Select city
                    <ChevronRightIcon className="rotate-90" />
                  </Button>
                </LocationModal>
              </div>

              <DialogClose>
                <a
                  href={`/nearby?city_id=${
                    selectedCity?.id || preSelectedLocation?.id
                  }`}
                  className=""
                >
                  <Button variant="request" className="mt-6 py-4 w-full">
                    Save & Continue
                  </Button>
                </a>
              </DialogClose>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
