import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

interface ChangeNotificationEmailBtnProps
  extends React.HTMLAttributes<HTMLButtonElement> {}

export default function ChangePrefferedLocationBtn({
  className,
  ...props
}: ChangeNotificationEmailBtnProps) {
  return (
    <Button
      className={cn(
        "font-roboto font-medium text-sm text-[#6356E5]",
        className
      )}
      {...props}
    >
      Change
    </Button>
  );
}
