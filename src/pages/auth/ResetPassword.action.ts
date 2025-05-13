import type { ActionFunctionArgs } from "react-router-dom";
import authenAction from "./authenAction";
import { BackendUrl } from "../../utilities/backendUrl";

import modalStore from "../../components/modal/store";

export async function action(args: ActionFunctionArgs) {
    const showModal = modalStore.getState().show
    return await authenAction(args, BackendUrl.resetPass, (resJson) => {
        modalStore.getState().setError({
            message: resJson.message,
        })
        if (resJson.status && resJson.status < 400)
            showModal()
    })
}