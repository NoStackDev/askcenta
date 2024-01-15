import { getUserDetailsAction } from "@/app/actions";
import { cn } from "@/lib/utils";
import { UserDetailsType } from "@/types";
import { cookies } from "next/headers";
import React from "react";

interface EmailProps extends React.HTMLAttributes<HTMLDivElement> {}

export default async function Email({ className, ...props }: EmailProps) {
  const cookie = cookies();
  const userDetails = cookie.get("user")?.value;
  return (
    <div
      className={cn(
        "font-normal text-base text-black opacity-60 w-fit",
        className
      )}
      {...props}
    >
      {userDetails &&
        (JSON.parse(userDetails) as UserDetailsType["data"]).email}
    </div>
  );
}
