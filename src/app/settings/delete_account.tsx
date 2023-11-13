import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

interface DeleteAccountBtnProps
  extends React.HTMLAttributes<HTMLButtonElement> {}

export default function DeleteAccountBtn({
  className,
  ...props
}: DeleteAccountBtnProps) {
  return (
    <Button
      className={cn("font-roboto font-normal text-base text-black", className)}
      {...props}
    >
      Delete Account
    </Button>
  );
}
