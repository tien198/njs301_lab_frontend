import type { ActionFunctionArgs } from "react-router-dom";
import type ErrorRes from "../../../models/ErrorResponse";



import routeAction_URLSearchParams from "../../../utilities/RouteUlti/routeAction_URLSearchParams";
import { BackendUrl } from "../../../utilities/backendUrl";

import modalStore from "../../../components/modal/store";



export async function action(args: ActionFunctionArgs) {

    const showModal = modalStore.getState().show
    const setError = modalStore.getState().setError

    const actionInDone = (resJson: ErrorRes) => {
        setError({
            message: resJson.message,
            name: '',
            cause: resJson.cause
        })
        if (resJson.status && resJson.status < 400)
            showModal()
    }

    return await routeAction_URLSearchParams(args, BackendUrl.createResetPassToken, actionInDone)
}