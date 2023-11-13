"use client";

import { AddFillIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};

export default function ProfilePlaceRequest({}: Props) {
  function onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    e.stopPropagation();
    const triggerBtn = document.getElementById("request_form_modal_trigger");
    if (triggerBtn) {
      triggerBtn.click();
    }
  }

  return (
    <Button
      onClick={(e) => onClick(e)}
      className="flex gap-[6px] justify-center items-center"
    >
      <span className="font-roboto font-semibold text-lg text-black">
        Place a Request
      </span>

      <AddFillIcon />
    </Button>
  );
}
