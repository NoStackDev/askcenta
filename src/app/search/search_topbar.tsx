import { cn } from "@/lib/utils";
import React from "react";
import { CitiesResponseType, StateResponseType } from "../../../types";
import SearchLocationFilter from "./search_location_filter";

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

interface SearchTopbarProps extends React.HTMLAttributes<HTMLDivElement> {
  cityid: string | string[] | undefined;
}

export default async function SearchTopbar({
  className,
  cityid,
  ...props
}: SearchTopbarProps) {
  const citiesRes: Promise<CitiesResponseType> = fetchCities();
  const statesRes: Promise<StateResponseType> = fetchStates();
  const [cities, states] = await Promise.all([citiesRes, statesRes]);

  return (
    <div
      className={cn(
        "px-4 md:px-0 flex justify-between items-center",
        className
      )}
      {...props}
    >
      <h3 className="font-poppins font-semibold text-base text-black uppercase">
        Search Result
      </h3>

      <SearchLocationFilter
        cityid={cityid}
        citiesdata={cities.data}
        statesdata={states.data}
      />
    </div>
  );
}
