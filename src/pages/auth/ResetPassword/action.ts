import type { LoaderFunctionArgs } from "react-router-dom";
import { BackendUrl } from "../../../utilities/backendUrl";
import routeAction_URLSearchParams from "../../../utilities/RouteUlti/routeAction_URLSearchParams";

export async function action(args: LoaderFunctionArgs) {

    return await routeAction_URLSearchParams(args, BackendUrl.resetPass)
}