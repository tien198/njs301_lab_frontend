import type { ActionFunctionArgs } from "react-router-dom";
import type Res from "../../../models/Response";



import routeAction_URLSearchParams from "../../../utilities/RouteUlti/routeAction_URLSearchParams";
import { BackendUrl } from "../../../utilities/backendUrl";

import modalStore from "../../../components/modal/store";



export async function action(args: ActionFunctionArgs) {

    const showModal = modalStore.getState().show
    const setResponse = modalStore.getState().setResponse

    const actionInDone = (resJson: Res) => {
        setResponse({
            message: resJson.message,
        })
        if (resJson.status && resJson.status < 400)
            showModal()
    }

    return await routeAction_URLSearchParams(args, BackendUrl.createResetPassToken, actionInDone)
}