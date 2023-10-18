"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface TopbarRequestInputProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export default function TopbarRequestInput({
  className,
  ...props
}: TopbarRequestInputProps) {
  function onClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.preventDefault();
    e.stopPropagation();
    const triggerBtn = document.getElementById("request_form_modal_trigger");
    if (triggerBtn) {
      triggerBtn.click();
    }
  }

  return (
    <div
      onClick={(e) => onClick(e)}
      className={cn(
        "font-roboto font-medium text-base opacity-60 text-black",
        className
      )}
      {...props}
    >
      What do you need?
    </div>
  );
}
