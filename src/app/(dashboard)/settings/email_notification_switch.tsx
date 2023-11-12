import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import React from "react";

interface EmailNotificationSwitchProps
  extends React.HTMLAttributes<typeof Switch> {}

export default function EmailNotificationSwitch({
  className,
  ...props
}: EmailNotificationSwitchProps) {
  return <Switch className={cn("", className)} />;
}
