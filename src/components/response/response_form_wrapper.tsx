import React from "react";
import {
  CitiesResponseType,
  StateResponseType,
  UserDetailsType,
} from "@/types";
import { fetchCities, fetchStates } from "@/api/location";
import { DialogProps } from "@radix-ui/react-dialog";
import { ResponseForm } from ".";
import { cn } from "@/lib/utils";
import { cookies } from "next/headers";

interface ResponseFormWrapperProps extends React.HTMLAttributes<DialogProps> {
  requestid: string;
}

export default async function ResponseFormWrapper({
  className,
  children,
  requestid,
  ...props
}: ResponseFormWrapperProps) {
  const citiesRes: Promise<CitiesResponseType> = fetchCities();
  // const cities = await citiesRes;
  const statesRes: Promise<StateResponseType> = fetchStates();
  // const states = await statesRes;
  const cookie = cookies();
  const user: UserDetailsType['data'] | null = JSON.parse(
    cookie.get("user")?.value || "null"
  );
  const [cities, states] = await Promise.all([citiesRes, statesRes]);
  return (
    <ResponseForm
      requestid={requestid}
      citiesdata={cities.data}
      statesdata={states.data}
      className={cn("", className)}
      user={user}
      {...props}
    >
      {children}
    </ResponseForm>
  );
}
