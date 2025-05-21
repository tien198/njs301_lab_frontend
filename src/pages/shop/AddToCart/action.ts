import { redirect, type ActionFunctionArgs } from 'react-router-dom';
import { BackendUrl } from "../../../utilities/backendUrl"
import routerAction_URLSearchParams from '../../../utilities/RouteUlti/routeAction_URLSearchParams';
import modalStore from '../../../components/modal/store';
import type ErrorRes from '../../../models/ErrorResponse';
import { shopRouteURL } from '../../../utilities/RouteUlti/routeUrl';



export async function action(args: ActionFunctionArgs) {
    const showModal = modalStore.getState().show
    const setResponse = modalStore.getState().setResponse
    const setType = modalStore.getState().setType


    const actionInDone = () => {
        return redirect('/' + shopRouteURL.cart)
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
    return routerAction_URLSearchParams(args, BackendUrl.addToCart, actionInDone, actionInFailed)
}