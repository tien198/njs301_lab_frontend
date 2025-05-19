import { type ActionFunctionArgs } from "react-router-dom";
import routeAction_URLSearchParams from "../../../utilities/RouteUlti/routeAction_URLSearchParams";
import { BackendUrl } from "../../../utilities/backendUrl";

export async function action(args: ActionFunctionArgs) {

    return await routeAction_URLSearchParams(args, BackendUrl.login)
}