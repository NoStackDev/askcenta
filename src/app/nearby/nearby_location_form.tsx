"use client";

import {
  ChevronRightIcon,
  KeyboardBackspaceIcon,
  LocationOnIcon,
} from "@/components/icons";
import CloseIcon from "@/components/icons/close_icon";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import { CityType, StateResponseType } from "../../../types";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {
  cityid: string | string[] | undefined;
  citiesdata: CityType[];
  statesdata: { id: number; name: string }[];
};

export default function NearbyLocationForm({
  cityid,
  statesdata,
  citiesdata,
}: Props) {
  const [selectedCity, setSelectedCity] = React.useState<CityType | null>(null);
  const [selectedState, setSelectedState] = React.useState<{
    id: number;
    name: string;
  } | null>(null);
  const router = useRouter();

  const preSelectedLocation = citiesdata.find(
    (city) => city.id === Number(cityid)
  );
  const selectedStateCities = selectedState
    ? citiesdata.filter((city) => city.state === selectedState.name)
    : [];

  const contentDivRef = React.useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    if (contentDivRef.current) {
      contentDivRef.current.scrollTop = 0;
    }
  };

  return (
    <>
      <div className="flex gap-2 items-center font-roboto font-normal text-sm">
        <LocationOnIcon
          pathColor="#000000"
          aria-label="location"
          width="24"
          height="24"
        />

        {(preSelectedLocation || selectedCity) && (
          <span className="font-roboto font-normal text-sm text-black">
            {selectedCity ? selectedCity?.city : preSelectedLocation?.city}
          </span>
        )}
      </div>

      <Dialog>
        <DialogTrigger>
          <Button className="font-roboto font-medium text-xs text-[#6356E5]">
            Change Preferred Location
          </Button>
        </DialogTrigger>

        <DialogContent className="md:h-4/5">
          <div className="flex flex-col justify-between h-full pb-10">
            <div>
              <div className="flex items-center justify-between px-4 pt-10">
                <span className="font-poppins font-semibold text-base text-black">
                  PREFERRED LOCATION
                </span>
                <DialogClose>
                  <Button>
                    <CloseIcon aria-label="close" />
                  </Button>
                </DialogClose>
              </div>

              <div className="mt-10 flex flex-col px-4 gap-2">
                <span className="font-roboto font-medium text-sm text-black opacity-70">
                  Selected
                </span>

                {(preSelectedLocation || (selectedState && selectedCity)) && (
                  <span className="font-roboto font-medium text-base text-black">
                    {selectedState && selectedCity
                      ? `${selectedState.name}, ${selectedCity.city}`
                      : `${preSelectedLocation?.state}, ${preSelectedLocation?.city}`}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col px-4 gap-2">
              <span className="font-roboto font-medium text-base text-black">
                Your Location
              </span>

              <Dialog
                onOpenChange={(open) => {
                  open && setSelectedState(null);
                }}
              >
                <DialogTrigger>
                  <Button className="px-4 py-3 flex items-center justify-between bg-[#F7F9FF] border border-[#D9D9D9] rounded-xl font-roboto font-normal text-base text-black opacity-60">
                    Select city
                    <ChevronRightIcon className="rotate-90" />
                  </Button>
                </DialogTrigger>

                <DialogContent className="md:h-4/5 py-8">
                  <div
                    className="h-full relative overflow-y-auto overflow-x-hidden"
                    ref={contentDivRef}
                  >
                    <div className="mb-4 border-b border-[#D9D9D9] sticky top-0 bg-white z-40">
                      <h2 className="font-poppins font-semibold text-base text-black px-6">
                        SELECT YOUR LOCATION
                      </h2>

                      <div className="flex items-center gap-4 px-6 mt-8 mb-4">
                        {!selectedState && (
                          <DialogClose>
                            <Button>
                              <KeyboardBackspaceIcon aria-label="back" />
                            </Button>
                          </DialogClose>
                        )}

                        {selectedState && (
                          <Button
                            onClick={() => {
                              setSelectedState(null);
                              scrollToTop();
                            }}
                          >
                            <KeyboardBackspaceIcon aria-label="back" />
                          </Button>
                        )}

                        <h3 className="font-roboto font-medium text-base text-black">
                          {selectedState ? selectedState.name : "States"}
                        </h3>
                      </div>
                    </div>

                    <div className="h-full relative z-30">
                      <div
                        className={cn(
                          "h-fit w-full flex flex-col gap-8 items-start px-6 absolute transition-all animate-dialogFirstContentShow",
                          selectedState && "hidden"
                        )}
                      >
                        {statesdata.map((state) => {
                          return (
                            <Button
                              key={state.id}
                              className="w-full py-2 flex items-center justify-between hover:scale-105"
                              onClick={() => {
                                setSelectedState(state);
                                scrollToTop();
                              }}
                            >
                              <span className="font-roboto font-normal text-lg text-black">
                                {state.name}
                              </span>
                              <ChevronRightIcon
                                aria-label={`${state.name} button`}
                                className="opacity-40"
                                width="24"
                                height="24"
                              />
                            </Button>
                          );
                        })}
                      </div>

                      <div
                        className={cn(
                          "h-fit w-full flex flex-col gap-8 items-start px-6 absolute left-full transition-all duration-150 ease-in-out",
                          selectedState && "left-0"
                        )}
                      >
                        {selectedStateCities.map((city) => {
                          return (
                            <DialogClose key={city.id}>
                              <Button
                                className="w-full py-2 flex items-center justify-between hover:scale-105"
                                onClick={() => setSelectedCity(city)}
                              >
                                <span className="font-roboto font-normal text-lg text-black">
                                  {city.city}
                                </span>
                                <ChevronRightIcon
                                  aria-label={`${city.city} button`}
                                  className="opacity-40"
                                  width="24"
                                  height="24"
                                />
                              </Button>
                            </DialogClose>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <DialogClose>
                <Link
                  href={`/nearby?city_id=${
                    selectedCity?.id || preSelectedLocation?.id
                  }`}
                  className=""
                >
                  <Button variant="request" className="mt-6 py-4 w-full">
                    Save & Continue
                  </Button>
                </Link>
              </DialogClose>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
