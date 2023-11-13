import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

interface ContactUsBtnProps extends React.HTMLAttributes<HTMLButtonElement> {}

export default function ContactUsBtn({
  className,
  ...props
}: ContactUsBtnProps) {
  return (
    <Button
      className={cn("font-roboto font-normal text-base text-black", className)}
      {...props}
    >
      Contact us
    </Button>
  );
}
