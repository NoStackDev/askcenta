import { EditIcon, FlagFillIcon, PersonFillIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import ProfileReportUserModal from "./profile_report_user";

interface ProfilePageProps extends React.HTMLAttributes<HTMLDivElement> {
  otheruser?: boolean;
}

export default function ProfileTopbar({
  className,
  otheruser,
  ...props
}: ProfilePageProps) {
  return (
    <Card
      className={cn("mt-2 md:mt-0", className)}
      {...props}
      variant="settings"
    >
      <CardContent>
        <div className="flex items-start md:items-center justify-between">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-[10px]">
            <Button className="rounded-full border border-[#9B91FD] w-fit p-2">
              <PersonFillIcon
                width="57.6"
                height="57.6"
                aria-label="user profile picture"
              />
            </Button>

            <div>
              <h2 className="font-poppins font-medium text-xl text-[#070331]">
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
            </div>
          </div>

          {!otheruser && (
            <Link href="/profile/edit" className="h-fit w-fit mt-7 md:mt-0">
              <Button className="flex items-center gap-2">
                <EditIcon height="24" width="24" />
                <span className="font-roboto font-medium text-sm text-black">
                  Edit Profile
                </span>
              </Button>
            </Link>
          )}

          {otheruser && (
            <ProfileReportUserModal>
              <Button className="flex items-center gap-2 mt-7 md:mt-0">
                <FlagFillIcon />
                <span className="font-roboto font-medium text-sm text-black">
                  Report
                </span>
              </Button>
            </ProfileReportUserModal>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
