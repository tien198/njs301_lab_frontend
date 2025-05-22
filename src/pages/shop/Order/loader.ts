import type { LoaderFunctionArgs } from "react-router-dom";
import { routeLoader } from "../../../utilities/RouteUlti/routeLoader";
import { BackendUrl } from "../../../utilities/backendUrl";
import type { IOrder } from "../../../models/interfaces/base/IOrder";


export type OrderLoader = {
    ordersDefer: Promise<IOrder[]>
}

export function loader(args: LoaderFunctionArgs): OrderLoader {
    const ordersDefer = routeLoader(BackendUrl.order)
    return {
        ordersDefer
    }
}