import { BackendUrl } from "../../../utilities/backendUrl"

export function loader() {
    const prodsDefer = fetch(BackendUrl.adminProducts).then(res => res.json())
        .catch(error => {
            console.error(error)
            return Promise.resolve([])
        })
    return {
        prodsDefer
    }
}