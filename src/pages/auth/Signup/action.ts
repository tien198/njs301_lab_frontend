import type { ActionFunctionArgs } from "react-router-dom";
import routerAction from "../../../utilities/RouteUlti/routeAction";
import { BackendUrl } from "../../../utilities/backendUrl";

export async function action(args: ActionFunctionArgs) {
    const formData = await args.request.formData()
    const data = Object.fromEntries(formData)

    return await routerAction(args, BackendUrl.signUp, data);
}