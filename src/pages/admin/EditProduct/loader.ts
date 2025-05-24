import type { LoaderFunctionArgs } from "react-router-dom";
import type Product from "../../../models/Product";

import { BackendUrl } from "../../../utilities/backendUrl";
import { routeLoader } from "../../../utilities/RouteUlti/routeLoader";

export type EditLoader = {
    prodDefer: Promise<Product>
}

export async function loader(args: LoaderFunctionArgs): Promise<EditLoader> {
    const prodId = args.params['prodId']

    const prodDefer = routeLoader(BackendUrl.adminProduct + '/' + prodId)
    return {
        prodDefer
    }
}
