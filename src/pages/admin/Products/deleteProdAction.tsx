import { redirect, type ActionFunctionArgs } from "react-router-dom";
import routerAction_URLSearchParams from "../../../utilities/RouteUlti/routeAction_URLSearchParams";
import { BackendUrl } from "../../../utilities/backendUrl";
import { shopRouteURL_Absolute } from "../../../utilities/RouteUlti/routeUrl";

export async function deleteProdAction(args: ActionFunctionArgs) {
    const actionInDone = () => redirect(shopRouteURL_Absolute.adminProducts)

    return await routerAction_URLSearchParams(args, BackendUrl.deleteProduct, actionInDone)

}