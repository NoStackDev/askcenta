"use client";

import { updateUserPreferenceAction } from "@/actions";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { UserPreferenceType } from "@/types";
import React from "react";

interface AnonymousSwitchProps extends React.HTMLAttributes<typeof Switch> {
  userPreference: UserPreferenceType;
}

export default function AnonymousSwitch({
  className,
  userPreference,
  ...props
}: AnonymousSwitchProps) {
  async function handleSwitchChange(checked: boolean) {
    try {
      const res = await updateUserPreferenceAction({ post_anonymous: checked });
      console.log(res)
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <Switch
      className={cn("", className)}
      onCheckedChange={(boolean) => handleSwitchChange(boolean)}
      defaultChecked={
        Boolean(Number(userPreference.post_anonymous)) ? true : false
      }
    />
  );
}
