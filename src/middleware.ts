// import { NextResponse } from "next/server";

import { requestHeaders } from "./middlewares/requestHeaders";
import { stackMiddlewares } from "./middlewares/stackHandler";
import { testMiddleware } from "./middlewares/testMiddleware";

// export function middleware(request: Request) {
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

// export const config = {
//   matcher: ["/*"],
// };

const middlewares = [testMiddleware, requestHeaders];
export default stackMiddlewares(middlewares);
