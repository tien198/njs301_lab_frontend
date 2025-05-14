import type { ActionFunctionArgs } from 'react-router-dom';
import { BackendUrl } from "../../../utilities/backendUrl"



export async function action(arg: ActionFunctionArgs) {
    const formData = Object.fromEntries((await arg.request.formData()).entries())

    fetch(BackendUrl.cart, {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
}