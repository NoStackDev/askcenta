import React from "react";
import { CitiesResponseType, StateResponseType } from "../../../types";
import { fetchCities, fetchStates } from "@/api/location";
import TopbarLocationFilter from "./topbar_location_filter";

interface TopbarLocationFilterWrapperProps
  extends React.HTMLAttributes<HTMLDivElement> {
  cityid: string | string[] | undefined;
}

export default async function TopbarLocationFilterWrapper({
  className,
  cityid,
  ...props
}: TopbarLocationFilterWrapperProps) {
  const citiesRes: Promise<CitiesResponseType> = fetchCities();
  const statesRes: Promise<StateResponseType> = fetchStates();

  const [cities, states] = await Promise.all([citiesRes, statesRes]);
  return (
    <TopbarLocationFilter
      cityid={cityid}
      citiesdata={cities.data}
      statesdata={states.data}
      className={className}
      {...props}
    />
  );
}
