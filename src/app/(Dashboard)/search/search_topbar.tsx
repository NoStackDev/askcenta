import { cn } from "@/lib/utils";
import React from "react";
import { CitiesResponseType, StateResponseType } from "@/types";
import SearchLocationFilter from "./search_location_filter";
import { fetchCities, fetchStates } from "@/api/location";

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
