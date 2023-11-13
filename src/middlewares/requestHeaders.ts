import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { MiddlewareFactory } from "@/types";

// export function requestHeaders(request: Request) {
//   const url = new URL(request.url);
//   const origin = url.origin;
//   const pathname = url.pathname;
//   const requestHeaders = new Headers(request.headers);
//   requestHeaders.set("x-url", request.url);
//   requestHeaders.set("x-origin", origin);
//   requestHeaders.set("x-pathname", pathname);

//   return NextResponse.next({
//     request: {
//       headers: requestHeaders,
//     },
//   });
// }

export const requestHeaders: MiddlewareFactory = (next) => {
  return (request: NextRequest, _next: NextFetchEvent) => {
    const url = new URL(request.url);
    const origin = url.origin;
    const pathname = url.pathname;
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-url", request.url);
    requestHeaders.set("x-origin", origin);
    requestHeaders.set("x-pathname", pathname);

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  };
};
