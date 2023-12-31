import React from "react";
import EditProfileForm from "./edit_profile_form";
import { CitiesResponseType, StateResponseType } from "@/types";
import { fetchCities, fetchStates } from "@/api/location";
import { getUserDetailsAction } from "@/actions";

type Props = {};

export default async function ProfileEditPage({}: Props) {
  const citiesRes: Promise<CitiesResponseType> = fetchCities();
  const statesRes: Promise<StateResponseType> = fetchStates();
  const userDetails = await getUserDetailsAction();

  const [cities, states] = await Promise.all([citiesRes, statesRes]);

  return (
    <main className="w-full mt-2 md:mt-0">
      <EditProfileForm
        citiesdata={cities.data}
        statesdata={states.data}
        userDetails={userDetails}
      />
    </main>
  );
}
