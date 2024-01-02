"use client";

import React from "react";

type RequestData = {
  category: string;
  created_at: string;
  title: string;
  id: number;
  image_url: string | null;
  location: string;
  user: string;
  user_id: number;
  num_of_responses: number;
  bookmark: boolean;
};

type RequestContextType = {
  requestData: RequestData[];
  setRequestData: React.Dispatch<React.SetStateAction<RequestData[]>>;
};

const RequestContext = React.createContext<RequestContextType>({
  requestData: [],
  setRequestData: () => {},
});

interface RequestContextProviderI {
  children: React.ReactNode;
}

export const RequestContextProvider = ({
  children,
}: RequestContextProviderI) => {
  const [requestData, setRequestData] = React.useState<RequestData[]>([]);

  return (
    <RequestContext.Provider
      value={{ requestData: requestData, setRequestData: setRequestData }}
    >
      {children}
    </RequestContext.Provider>
  );
};

export const useRequestContext = () => React.useContext(RequestContext);
