import type { IProduct } from "../../../models/interfaces/base/IProduct"
import { BackendUrl } from "../../../utilities/backendUrl"
import { routeLoader } from "../../../utilities/RouteUlti/routeLoader"

export type ProdLoader = {
    prodsDefer: Promise<IProduct[]>
}

export function loader(): ProdLoader {
    const prodsDefer = routeLoader(BackendUrl.adminProducts)
    return {
        prodsDefer
    }
}