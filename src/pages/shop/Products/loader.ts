import type { IProduct } from "../../../models/interfaces/base/IProduct"
import { BackendUrl } from "../../../utilities/backendUrl"

export type ProdLoader = {
    prodsDefer: Promise<IProduct[]>
}

export function loader(): ProdLoader {
    const prodsDefer = fetch(BackendUrl.base).then(res => res.json())
        .catch(error => {
            console.error(error)
            return Promise.resolve([])
        })
    return {
        prodsDefer
    }
}