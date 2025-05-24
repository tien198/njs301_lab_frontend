import type ErrorRes from "../../../models/ErrorResponse";


import { redirect, type ActionFunctionArgs } from "react-router-dom";
import { BackendUrl } from "../../../utilities/backendUrl";
import modalStore from "../../../components/modal/store";
import { shopRouteURL } from "../../../utilities/RouteUlti/routeUrl";
import routeAction_DownloadFile_URLSearchParams from "../../../utilities/RouteUlti/routerAction_DowloadFile_URLSearchParams";



export async function action(args: ActionFunctionArgs) {
    const showModal = modalStore.getState().show
    const setResponse = modalStore.getState().setResponse
    const setType = modalStore.getState().setType


    const actionInDone = () => {
        return redirect('/' + shopRouteURL.order)
    }

    const actionInFailed = (resJson: ErrorRes) => {
        setType('error')
        setResponse({
            message: resJson.message,
            status: resJson.status,
            name: resJson.name,
            cause: resJson.cause
        })
        showModal()
    }

    return routeAction_DownloadFile_URLSearchParams(args, BackendUrl.addOrder, actionInDone, actionInFailed)
}