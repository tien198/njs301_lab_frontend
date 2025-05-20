import type { ActionFunctionArgs } from 'react-router-dom';
import { BackendUrl } from "../../../utilities/backendUrl"
import routerAction_URLSearchParams from '../../../utilities/RouteUlti/routeAction_URLSearchParams';
import modalStore from '../../../components/modal/store';
import type ErrorRes from '../../../models/ErrorResponse';



export async function action(args: ActionFunctionArgs) {
    const showModal = modalStore.getState().show
    const setResponse = modalStore.getState().setResponse

    const actionInFailed = (resJson: ErrorRes) => {
        setResponse({
            message: resJson.message,
        })
        if (resJson.status && resJson.status < 400)
            showModal()
    }
    routerAction_URLSearchParams(args, BackendUrl.addToCart, undefined, actionInFailed)
}