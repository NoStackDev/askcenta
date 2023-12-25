"use client";

import RequestSentModal from "@/components/request/request_sent_modal";
import React from "react";
import { boolean } from "zod";

type state = "REQUEST_SUCCESSFUL" | null;

type PopupStatesContextType = {
  popupStateType: state;
  setPopupStateType: React.Dispatch<React.SetStateAction<state>>;
};

const PopupStatesContext = React.createContext<PopupStatesContextType>({
  popupStateType: null,
  setPopupStateType: () => {},
});

interface PopupStatesContextProviderI {
  children: React.ReactNode;
}

const renderPopup = (popupStateType: state) => {
  switch (popupStateType) {
    case "REQUEST_SUCCESSFUL":
      return <RequestSentModal modalState={Boolean(popupStateType)} />;
    default:
      return null;
  }
};

export const PopupStatesContextProvider = ({
  children,
}: PopupStatesContextProviderI) => {
  const [popupStateType, setPopupStateType] = React.useState<state>(null);

  return (
    <PopupStatesContext.Provider
      value={{
        popupStateType: popupStateType,
        setPopupStateType: setPopupStateType,
      }}
    >
      {children}
      {renderPopup(popupStateType)}
    </PopupStatesContext.Provider>
  );
};

export const usePopupStatesContext = () => React.useContext(PopupStatesContext);
