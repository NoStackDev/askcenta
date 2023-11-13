import { getUserDetailsAction } from "@/app/actions";
import { cn } from "@/lib/utils";
import React from "react";

interface PhoneNumProps extends React.HTMLAttributes<HTMLDivElement> {}

export default async function PhoneNum({ className, ...props }: PhoneNumProps) {
  const userDetails = await getUserDetailsAction();
  return (
    <div
      className={cn(
        "font-normal text-base text-black opacity-60 w-fit",
        className
      )}
      {...props}
    >
      +{userDetails.data.whatsapp_num}
    </div>
  );
}
