import type { ICart } from "../../../models/interfaces/base/ICart"
import { BackendUrl } from "../../../utilities/backendUrl"
import { routeLoader } from "../../../utilities/RouteUlti/routeLoader"

export type CartLoader = {
    cartDefer: Promise<ICart>
}

export function loader(): CartLoader {
    const cartDefer = routeLoader(BackendUrl.cart)
    return {
        cartDefer
    }
}