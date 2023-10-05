import { EditIcon, PersonFillIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";

interface ProfilePageProps extends React.HTMLAttributes<HTMLDivElement> {}
export default function ProfileTopbar({
  className,
  ...props
}: ProfilePageProps) {
  return (
    <Card
      className={cn("mt-2 md:mt-0", className)}
      {...props}
      variant="settings"
    >
      <CardContent>
        <div className="flex items-center justify-between">
          <Button className="rounded-full border border-[#9B91FD] w-fit p-2">
            <PersonFillIcon
              width="38.4"
              height="38.4"
              aria-label="user profile picture"
            />
          </Button>

          <Button className="flex items-center gap-2">
            <EditIcon height="24" width="24" />
            <span className="font-roboto font-medium text-sm text-black">
              Edit Profile
            </span>
          </Button>
        </div>

        <h2 className="mt-4 font-poppins font-medium text-xl text-[#070331]">
          Username
        </h2>

        <div className="mt-1 flex items-center gap-4">
          <div className="flex items-center gap-1">
            <span className="font-roboto font-medium text-sm text-black">
              20
            </span>
            <span className="font-roboto font-normal text-sm text-black opacity-60">
              Requests
            </span>
          </div>

          <div className="flex items-center gap-1">
            <span className="font-roboto font-medium text-sm text-black">
              20
            </span>
            <span className="font-roboto font-normal text-sm text-black opacity-60">
              Responses
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
