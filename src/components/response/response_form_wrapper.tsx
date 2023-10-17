import React from "react";
import { CitiesResponseType, StateResponseType } from "../../../types";
import ResponseForm from "./response_form";
import { fetchCities, fetchStates } from "@/api/location";

interface ResponseFormWrapperProps
  extends React.HTMLAttributes<typeof ResponseForm> {
  params: { id: string };
}

export default async function ResponseFormWrapper({
  className,
  children,
  params,
}: ResponseFormWrapperProps) {
  const citiesRes: Promise<CitiesResponseType> = fetchCities();
  const statesRes: Promise<StateResponseType> = fetchStates();

  const [cities, states] = await Promise.all([citiesRes, statesRes]);
  return (
    <ResponseForm
      params={params}
      citiesdata={cities.data}
      statesdata={states.data}
    >
      {children}
    </ResponseForm>
  );
}
