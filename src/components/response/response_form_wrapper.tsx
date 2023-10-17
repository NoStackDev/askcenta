import React from "react";
import { CitiesResponseType, StateResponseType } from "../../../types";
import ResponseForm from "./response_form";
// import { fetchCities, fetchStates } from "@/helpers/location";

async function fetchCities() {
  const res = await fetch("https://www.askcenta.ng/api/cities", {
    method: "OPTIONS",
    next: {
      revalidate: 3600 * 6,
    },
  });

  if (!res.ok)
    throw new Error(
      "failed to fetch cities from https://www.askcenta.ng/api/cities"
    );

  return res.json();
}

async function fetchStates() {
  const res = await fetch("https://askcenta.ng/api/states", {
    method: "OPTIONS",
    next: {
      revalidate: 3600 * 6,
    },
  });

  if (!res.ok)
    throw new Error(
      "failed to fetch states from https://askcenta.ng/api/states"
    );

  return res.json();
}

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
