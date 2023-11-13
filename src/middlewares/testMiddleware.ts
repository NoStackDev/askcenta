import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { MiddlewareFactory } from "../../types";

export const testMiddleware: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    return next(request, _next);
  };
};
