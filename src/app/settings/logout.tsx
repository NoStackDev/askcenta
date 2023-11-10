"use client";

import { LogoutIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import { logoutUserAction } from "../actions";

interface LogoutBtnProps extends React.HTMLAttributes<HTMLButtonElement> {}

export default function LogoutBtn({ className, ...props }: LogoutBtnProps) {
  async function onClick() {
    try {
      await logoutUserAction();
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <Button
      onClick={onClick}
      className={cn("flex items-center gap-2", className)}
      {...props}
    >
      <LogoutIcon className="log out" />
      <span className="font-roboto font-medium text-base text-black">
        Sign out
      </span>
    </Button>
  );
}
