import React from "react";
import { CitiesResponseType, StateResponseType } from "../../../types";

import NearbyLocationForm from "./nearby_location_form";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

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

interface NearbyLocationProps extends React.HTMLAttributes<HTMLDivElement> {
  cityid: string | string[] | undefined;
}

export default async function NearbyLocation({
  className,
  cityid,
  ...props
}: NearbyLocationProps) {
  const citiesRes: Promise<CitiesResponseType> = fetchCities();
  const citiesData = await (await citiesRes).data;
  const statesRes: Promise<StateResponseType> = fetchStates();
  const statesData = await (await statesRes).data;

  return (
    <Card
      variant="settings"
      className={cn("py-2 flex justify-between", className)}
      {...props}
    >
      <NearbyLocationForm
        cityid={cityid}
        citiesdata={citiesData}
        statesdata={statesData}
      />
    </Card>
  );
}
