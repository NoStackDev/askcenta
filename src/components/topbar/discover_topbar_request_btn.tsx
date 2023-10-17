"use client";

import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface DiscoverTopbarRequestBtnProps
  extends React.HTMLAttributes<HTMLButtonElement> {}

export default function DiscoverTopbarRequestBtn({
  className,
  ...props
}: DiscoverTopbarRequestBtnProps) {
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
      className={cn("", className)}
      onClick={(e) => onClick(e)}
      variant="request_outlined"
      {...props}
    >
      Post request
    </Button>
  );
}
