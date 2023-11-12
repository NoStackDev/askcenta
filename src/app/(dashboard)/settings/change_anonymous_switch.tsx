import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import React from "react";

interface AnonymousSwitchProps extends React.HTMLAttributes<typeof Switch> {}

export default function AnonymousSwitch({
  className,
  ...props
}: AnonymousSwitchProps) {
  return <Switch className={cn("", className)} />;
}
