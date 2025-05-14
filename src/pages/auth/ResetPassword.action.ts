import type { ActionFunctionArgs } from "react-router-dom";
import routeAction from "../../utilities/RouteUlti/routeAction";
import { BackendUrl } from "../../utilities/backendUrl";

import modalStore from "../../components/modal/store";

export async function action(args: ActionFunctionArgs) {
    const showModal = modalStore.getState().show
    return await routeAction(args, BackendUrl.resetPass, (resJson) => {
        modalStore.getState().setError({
            message: resJson.message,
        })
        if (resJson.status && resJson.status < 400)
            showModal()
    })
}