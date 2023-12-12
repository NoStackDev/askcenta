import { fetchCities } from "@/api/location";
import { getUserDetailsAction } from "@/app/actions";
import {
  FacebookCircleIcon,
  InstagramCircleIcon,
  WhatsappCircleIcon,
} from "@/components/icons";
import { Card } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { UserDetailsType } from "@/types";
import { TabsContentProps } from "@radix-ui/react-tabs";
import React from "react";

interface ProfileAboutTabProps extends TabsContentProps {}

export default async function ProfileAboutTab({
  className,
  ...props
}: ProfileAboutTabProps) {
  const userDetails: UserDetailsType = await getUserDetailsAction();
  const cities = await fetchCities();
  const city = cities.data.find(
    (city) =>
      city.city.toLowerCase() === userDetails.data.location.toLowerCase()
  );

  return (
    <TabsContent className={cn("pb-8", className)} {...props}>
      <div>
        <h3 className="ml-4 font-roboto font-medium text-sm text-black">Bio</h3>
        <Card
          variant="settings"
          className="mt-2 font-roboto font-medium text-base text-[#010E1E]"
        >
          {userDetails.data.about &&
            userDetails.data.about?.length > 0 &&
            userDetails.data.about}
          {(userDetails.data.about && userDetails.data.about?.length < 1) ||
            (!userDetails.data.about && (
              <div className="mb-10 font-roboto font-medium text-base text-[#010E1E] opacity-60">
                No info
              </div>
            ))}
        </Card>
      </div>

      <div className="mt-8">
        <h3 className="ml-4 font-roboto font-medium text-sm text-black">
          Contact Details
        </h3>
        <Card
          variant="settings"
          className="mt-2 font-roboto font-normal text-base text-[#010E1E]"
        >
          <div>
            <h4 className="font-roboto text-sm text-[#48466D] opacity-80">
              Business Address
            </h4>

            {userDetails.data.business_addr &&
              userDetails.data.business_addr.trim().length > 0 && (
                <p className="mt-2 mb-10 text-[#010E1E] text-base">
                  {userDetails.data.business_addr}
                </p>
              )}

            {!userDetails.data.business_addr ||
              (userDetails.data.business_addr.trim().length < 1 && (
                <p className="mt-2 mb-10 text-[#010E1E] opacity-60 text-base">
                  N/A
                </p>
              ))}
          </div>

          <div className="mt-6 flex items-center">
            <h4 className="font-roboto text-base text-[#48466D] opacity-60">
              City:
            </h4>
            {userDetails.data.location.length > 0 && (
              <span className="text-base ml-3">
                {userDetails.data.location}
              </span>
            )}
            {userDetails.data.location.length < 1 && (
              <span className="text-[#010E1E] opacity-60 text-base ml-3">
                N/A
              </span>
            )}
            {city && <span className="text-base">,&nbsp;{city.state}</span>}
          </div>

          <div className="mt-6">
            <h4 className="font-roboto text-sm text-[#48466D] opacity-80">
              Phone Number
            </h4>

            {userDetails.data.business_num && (
              <p className="mt-2 text-base">{userDetails.data.business_num}</p>
            )}

            {!userDetails.data.business_num && (
              <p className="mt-2 text-[#010E1E] opacity-60 text-base">N/A</p>
            )}
          </div>

          <div className="mt-6 flex items-center justify-between">
            <h4 className="font-roboto text-sm text-[#48466D] opacity-80">
              My Social Media Links:
            </h4>

            <div className="flex items-center gap-6">
              <FacebookCircleIcon />
              <InstagramCircleIcon />
              <WhatsappCircleIcon />
            </div>
          </div>
        </Card>
      </div>
    </TabsContent>
  );
}
