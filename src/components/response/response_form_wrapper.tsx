import React from "react";
import { CitiesResponseType, StateResponseType } from "../../../types";
import { fetchCities, fetchStates } from "@/api/location";
import { DialogProps } from "@radix-ui/react-dialog";
import { ResponseForm } from ".";
import { cn } from "@/lib/utils";

interface ResponseFormWrapperProps extends React.HTMLAttributes<DialogProps> {
  params: { id: string };
}

export default async function ResponseFormWrapper({
  className,
  children,
  params,
  ...props
}: ResponseFormWrapperProps) {
  const citiesRes: Promise<CitiesResponseType> = fetchCities();
  const statesRes: Promise<StateResponseType> = fetchStates();

  const [cities, states] = await Promise.all([citiesRes, statesRes]);
  return (
    <ResponseForm
      params={params}
      citiesdata={cities.data}
      statesdata={states.data}
      className={cn("", className)}
      {...props}
    >
      {children}
    </ResponseForm>
  );
}
