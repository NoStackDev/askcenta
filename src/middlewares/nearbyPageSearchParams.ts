import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { MiddlewareFactory, UserDetailsType } from "../../types";
import { cookies } from "next/headers";
import { fetchCities } from "@/api/location";

const route = ["nearby"];

export const nearbyPageSearchParams: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const cookie = cookies();
    const userDetails = cookie.get("user")?.value;

    if (
      userDetails &&
      route.every((ele) => request.nextUrl.pathname.split("/")[1] === ele) &&
      !request.nextUrl.searchParams.get("city_id") &&
      (JSON.parse(userDetails) as UserDetailsType["data"]).location
    ) {
      const absoluteURL = new URL("/nearby", request.nextUrl.origin);
      const locationString = (
        JSON.parse(userDetails) as UserDetailsType["data"]
      ).location;
      const cities = await fetchCities();
      const city = cities.data.find(
        (city) => city.city.toLowerCase() === locationString.toLowerCase()
      );
      city && absoluteURL.searchParams.append("city_id", city.id.toString());
      return NextResponse.redirect(absoluteURL);
    }

    return next(request, _next);
  };
};
