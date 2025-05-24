import type { ActionFunctionArgs } from "react-router-dom";

import authenStore from "../../../store/authenStore";
import { BackendUrl } from "../../../utilities/backendUrl";
import routerAction_URLSearchParams from "../../../utilities/RouteUlti/routeAction_URLSearchParams";

export async function logoutAction(args: ActionFunctionArgs) {
    authenStore.getState().logout() // set authen infor to inital value

    return await routerAction_URLSearchParams(args, BackendUrl.logout)
}