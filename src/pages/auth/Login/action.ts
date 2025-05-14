import type { ActionFunctionArgs } from "react-router-dom";
import routeAction from "../../../utilities/RouteUlti/routeAction";
import { BackendUrl } from "../../../utilities/backendUrl";

export async function action(args: ActionFunctionArgs) {
    const formData = await args.request.formData()
    const data = Object.fromEntries(formData)

    return await routeAction(args, BackendUrl.login, data)
}