"use client";

import { useRequestContext } from "@/context/request_context";
import React from "react";
import RequestCardClient from "./request_card_client";

type Props = {};

export default function RequestContainerClient({}: Props) {
  const { requestData } = useRequestContext();
  return (
    <>
      {requestData &&
        requestData.map((request) => {
          return <RequestCardClient key={request.id} requestData={request} />;
        })}
    </>
  );
}
