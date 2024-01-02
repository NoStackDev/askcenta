"use client";

import { useRequestContext } from "@/context/request_context";
import React from "react";
import RequestCardClient from "./request_card_client";
import { CityType, StateResponseType } from "@/types";

type Props = { cities: CityType[]; states: StateResponseType["data"] };

export default function NewRequestContainerClient({ cities, states }: Props) {
  const { requestData } = useRequestContext();
  const user = null;

  return (
    <>
      {requestData &&
        requestData.map((request) => {
          return (
            <RequestCardClient
              key={request.id}
              requestData={request}
              user={user}
              cities={cities}
              states={states}
            />
          );
        })}
    </>
  );
}
