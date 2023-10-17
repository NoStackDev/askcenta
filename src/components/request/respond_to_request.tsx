"use client";

import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface RespondToRequestBtnProps
  extends React.HTMLAttributes<HTMLButtonElement> {}

export default function RespondToRequestBtn({
  className,
  ...props
}: RespondToRequestBtnProps) {
  function onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    e.stopPropagation();
    const triggerBtn = document.getElementById("response_form_modal_trigger");
    if (triggerBtn) {
      triggerBtn.click();
    }
  }

  return (
    <Button
      variant="request_card_outlined"
      className={cn("hover:cursor-pointer", className)}
      {...props}
      onClick={(e) => onClick(e)}
    >
      Respond to Request
    </Button>
  );
}
