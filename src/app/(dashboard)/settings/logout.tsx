"use client";

import { LogoutIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import { logoutUserAction } from "@/app/actions";
import LoadingSpinner from "@/components/load_spinner";

interface LogoutBtnProps extends React.HTMLAttributes<HTMLButtonElement> {}

export default function LogoutBtn({ className, ...props }: LogoutBtnProps) {
  const [signingOut, setSigningOut] = React.useState(false);

  async function onClick() {
    setSigningOut(true);

    try {
      await logoutUserAction();
    } catch (err) {
      console.log(err);
      setSigningOut(false);
    }
  }

  return (
    <Button
      onClick={onClick}
      className={cn("flex items-center gap-2", className)}
      {...props}
    >
      {!signingOut && <LogoutIcon className="log out" />}
      {signingOut && <LoadingSpinner pathFill1="black" />}
      <span className="font-roboto font-medium text-base text-black">
        {!signingOut && "Sign out"}
        {signingOut && "Signing out"}
      </span>
    </Button>
  );
}
