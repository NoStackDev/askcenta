import React from "react";
import { Card, CardContent } from "../ui/card";
import {
  LocationIcon,
  PersonIcon,
  WhatsappCircleIcon,
  WhatsappIcon,
} from "../icons";
import {
  CitiesResponseType,
  RequestResponsesType,
  UserDetailsType,
} from "@/types";
import { cn, month } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { fetchCities } from "@/api/location";
import Link from "next/link";
import { cookies } from "next/headers";
import Image from "next/image";

interface ResponseCardProps extends React.HTMLAttributes<HTMLDivElement> {
  response: RequestResponsesType;
}
export default async function ResponseCard({
  className,
  response,
  ...props
}: ResponseCardProps) {
  const citiesRes: Promise<CitiesResponseType> = fetchCities();
  const citiesData = await citiesRes;
  const location = citiesData.data.find(
    (city) => city.id === Number(response.location)
  );
  const date = new Date(response.created_at);
  const cookie = cookies();
  const user: UserDetailsType["data"] | null = JSON.parse(
    cookie.get("user")?.value || "null"
  );

  return (
    <Card className={cn("", className)} {...props} variant="response">
      <CardContent className="flex flex-col">
        <h3 className="font-roboto font-semibold text-lg text-[#011B39] leading-[30px] px-3">
          <span>{response.title.split("!")[0]}!</span> &nbsp;
          <span className="opacity-50">{response.title.split("!")[1]}</span>
        </h3>

        <p className="mt-2 font-roboto font-normal text-sm text-[#00050A] opacity-70 px-3">
          {response.description}
        </p>

        <div className="mt-3 flex items-center gap-4 px-3">
          <div className="flex items-center gap-1">
            <LocationIcon pathColor="#A3A1A1" />

            <span className="font-roboto font-normal text-xs text-[#4B4A4A]">
              {location?.city}
            </span>
          </div>

          <div className="font-roboto font-normal text-xs text-[#4F4C4C]">
            {date.getDate()} {month(date.getMonth())}
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 px-3 py-2 border-t border-[#F5F4F4]">
          <div className="flex items-center gap-2">
            <Link href={`/profile?user=${response.user_id}`}>
              {response.user_profile_image_url && (
                // <Avatar>
                //   <AvatarImage
                //     src={`https://${response.user_profile_image_url}`}
                //     alt={`${response.user} profile`}
                //     className=""
                //   />
                //   <AvatarFallback>{response.user}</AvatarFallback>
                // </Avatar>

                <Image
                  width={20}
                  height={20}
                  src={`https://${response.user_profile_image_url}`}
                  alt={`${response.user} profile`}
                  className="rounded-full w-5 h-5 object-cover"
                />
              )}
            </Link>

            <Link href={`/profile?user=${response.user_id}`}>
              {!response.user_profile_image_url && (
                <Avatar>
                  <AvatarFallback className="bg-[#D9D9D9]">
                    <PersonIcon />
                  </AvatarFallback>
                </Avatar>
              )}
            </Link>

            <Link href={`/profile?user=${response.user_id}`}>
              <span className="font-roboto font-normal text-sm text-[#6356E5]">
                {response.user}
              </span>
            </Link>
          </div>

          <WhatsappCircleIcon width="32" height="32" aria-label="whatsapp" />
        </div>
      </CardContent>
    </Card>
  );
}
