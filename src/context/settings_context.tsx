"use client";

import { CityType } from "@/types";
import React from "react";

type SettingsContextType = {
  formState: {
    preferredLocation: CityType | null;
    emailNotification: boolean | null;
    anonymous: boolean | null;
  };
  setFormState: React.Dispatch<
    React.SetStateAction<{
      preferredLocation: CityType | null;
      emailNotification: boolean | null;
      anonymous: boolean | null;
    }>
  >;
};

const SettingsContext = React.createContext<SettingsContextType>({
  formState: {
    preferredLocation: null,
    emailNotification: null,
    anonymous: null,
  },
  setFormState: () => {},
});

type SettingsContextProviderType = {
  children: React.ReactNode;
};

export const SettingsContextProvider = ({
  children,
}: SettingsContextProviderType) => {
  const [formState, setFormState] = React.useState<{
    preferredLocation: CityType | null;
    emailNotification: boolean | null;
    anonymous: boolean | null;
  }>({ preferredLocation: null, emailNotification: null, anonymous: null });

  return (
    <SettingsContext.Provider value={{ formState, setFormState }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettingsContext = () => React.useContext(SettingsContext);
