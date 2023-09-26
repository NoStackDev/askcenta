"use client";

import React from "react";

type SidebarContextType = {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const SidebarContext = React.createContext<SidebarContextType>({
  showSidebar: false,
  setShowSidebar: () => {},
});

interface SidebarContextProviderI {
  children: React.ReactNode;
}

export const SidebarContextProvider = ({
  children,
}: SidebarContextProviderI) => {
  const [showSidebar, setShowSidebar] = React.useState<boolean>(false);

  return (
    <SidebarContext.Provider value={{ showSidebar, setShowSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => React.useContext(SidebarContext);
