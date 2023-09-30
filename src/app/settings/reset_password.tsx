import { ChevronRightIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

interface ResetPasswordBtnProps
  extends React.HTMLAttributes<HTMLButtonElement> {}

export default function ResetPasswordBtn({
  className,
  ...props
}: ResetPasswordBtnProps) {
  return (
    <Button className={cn("", className)} {...props}>
      <ChevronRightIcon aria-label="reset password" />
    </Button>
  );
}
