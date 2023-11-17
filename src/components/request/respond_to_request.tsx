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
