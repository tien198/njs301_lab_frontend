import type { LoaderFunctionArgs } from "react-router-dom"
import type { IProduct } from "../../../models/interfaces/base/IProduct"
import { BackendUrl } from "../../../utilities/backendUrl"

export type ProdLoader = {
    prodDefer: Promise<IProduct>
}

export function loader(args: LoaderFunctionArgs): ProdLoader {
    const prodId = args.params['prodId']
    const prodDefer = fetch(BackendUrl.product + prodId).then(res => res.json())
        .catch(error => {
            console.error(error)
            return Promise.resolve([])
        })
    return {
        prodDefer
    }
}