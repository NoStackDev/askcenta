import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import {
  MiddlewareFactory,
  UserDetailsType,
  UserPreferenceType,
} from "../../types";
import { cookies } from "next/headers";
import { getUserPreferenceAction } from "@/actions";

const route = ["custom"];

export const customPageSearchParams: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const cookie = cookies();
    const userDetails = cookie.get("user")?.value;

    if (
      userDetails &&
      route.every((ele) => request.nextUrl.pathname.split("/")[1] === ele) &&
      !request.nextUrl.searchParams.get("city_id") &&
      !request.nextUrl.searchParams.get("category_group_id")
    ) {
      const res: UserPreferenceType = await getUserPreferenceAction();
      if (
        res.selected_categories.length === 0 &&
        res.selected_locations.length === 0
      ) {
        return next(request, _next);
      }

      const absoluteURL = new URL("/custom", request.nextUrl.origin);
      res.selected_categories.length > 0 &&
        absoluteURL.searchParams.append(
          "category_group_id",
          res.selected_categories.toString()
        );
      res.selected_locations.length > 0 &&
        absoluteURL.searchParams.append(
          "city_id",
          res.selected_locations.toString()
        );
      return NextResponse.redirect(absoluteURL);
    }

    return next(request, _next);
  };
};
