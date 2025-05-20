import type { ActionFunctionArgs } from "react-router-dom";

import type Res from "../../../models/Response";
import type ErrorRes from "../../../models/ErrorResponse";


import routeAction_FormData from "../../../utilities/RouteUlti/routeAction_FormData"
import { BackendUrl } from "../../../utilities/backendUrl";

import modalStore from "../../../components/modal/store";



export async function action(args: ActionFunctionArgs) {

    const setType = modalStore.getState().setType
    const showModal = modalStore.getState().show
    const setResponse = modalStore.getState().setResponse

    const actionInDone = (resJson: Res) => {
        setType('inform')
        setResponse({
            message: resJson.message,
        })
        if (resJson.status && resJson.status < 400)
            showModal()
    }

    const actionInFailed = (resJson: ErrorRes) => {
        setType('error')
        setResponse({
            message: resJson.name,
            status: resJson.status,
            cause: resJson.cause
        })

        showModal()
    }

    return await routeAction_FormData(args, BackendUrl.editProduct, actionInDone, actionInFailed)
}