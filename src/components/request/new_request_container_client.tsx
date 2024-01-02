"use client";

import { useRequestContext } from "@/context/request_context";
import React from "react";
import RequestCardClient from "./request_card_client";

type Props = {};

export default function NewRequestContainerClient({}: Props) {
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
            />
          );
        })}
    </>
  );
}
