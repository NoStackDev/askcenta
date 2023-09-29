import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface RespondToRequestBtnProps
  extends React.HTMLAttributes<HTMLButtonElement> {}

export default function RespondToRequestBtn({
  className,
  ...props
}: RespondToRequestBtnProps) {
  return (
    <Button
      variant="request_card_outlined"
      className={cn("", className)}
      {...props}
    >
      Respond to Request
    </Button>
  );
}
