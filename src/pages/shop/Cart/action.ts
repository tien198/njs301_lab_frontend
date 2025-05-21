import type ErrorRes from "../../../models/ErrorResponse";


import { redirect, type ActionFunctionArgs } from "react-router-dom";
import routerAction_URLSearchParams from "../../../utilities/RouteUlti/routeAction_URLSearchParams";
import { BackendUrl } from "../../../utilities/backendUrl";
import modalStore from "../../../components/modal/store";
import { shopRouteURL } from "../../../utilities/RouteUlti/routeUrl";



export function action(args: ActionFunctionArgs) {
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

    return routerAction_URLSearchParams(args, BackendUrl.addOrder, actionInDone, actionInFailed)
}