import type { ActionFunctionArgs } from "react-router-dom";

import routeAction_FormData from "../../../utilities/RouteUlti/routeAction_FormData"
import { BackendUrl } from "../../../utilities/backendUrl";

import modalStore from "../../../components/modal/store";
import type { IRes } from "../../../models/interfaces/response";



export async function action(args: ActionFunctionArgs) {
    // const data = Object.fromEntries((await args.request.formData()).entries())

    const showModal = modalStore.getState().show
    const setError = modalStore.getState().setError

    const actionInDone = (resJson: IRes) => {
        setError({
            message: resJson.message,
            name: '',
        })
        if (resJson.status && resJson.status < 400)
            showModal()
    }

    return await routeAction_FormData(args, BackendUrl.addProduct, actionInDone)
}