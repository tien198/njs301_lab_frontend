import type { ActionFunctionArgs } from "react-router-dom"
import { BackendUrl } from "../../../utilities/backendUrl"



export async function action(arg: ActionFunctionArgs) {
    const data = Object.fromEntries((await arg.request.formData()).entries())

    await fetch(BackendUrl.addProduct, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}