import { customPageSearchParams } from "./middlewares/customPageSearchParams";
import { nearbyPageSearchParams } from "./middlewares/nearbyPageSearchParams";
import { requestHeaders } from "./middlewares/requestHeaders";
import { routeAuthorization } from "./middlewares/routeAuthorization";
import { stackMiddlewares } from "./middlewares/stackHandler";

const middlewares = [
  routeAuthorization,
  nearbyPageSearchParams,
  customPageSearchParams,
  requestHeaders,
];
export default stackMiddlewares(middlewares);
