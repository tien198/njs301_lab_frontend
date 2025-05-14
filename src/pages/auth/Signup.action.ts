import type { ActionFunctionArgs } from "react-router-dom";
import routeAction from "../../utilities/RouteUlti/routeAction";
import { BackendUrl } from "../../utilities/backendUrl";

export async function action(args: ActionFunctionArgs) {
    return await routeAction(args, BackendUrl.signUp);
}