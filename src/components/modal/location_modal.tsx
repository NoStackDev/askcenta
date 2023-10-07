"use client";

import React from "react";
import { Dialog, DialogClose, DialogContent } from "../ui/dialog";
import { Button } from "../ui/button";
import { ChevronRightIcon, KeyboardBackspaceIcon } from "../icons";
import { CityType } from "../../../types";
import { cn } from "@/lib/utils";
import { DialogProps } from "@radix-ui/react-dialog";

interface LocationModalProps extends DialogProps {
  selectedState: {
    id: number;
    name: string;
  } | null;
  setSelectedState: React.Dispatch<
    React.SetStateAction<{
      id: number;
      name: string;
    } | null>
  >;
  selectedCity: CityType | null;
  setSelectedCity: React.Dispatch<React.SetStateAction<CityType | null>>;
  citiesdata: CityType[];
  statesdata: { id: number; name: string }[];
}

export default function LocationModal({
  children,
  citiesdata,
  statesdata,
  selectedState,
  selectedCity,
  setSelectedState,
  setSelectedCity,
  ...props
}: LocationModalProps) {
  const contentDivRef = React.useRef<HTMLDivElement>(null);

  const selectedStateCities = selectedState
    ? citiesdata.filter((city) => city.state === selectedState.name)
    : [];

  const scrollToTop = () => {
    if (contentDivRef.current) {
      contentDivRef.current.scrollTop = 0;
    }
  };

  return (
    <Dialog
      onOpenChange={(open) => {
        open && setSelectedState(null);
      }}
      {...props}
    >
      {children}

      <DialogContent className="md:h-4/5 py-8">
        <div
          className="h-full relative overflow-y-auto overflow-x-hidden"
          ref={contentDivRef}
        >
          <div className="mb-4 border-b border-[#D9D9D9] sticky top-0 bg-white z-40">
            <h2 className="font-poppins font-semibold text-base text-black px-6">
              SELECT LOCATION
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
  );
}
