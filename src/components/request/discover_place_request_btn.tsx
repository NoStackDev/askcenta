"use client";

import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useSidebarContext } from "@/context/sidebar_context";

interface DiscoverPlaceRequestBtnProps
  extends React.HTMLAttributes<HTMLButtonElement> {}

export default function DiscoverPlaceRequestBtn({
  className,
  ...props
}: DiscoverPlaceRequestBtnProps) {
  const { showSidebar } = useSidebarContext();

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
      className={cn("md:hidden", showSidebar && "hidden", className)}
      variant="place_a_request"
      {...props}
    >
      Place a Request
    </Button>
  );
}
