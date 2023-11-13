"use client";

import React from "react";
import { LocationOnIcon } from "../icons";
import LocationModal from "../modal/location_modal";
import { Button } from "../ui/button";
import { CityType } from "../../../types";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";

interface TopbarLocationFilterProps
  extends React.HTMLAttributes<HTMLDivElement> {
  cityid: string | string[] | undefined;
  citiesdata: CityType[];
  statesdata: { id: number; name: string }[];
}

export default function TopbarLocationFilter({
  className,
  cityid,
  citiesdata,
  statesdata,
}: TopbarLocationFilterProps) {
  const [selectedCity, setSelectedCity] = React.useState<CityType | null>(null);
  const [selectedState, setSelectedState] = React.useState<{
    id: number;
    name: string;
  } | null>(null);

  const cityData = citiesdata.find(
    (city) => city.id === Number(cityid as string)
  );

  const onLocationChange = () => {
    const url = new URL(window.location.href);
    url.searchParams.delete("city_id");
    selectedCity &&
      url.searchParams.append("city_id", selectedCity?.id.toString());
    window.location.href = url.href;
  };

  return (
    <Card
      className={cn("px-4 py-2 flex items-center justify-between", className)}
      variant="settings"
    >
      <div className="flex items-center gap-2">
        <LocationOnIcon width="24" height="24" />
        <span className="font-roboto font-normal text-sm text-black">
          {selectedCity
            ? `${selectedCity.state}, ${selectedCity.city}`
            : cityData
            ? `${cityData.state}, ${cityData.city}`
            : "Nationwide"}
        </span>
      </div>

      <LocationModal
        citiesdata={citiesdata}
        statesdata={statesdata}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        selectedState={selectedState}
        setSelectedState={setSelectedState}
        onOpenChange={(open) => {
          open && setSelectedState(null);
          !open && onLocationChange();
        }}
      >
        <Button className="font-roboto font-medium text-sm text-[#6356E5]">
          Filter Location
        </Button>
      </LocationModal>
    </Card>
  );
}
