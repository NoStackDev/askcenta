import React from "react";
import { CitiesResponseType, StateResponseType } from "../../../../types";

import NearbyLocationForm from "./nearby_location_form";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { fetchCities, fetchStates } from "@/api/location";

interface NearbyLocationProps extends React.HTMLAttributes<HTMLDivElement> {
  cityid: string | string[] | undefined;
}

export default async function NearbyLocation({
  className,
  cityid,
  ...props
}: NearbyLocationProps) {
  const citiesRes: Promise<CitiesResponseType> = fetchCities();
  const statesRes: Promise<StateResponseType> = fetchStates();
  const [cities, states] = await Promise.all([citiesRes, statesRes]);

  return (
    <Card
      variant="settings"
      className={cn("py-2 flex justify-between", className)}
      {...props}
    >
      <NearbyLocationForm
        cityid={cityid}
        citiesdata={cities.data}
        statesdata={states.data}
      />
    </Card>
  );
}
