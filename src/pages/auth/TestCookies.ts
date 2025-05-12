import { BackendUrl } from "../../utilities/backendUrl"

export function loader() {
    return fetch(BackendUrl.testCookie, { credentials: 'include' })
        .then(res => res.json())
        .then(data =>
            data ? console.log(data) : console.log('no include cookie')
        ).catch(err => {
            console.error(err)
        })
}