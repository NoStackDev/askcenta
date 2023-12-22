import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { MiddlewareFactory } from "../../types";
import { cookies } from "next/headers";

const protectedRoutes = ["favourites", "profile", "settings"];

export const routeAuthorization: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const cookie = cookies();
    const authorization = Boolean(cookie.get("Authorization")?.value);
    if (
      !authorization &&
      !protectedRoutes.every(
        (ele) => request.nextUrl.pathname.split("/")[1] !== ele
      )
    ) {
      const absoluteURL = new URL("/login", request.nextUrl.origin);
      return NextResponse.redirect(absoluteURL.toString());
    }

    if (
      authorization &&
      ["login", "signup"].includes(request.nextUrl.pathname.split("/")[1])
    ) {
      const absoluteURL = new URL("/", request.nextUrl.origin);
      return NextResponse.redirect(absoluteURL.toString());
    }

    return next(request, _next);
  };
};
