import type { ActionFunctionArgs } from "react-router-dom";
import routerAction_URLSearchParams from "../../../utilities/RouteUlti/routeAction_URLSearchParams";
import { BackendUrl } from "../../../utilities/backendUrl";

export async function deleteProdAction(args: ActionFunctionArgs) {

    return await routerAction_URLSearchParams(args, BackendUrl.deleteProduct)

}