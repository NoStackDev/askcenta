// import { NextResponse } from "next/server";

import { requestHeaders } from "./middlewares/requestHeaders";
import { routeAuthorization } from "./middlewares/routeAuthorization";
import { stackMiddlewares } from "./middlewares/stackHandler";
import { testMiddleware } from "./middlewares/testMiddleware";

const middlewares = [routeAuthorization, requestHeaders];
export default stackMiddlewares(middlewares);
