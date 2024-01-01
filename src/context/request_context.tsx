"use client";

import React from "react";

// {
//     success: boolean;
//     email_sent: boolean;
//     data: RequestType
// }

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
};

type RequestContextType = {
  requestData: RequestData[] | null;
  setRequestData: React.Dispatch<React.SetStateAction<RequestData[] | null>>;
};

const RequestContext = React.createContext<RequestContextType>({
  requestData: null,
  setRequestData: () => {},
});

interface RequestContextProviderI {
  children: React.ReactNode;
}

export const RequestContextProvider = ({
  children,
}: RequestContextProviderI) => {
  const [requestData, setRequestData] = React.useState<RequestData[] | null>(
    null
  );

  return (
    <RequestContext.Provider
      value={{ requestData: requestData, setRequestData: setRequestData }}
    >
      {children}
    </RequestContext.Provider>
  );
};

export const useRequestContext = () => React.useContext(RequestContext);
