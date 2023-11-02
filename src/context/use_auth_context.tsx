"use client";

import React from "react";

type UserAuthContextType = {
  authState: "loading" | "login" | "signup" | "onboarding" | null;
  setAuthState: React.Dispatch<
    React.SetStateAction<"loading" | "login" | "signup" | "onboarding" | null>
  >;
};

const UserAuthContext = React.createContext<UserAuthContextType>({
  authState: null,
  setAuthState: () => {},
});

interface UserAuthContextProviderI {
  children: React.ReactNode;
}

export const UserAuthContextProvider = ({
  children,
}: UserAuthContextProviderI) => {
  const [authState, setAuthState] = React.useState<
    "loading" | "login" | "signup" | "onboarding" | null
  >(null);

  return (
    <UserAuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </UserAuthContext.Provider>
  );
};

export const useUserAuthContext = () => React.useContext(UserAuthContext);
