"use client";

import React from "react";

type UserAuthContextType = {
  authState:
    | "logging in"
    | "signing up"
    | "verifying"
    | "onboarding"
    | "login"
    | "signup"
    | "verify"
    | "onboard"
    | null;
  setAuthState: React.Dispatch<
    React.SetStateAction<
      | "logging in"
      | "signing up"
      | "verifying"
      | "onboarding"
      | "login"
      | "signup"
      | "verify"
      | "onboard"
      | null
    >
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
    | "logging in"
    | "signing up"
    | "verifying"
    | "onboarding"
    | "login"
    | "signup"
    | "verify"
    | "onboard"
    | null
  >(null);

  return (
    <UserAuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </UserAuthContext.Provider>
  );
};

export const useUserAuthContext = () => React.useContext(UserAuthContext);
