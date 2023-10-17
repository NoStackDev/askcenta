"use client";

import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface NavbarPlaceRequestBtnProps
  extends React.HTMLAttributes<HTMLButtonElement> {}

export default function NavbarPlaceRequestBtn({
  className,
  ...props
}: NavbarPlaceRequestBtnProps) {
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
      className={cn("hidden lg:flex", className)}
      variant="request"
      {...props}
    >
      Place a Request
    </Button>
  );
}
