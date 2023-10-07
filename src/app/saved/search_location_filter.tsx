"use client";

import LocationModal from "@/components/modal/location_modal";
import React from "react";
import { CityType } from "../../../types";
import { DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { LocationOnIcon } from "@/components/icons";

interface SearchLocationFilterProps
  extends React.HTMLAttributes<typeof LocationModal> {
  cityid: string | string[] | undefined;
  citiesdata: CityType[];
  statesdata: { id: number; name: string }[];
}

export default function SearchLocationFilter({
  className,
  cityid,
  statesdata,
  citiesdata,
  ...props
}: SearchLocationFilterProps) {
  const [selectedCity, setSelectedCity] = React.useState<CityType | null>(null);
  const [selectedState, setSelectedState] = React.useState<{
    id: number;
    name: string;
  } | null>(null);

  const preSelectedLocation = citiesdata.find(
    (city) => city.id === Number(cityid)
  );

  React.useEffect(() => {
    if (window) {
      const currentLocationId = window.location.href.split("city_id=")[1];
      if (
        currentLocationId === selectedCity?.id.toString() ||
        currentLocationId === ""
      )
        return;

      if (selectedCity)
        window.location.href = `/search?city_id=${selectedCity?.id}`;
    }
  }, [selectedCity?.id]);

  return (
    <LocationModal
      citiesdata={citiesdata}
      statesdata={statesdata}
      selectedCity={selectedCity}
      selectedState={selectedState}
      setSelectedCity={setSelectedCity}
      setSelectedState={setSelectedState}
    >
      <DialogTrigger>
        <Button className="flex items-center gap-2 border border-[#DDDBDB] rounded-lg bg-white py-2 px-3 pr-8">
          <LocationOnIcon height="24" width="24" />

          <span className="font-roboto font-medium text-sm text-black">
            {selectedCity
              ? selectedCity.city
              : preSelectedLocation
              ? preSelectedLocation.city
              : "Nationwide"}
          </span>
        </Button>
      </DialogTrigger>
    </LocationModal>
  );
}
