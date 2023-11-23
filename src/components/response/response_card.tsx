import React from "react";
import { Card, CardContent } from "../ui/card";
import { LocationIcon, PersonIcon, WhatsappCircleIcon, WhatsappIcon } from "../icons";
import { CitiesResponseType, RequestResponsesType } from "@/types";
import { cn, month } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { fetchCities } from "@/api/location";

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

  return (
    <Card className={cn("", className)} {...props} variant="response">
      <CardContent className="flex flex-col">
        <h3 className="font-roboto font-semibold text-lg text-[#011B39] px-3">
          {response.title}
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
            {response.image_url && (
              <Avatar>
                <AvatarImage
                  src={`https://${response.image_url}`}
                  alt={`${response.user} profile`}
                />
                <AvatarFallback>{response.user}</AvatarFallback>
              </Avatar>
            )}

            {!response.image_url && (
              <Avatar>
                <AvatarImage alt={`${response.user} profile`} />
                <AvatarFallback className="bg-[#D9D9D9]">
                  <PersonIcon />
                </AvatarFallback>
              </Avatar>
            )}

            <span className="font-roboto font-normal text-sm text-[#6356E5]">
              {response.user}
            </span>
          </div>

          <WhatsappCircleIcon width="32" height="32" aria-label="whatsapp" />
        </div>
      </CardContent>
    </Card>
  );
}
