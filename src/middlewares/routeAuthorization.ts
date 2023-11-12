import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { MiddlewareFactory } from "../../types";
import { cookies } from "next/headers";

const protectedRoutes = ["saved", "profile", "settings"];

export const routeAuthorization: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const cookie = cookies();
    const authorization = Boolean(cookie.get("Authorization")?.value);
    const absoluteURL = new URL("/login", request.nextUrl.origin);
    if (
      !authorization &&
      !protectedRoutes.every(
        (ele) => request.nextUrl.pathname.split("/")[1] !== ele
      )
    )
      return NextResponse.redirect(absoluteURL.toString());
    return next(request, _next);
  };
};
