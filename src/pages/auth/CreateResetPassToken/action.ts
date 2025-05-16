import type { ActionFunctionArgs } from "react-router-dom";
import routeAction from "../../../utilities/RouteUlti/routeAction";
import { BackendUrl } from "../../../utilities/backendUrl";

import modalStore from "../../../components/modal/store";

export async function action(args: ActionFunctionArgs) {
    const formData = await args.request.formData()
    const data = Object.fromEntries(formData)

    const showModal = modalStore.getState().show
    return await routeAction(args, BackendUrl.createResetPassToken, data, (resJson) => {
        modalStore.getState().setError({
            message: resJson.message,
            name: ''
            
        })
        if (resJson.status && resJson.status < 400)
            showModal()
    })
}