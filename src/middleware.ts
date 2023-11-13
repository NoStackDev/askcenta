// import { NextResponse } from "next/server";

import { requestHeaders } from "./middlewares/requestHeaders";
import { stackMiddlewares } from "./middlewares/stackHandler";

const middlewares = [requestHeaders];
export default stackMiddlewares(middlewares);
