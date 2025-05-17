import type { ActionFunctionArgs } from "react-router-dom";

import type { IErrorRes } from "../../../models/interfaces/response/error";

import routeAction from "../../../utilities/RouteUlti/routeAction";
import { BackendUrl } from "../../../utilities/backendUrl";

import modalStore from "../../../components/modal/store";



export async function action(args: ActionFunctionArgs) {
    const data = Object.fromEntries((await args.request.formData()).entries())

    const showModal = modalStore.getState().show
    const setError = modalStore.getState().setError

    const actionInDone = (resJson: IErrorRes) => {
        setError({
            message: resJson.message,
            name: '',
            cause: resJson.cause
        })
        if (resJson.status && resJson.status < 400)
            showModal()
    }

    return await routeAction(args, BackendUrl.createResetPassToken, data, actionInDone)
}