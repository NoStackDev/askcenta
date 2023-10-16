"use client";

import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import {
  CitiesResponseType,
  CityType,
  StateResponseType,
} from "../../../types";
import { fetchCities, fetchStates } from "@/api/location";
import LocationModal from "../modal/location_modal";
import ResponseForm from "../response/response_form";

interface RespondToRequestBtnProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  params: { id: string };
}

export default function RespondToRequestBtn({
  className,
  params,
  ...props
}: RespondToRequestBtnProps) {
  const [citiesdata, setCitiesData] = React.useState<CityType[]>([]);
  const [statesdata, setStatesData] = React.useState<
    {
      id: number;
      name: string;
    }[]
  >([]);

  React.useEffect(() => {
    async function fetchLocations() {
      const citiesRes: Promise<CitiesResponseType> = fetchCities();
      const statesRes: Promise<StateResponseType> = fetchStates();
      const [cities, states] = await Promise.all([citiesRes, statesRes]);
      setCitiesData(cities.data);
      setStatesData(states.data);
    }
  }, []);

  return (
    <ResponseForm
      citiesdata={citiesdata}
      statesdata={statesdata}
      params={params}
    >
      <Button
        variant="request_card_outlined"
        className={cn("hover:cursor-pointer", className)}
        {...props}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          console.log("llllllllll");
        }}
      >
        Respond to Request
      </Button>
    </ResponseForm>
  );
}
