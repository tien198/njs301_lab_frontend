import type { LoaderFunctionArgs } from "react-router-dom";
import type Product from "../../../models/Product";

import { BackendUrl } from "../../../utilities/backendUrl";
import { routeLoader } from "../../../utilities/RouteUlti/routeLoader";

export type Loader = {
    prodDefer: Promise<Product>
}

export async function loader(args: LoaderFunctionArgs) {
    const prodId = args.params['prodId']

    return await routeLoader(BackendUrl.adminProduct + prodId)
}
