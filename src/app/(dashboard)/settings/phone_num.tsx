import { getUserDetails } from "@/api/user";
import { cn } from "@/lib/utils";
import React from "react";

interface PhoneNumProps extends React.HTMLAttributes<HTMLDivElement> {}

export default async function PhoneNum({ className, ...props }: PhoneNumProps) {
  const settings = await getUserDetails();
  return (
    <div
      className={cn(
        "font-normal text-base text-black opacity-60 w-fit",
        className
      )}
      {...props}
    >
      +{settings.data.whatsapp_num}
    </div>
  );
}
