"use client";

import { updateUserDetailsAction } from "@/actions";
import LoadingSpinner from "@/components/load_spinner";
import { LocationModal } from "@/components/modal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CityType, UserDetailsType } from "@/types";
import React from "react";

interface ChangePreferedLocationBtnProps
  extends React.HTMLAttributes<HTMLDivElement> {
  userDetails: UserDetailsType;
  citiesdata: CityType[];
  statesdata: { id: number; name: string }[];
}

export default function ChangePreferedLocationBtn({
  className,
  userDetails,
  citiesdata,
  statesdata,
  ...props
}: ChangePreferedLocationBtnProps) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [selectedState, setSelectedState] = React.useState<{
    id: number;
    name: string;
  } | null>(null);
  const [selectedCity, setSelectedCity] = React.useState<CityType | null>(null);

  React.useEffect(() => {
    async function updatePreferredLocation() {
      setIsLoading(true);
      const data = new FormData();
      selectedCity && data.append("location_id", selectedCity.id.toString());
      const res = await updateUserDetailsAction(data);
      setIsLoading(false);
    }

    if (selectedCity) {
      updatePreferredLocation();
    }
  }, [selectedCity]);

  return (
    <Card variant="settings" className={cn("", className)} {...props}>
      <CardContent className="flex flex-col font-roboto">
        <div className="flex items-center justify-between">
          <span className="font-normal text-base text-black">
            Preferred Location
          </span>

          <LocationModal
            citiesdata={citiesdata}
            statesdata={statesdata}
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
            setSelectedState={setSelectedState}
            selectedState={selectedState}
          >
            <Button
              className={cn("font-roboto font-medium text-sm text-[#6356E5]")}
            >
              {isLoading && <LoadingSpinner />}
              {isLoading && "Changing"}
              {!isLoading && "Change"}
            </Button>
          </LocationModal>
        </div>

        <span
          className={cn(
            "mt-2 font-medium text-xs text-black opacity-60",
            className
          )}
          {...props}
        >
          {selectedCity?.city || userDetails.data.location}
        </span>
      </CardContent>
    </Card>
  );
}
